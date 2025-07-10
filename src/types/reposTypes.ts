export interface RepoType {
  id: string;
  name: string;
  description?: string;
  repolink?: string;
  website?: string;
  mainlang?: string;
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
