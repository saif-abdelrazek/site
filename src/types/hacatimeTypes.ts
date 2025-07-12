export interface HackaTimeStatsType {
  startdate: string;
  enddate: string;
  totalcodingseconds: number;
  dailyaverage: number;
  languages?: {
    name: string;
    totalseconds: number;
    percentage: number;
  }[];
  projects?: {
    name: string;
    totalseconds: number;
    percentage: number;
  }[];
}

export interface HackaTimeLoaderReturnType {
  id: string;
  data: HackaTimeStatsType;
}

export interface FetchedHackaTimeStatsResponse {
  user_id: string;
  start: string;
  end: string;
  daily_average: number;
  total_seconds: number;
  languages?:
    | {
        name: string;
        total_seconds: number;
        percent: number;
      }[]
    | undefined;
  projects?:
    | {
        name: string;
        total_seconds: number;
        percent: number;
      }[]
    | undefined;
}

export interface FetchHackaTimeStatsParams {
  statsUrl?: string;
  userId: string;
  apikey?: string;
  filter?: HackaTimeFilterType;
  order?: number;
  features?: "projects" | "languages";
}

export interface HackaTimeFilterType {
  features?: "projects" | "languages";
  order?: number;
  startDate?: string;
  endDate?: string;
}

/**
 * Custom error class for the ReposLoader.
 * @extends Error
 */
export class HackaTimeLoaderError extends Error {
  constructor(
    message: string,
    public code?: number,
  ) {
    super(message);
    this.name = "HackaTimeLoaderError";
  }
}
