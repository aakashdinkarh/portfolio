const buildConfigFiles = [
  "https://aakashdinkarh.github.io/static_assets/files/projects/portfolio-config-server.json",
  "https://aakashdinkarh.github.io/static_assets/files/projects/portfolio-config-json-ld.json",
];

const fetchBuildConfig = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const getBuildConfig = async () => {
  const [serverConfig, ldJsonConfig] = await Promise.all(buildConfigFiles.map(fetchBuildConfig));

  return {
    serverConfig,
    ldJsonConfig,
  };
};

/**
 * @typedef {Object} Repo
 * @property {string} name
 * @property {string} updated_at
 * @typedef {Repo[]} RepoList
 */

/**
 * @returns {Promise<RepoList>}
 */
const getRepos = async () => {
  const response = await fetchBuildConfig('https://api.github.com/users/aakashdinkarh/repos?per_page=100');
  return response;
};
const getSiteMapConfig = async () => {
  const response = await fetchBuildConfig("https://aakashdinkarh.github.io/static_assets/files/projects/portfolio-config-sitemap.json");
  return response;
};

export const getSitemapConfig = async () => {
  const [siteMapConfig, repoList] = await Promise.all([getSiteMapConfig(), getRepos()]);

  const siteMapUrls = siteMapConfig.urls.map(url => {
    // eslint-disable-next-line no-useless-escape
    const match = url.url.match(/^https:\/\/aakashdinkar\.in\/([^\/]+)\//);

    let projectName = match ? match[1] : '';
    if (projectName === '' && url.url === 'https://aakashdinkar.in') {
      projectName = 'portfolio';
    }

    const updatedAt = repoList.find(repo => repo.name === projectName)?.updated_at;
    const formattedUpdatedAt = updatedAt ? new Date(updatedAt).toISOString().split('T')[0] : undefined;

    return {
      ...url,
      ...(formattedUpdatedAt && { lastmod: formattedUpdatedAt }),
    };
  });

  return {
    ...siteMapConfig,
    urls: siteMapUrls,
  };
};
