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

export const unSlugify = (str: string): string => {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  return str
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^\s+|\s+$/g, "");
};

export const unSlugifyToAuthor = (str: string): string => {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  const unSlugified = unSlugify(str);

  const words = unSlugified.split(" ");
  if (words.length === 0) {
    return "";
  }
  const upperFirstWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  const capitalized = upperFirstWords.join(" ");

  return capitalized.replace(/[^a-zA-Z\s]/g, "").trim();
};

export default slugify;
