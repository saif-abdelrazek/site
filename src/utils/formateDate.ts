export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
};

export default formatDate;
