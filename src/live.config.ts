import { defineLiveCollection } from "astro:content";
import { reposLoader } from "./loaders/github";
import { getSecret } from "astro:env/server";

console.log("Loading GitHub repositories...");

const repos = defineLiveCollection({
  loader: reposLoader({
    reposApiUrl: "https://api.github.com/user/repos",
    apikey: getSecret("GITHUB_TOKEN") || "",
  }),
});

export const collections = {
  repos,
};
