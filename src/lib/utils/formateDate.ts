export const formatDate = (date: Date, lang: string): string => {
  return new Date(date).toLocaleDateString(lang === "ar" ? "ar" : "en-US", {
    timeZone: "UTC",
  });
};

export default formatDate;
