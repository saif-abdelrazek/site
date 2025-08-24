import { defineLiveCollection } from "astro:content";
import { reposLoader } from "./loaders/github";
import { getSecret } from "astro:env/server";
import { hackatimeLoader } from "./loaders/hackatime";

const repos = defineLiveCollection({
  loader: reposLoader({
    reposApiUrl: "https://api.github.com/users/saif-abdelrazek/repos?per_page=100",
    apikey: getSecret("GITHUB_TOKEN") || "",
  }),
});

const codingStats = defineLiveCollection({
  loader: hackatimeLoader({
    statsApiUrl: `https://hackatime.hackclub.com/api/v1/users/${getSecret("HACKATIME_USER_ID") || ""}/stats`,
    userId: getSecret("HACKATIME_USER_ID") || "",
    apikey: getSecret("HACKATIME_API_KEY") || "",
  }),
});

export const collections = {
  repos,
  codingStats,
};
