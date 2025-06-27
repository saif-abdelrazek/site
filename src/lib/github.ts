export const getNewestTwoRepos = async () => {
  const response = await fetch(
    "https://api.github.com/users/saifabdelrazek011/repos?sort=created&direction=desc&per_page=100",
  );
  const reposWithoutSite = (await response.json()).filter(
    (repo: { name: string }) => repo.name !== "site",
  );
  return reposWithoutSite.slice(0, 2);
};
