export interface RepoType {
  id: string;
  name: string;
  description?: string;
  repolink?: string;
  website?: string;
  mainlang?: string;
  stars?: number;
  forks?: number;
  commits?: number;
  license?: string;
  updatedAt?: string;
  size?: number;
  topics?: string[];
  archived?: boolean;
}
export interface RepoLoaderReturnType {
  id: string;
  data: RepoType;
}

export interface FetchedRepoResponse {
  id: string;
  name: string;
  description?: string;
  languages_url: string;
  html_url?: string;
  homepage?: string;
  language?: string;
  fork: boolean;
  stargazers_count?: number;
  forks_count?: number;
  watchers_count?: number;
  size?: number;
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;
  license?: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  archived?: boolean;
  disabled?: boolean;
  topics?: string[];
}

export interface FetchReposParams {
  id?: string;
  url: string;
  apikey?: string;
  filter?: ReposFilterType;
}

export interface ReposFilterType {
  id?: string;
  visibility?: string;
  affiliation?: string;
  type?: string;
  sort?: string;
  per_page?: number;
  page?: number;
  direction?: string;
  since?: string;
  before?: string;
}

/**
 * Custom error class for the ReposLoader.
 * @extends Error
 */
export class ReposLoaderError extends Error {
  constructor(
    message: string,
    public code?: number,
  ) {
    super(message);
    this.name = "ReposLoaderError";
  }
}
