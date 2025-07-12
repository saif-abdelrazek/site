import type {
  HackaTimeFilterType,
  HackaTimeLoaderReturnType,
  HackaTimeStatsType,
  FetchHackaTimeStatsParams,
  FetchedHackaTimeStatsResponse,
} from "../types/hacatimeTypes";
import { HackaTimeLoaderError } from "../types/hacatimeTypes";
import type { LiveLoader } from "astro/loaders";

/**
 * Get my HackaTime stats
 * @param userId - The user ID for HackaTime
 * @param apikey - The API key for HackaTime
 * @throws Will throw an error if the fetch fails or the response is not ok
 * @example
 * ```ts
 * const stats = await GetMyHackaTimeStats("your_user_id", "your_api_key");
 * ```
 * @returns My HackaTime stats
 */
export const fetchHackaTimeStats = async ({
  statsUrl,
  userId,
  apikey,
  filter,
}: FetchHackaTimeStatsParams): Promise<FetchedHackaTimeStatsResponse> => {
  let url =
    statsUrl || `https://hackatime.hackclub.com/api/v1/users/${userId}/stats`;
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    if (filter) {
      const params = new URLSearchParams();
      if (filter.features) {
        params.append("features", filter.features);
      }
      if (filter.startDate) {
        params.append("start_date", filter.startDate);
      }
      if (filter.endDate) {
        params.append("end_date", filter.endDate);
      }
      url += `?${params.toString()}`;
    }
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()).data as FetchedHackaTimeStatsResponse;

    return data;
  } catch (error) {
    console.error("Error fetching HackaTime stats:", error);
    throw error;
  }
};

/** I don't use it currently, but I might need it later
 * Get today's coding time from HackaTime API
 * @param userId - The user ID for HackaTime
 * @param apikey - The API key for HackaTime
 * @throws Will throw an error if the fetch fails or the response is not ok
 * @example
 * ```ts
 * const todayCodingTime = await GetMyTodayCodingTime("your_user_id", "your_api_key");
 * ```
 * @returns Today's coding time from HackaTime API
 */
export const GetMyTodayCodingTime = async (userId: string, apikey: string) => {
  try {
    const response = await fetch(
      `https://hackatime.hackclub.com/api/hackatime/v1/users/${userId}/statusbar/today`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apikey}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching today's coding time:", error);
    throw error;
  }
};

export const hackatimeLoader = (config: {
  statsApiUrl: string;
  userId: string;
  apikey: string;
}): LiveLoader<
  HackaTimeStatsType,
  HackaTimeFilterType,
  never,
  HackaTimeLoaderError
> => {
  return {
    name: "hackatime-loader",
    loadEntry: async ({
      filter,
    }: {
      filter: HackaTimeFilterType;
    }): Promise<
      HackaTimeLoaderReturnType | { error: HackaTimeLoaderError }
    > => {
      try {
        const stats = await fetchHackaTimeStats({
          statsUrl: config.statsApiUrl,
          userId: config.userId,
          apikey: config.apikey,
          order: filter.order,
          filter: filter,
          features: filter.features,
        });
        if (!stats) {
          throw new HackaTimeLoaderError("No stats found for the user");
        }

        return {
          id: config.userId,
          data: {
            startdate: stats.start,
            enddate: stats.end,
            totalcodingseconds: stats.total_seconds,
            dailyaverage: stats.daily_average,
            languages: stats.languages
              ? stats.languages.map((lang) => ({
                  name: lang.name,
                  totalseconds: lang.total_seconds,
                  percentage: lang.percent,
                }))
              : [],
            projects: stats.projects
              ? stats.projects.map((proj) => ({
                  name: proj.name,
                  totalseconds: proj.total_seconds,
                  percentage: proj.percent,
                }))
              : [],
          },
        };
      } catch (error: any) {
        return {
          error: new HackaTimeLoaderError(
            `Failed to load HackaTime stats for the user: ${error.message}`,
          ),
        };
      }
    },
    loadCollection: async () => {
      return {
        entries: [],
        error: new HackaTimeLoaderError(
          "HackaTime collection loading is not supported",
        ),
      };
    },
  };
};
