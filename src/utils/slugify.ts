export const slugify = (str: string): string => {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export default slugify;
