import { HACKATIME_API_KEY, HACKATIME_USER_ID } from "../config/env";

export const GetMyHackaTimeStats = async () => {
  try {
    const response = await fetch(
      `https://hackatime.hackclub.com/api/v1/users/${HACKATIME_USER_ID}/stats?api_key=${HACKATIME_API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching HackaTime stats:", error);
    throw error;
  }
};

export const GetMyTodayCodingTime = async () => {
  try {
    const response = await fetch(
      `https://hackatime.hackclub.com/api/hackatime/v1/users/${HACKATIME_USER_ID}/statusbar/today?api_key=${HACKATIME_API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching today's coding time:", error);
    throw error;
  }
};
