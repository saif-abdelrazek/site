/* * This file is part of the Saif Abdelrazek's personal website project.
 * It is licensed under the MIT License.
 */

import type { LiveDataCollection } from "astro";
import type { LiveLoader } from "astro/loaders";
import { ReposLoaderError } from "../types/reposTypes";

import type {
  FetchReposParams,
  FetchedRepoResponse,
  ReposFilterType,
  RepoType,
  RepoLoaderReturnType,
} from "../types/reposTypes";

/**
 * Fetches repositories from the GitHub API with optional filtering.
 * @param url - The URL to fetch the repositories from
 * @param apikey - Optional GitHub API key for authentication
 * @param filter - Optional filter parameters for the repositories
 * @param id - Optional repository ID to fetch a specific repository
 * @returns A promise that resolves to an array of repositories or a single repository if `id` is provided
 * @throws Error if the request fails or if the repository is not found
 */
export const fetchRepos = async ({
  url,
  apikey,
  filter,
  id,
}: FetchReposParams) => {
  if (filter) {
    const params = new URLSearchParams();
    if (filter.visibility) {
      params.append("visibility", filter.visibility);
      if (filter.type) {
        console.warn(
          "The 'type' filter is ignored when 'affiliation' is set. To avoid getting 422 errors, please remove the 'type' filter.",
        );
      }
    }
    if (filter.affiliation) {
      params.append("affiliation", filter.affiliation);
      if (filter.type) {
        console.warn(
          "The 'type' filter is ignored when 'affiliation' is set. To avoid getting 422 errors, please remove the 'type' filter.",
        );
      }
    }
    if (filter.type && !filter.affiliation && !filter.visibility) {
      params.append("type", filter.type);
    }
    if (filter.sort) {
      params.append("sort", filter.sort);
    }
    if (filter.per_page) {
      params.append("per_page", filter.per_page.toString());
    }
    if (filter.page) {
      params.append("page", filter.page.toString());
    }
    if (filter.direction) {
      params.append("direction", filter.direction);
    }
    if (filter.since) {
      params.append("since", filter.since);
    }
    if (filter.before) {
      params.append("before", filter.before);
    }
    url += `?${params.toString()}`;
  }
  const response = await fetch(url, {
    headers: {
      ...(apikey ? { Authorization: `Bearer ${apikey}` } : {}),
    },
  });

  const ratelimit = response?.headers?.get("x-ratelimit-limit");
  const ratelimitInt = ratelimit ? parseInt(ratelimit, 10) : null;
  if (ratelimitInt === 60) {
    console.warn(
      "You are using the GitHub API without an API key or token, which limits you to 60 requests per hour. Consider using an API key or token to increase your rate limit to 5000 requests per hour.",
    );
  }

  const ratelimitRemaining = response?.headers?.get("x-ratelimit-remaining");
  const ratelimitRemainingInt = ratelimitRemaining
    ? parseInt(ratelimitRemaining, 10)
    : null;
  if (ratelimitRemainingInt === 0) {
    console.error(
      "You have reached the GitHub API rate limit. Please try again later or use an API key or token to increase your rate limit.",
    );
    return;
  } else if (ratelimitRemainingInt && ratelimitRemainingInt < 100) {
    console.warn(
      "You are approaching the GitHub API rate limit. You have " +
        ratelimitRemainingInt +
        " requests remaining.",
    );
  }

  if (response.statusText === "Unauthorized") {
    throw new Error("Unauthorized: Please check your GitHub API key or token.");
  }
  if (response.statusText === "rate limit exceeded") {
    throw new Error("Rate limit exceeded: Please try again later.");
  }
  if (!response.ok) {
    throw new Error(
      `Failed to fetch repositories: ${response.status} ${response.statusText}`,
    );
  }
  if (id) {
    const repo = (await response.json()).find(
      (repo: { id: string }) => repo.id === id,
    );
    if (!repo) {
      throw new Error("Repository not found");
    }
    return repo;
  }

  const repos = await response.json();

  if (!Array.isArray(repos)) {
    throw new Error(
      "Failed to fetch repositories: " +
        (repos && repos.message ? repos.message : "Unknown error"),
    );
  }
  const reposWithoutSite = repos.filter(
    (repo: FetchedRepoResponse) =>
      repo.name !== "site" && repo.name !== "saifabdelrazek011",
  );
  if (!Array.isArray(reposWithoutSite)) {
    throw new Error("Failed to fetch repositories");
  }
  if (reposWithoutSite.length === 0) {
    throw new Error("No repositories found");
  }
  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch repositories: ${response.status} ${response.statusText}`,
    );
  }

  return reposWithoutSite;
};

/**  I created this but stop using becasue it takes a lot from my rate limit
 * @param languages_url - The URL to fetch the languages from
 * @param apikey - Optional GitHub API key for authentication
 * @returns A promise that resolves to the languages of the repository
 */

const fetchRepoLanguages = async (languages_url: string, apikey?: string) => {
  try {
    const response = await fetch(languages_url, {
      headers: {
        ...(apikey ? { Authorization: `Bearer ${apikey}` } : {}),
      },
    });
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch repository languages: ${response.status} ${response.statusText}`,
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching repository languages:", error);
    throw error;
  }
};

/**
 * Loader for GitHub repositories.
 * This loader fetches repositories from the GitHub API and provides methods to load a collection of repositories or a single repository by ID.
 * @param config - Configuration object containing the API URL and optional API key
 * @param config.reposApiUrl - The base URL for the GitHub repositories API
 * @param config.apikey - Optional GitHub API key for authentication
 * @returns A LiveLoader for repositories
 */

export const reposLoader = (config: {
  reposApiUrl: string;
  apikey?: string;
}): LiveLoader<RepoType, { id: string }, ReposFilterType, ReposLoaderError> => {
  return {
    name: "repos-loader",
    loadCollection: async ({
      filter,
    }): Promise<LiveDataCollection<RepoType> | { error: ReposLoaderError }> => {
      try {
        const repos = await fetchRepos({
          url:
            config.reposApiUrl ||
            "https://api.github.com/users/saifabdelrazek011/repos?per_page=100",
          filter,
          apikey: config.apikey,
        });

        const nonForkRepos = repos.filter(
          (repo: FetchedRepoResponse) => !repo.fork,
        );
        return {
          entries: nonForkRepos.map(
            (repo: FetchedRepoResponse): RepoLoaderReturnType => ({
              id: repo.id,
              data: {
                id: repo.id,
                name: repo.name,
                description: repo.description || "No description available",
                repolink: repo.html_url || "",
                website: repo.homepage || "",
                mainlang: repo.language ? repo.language : "Unknown",
              },
            }),
          ),
        };
      } catch (error: any) {
        return {
          error: new ReposLoaderError("Failed to load repositories: " + error),
        };
      }
    },

    loadEntry: async ({ filter }) => {
      try {
        const repo = await fetchRepos({
          url: config.reposApiUrl || "https://api.github.com/user/repos",
          apikey: config.apikey,
          id: filter.id,
        });
        if (!repo) {
          return {
            error: new ReposLoaderError(
              `Repository with ID ${filter.id} not found`,
            ),
          };
        }

        return {
          id: repo.id,
          data: repo,
        };
      } catch (error: any) {
        return {
          error: new ReposLoaderError(
            `Failed to load repository with ID ${filter.id}: ${error.message}`,
          ),
        };
      }
    },
  };
};
