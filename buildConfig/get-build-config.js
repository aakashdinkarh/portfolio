const buildConfigFiles = [
  "https://aakashdinkarh.github.io/static_assets/files/projects/portfolio-config-server.json",
  "https://aakashdinkarh.github.io/static_assets/files/projects/portfolio-config-json-ld.json"
];

const fetchBuildConfig = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export const getBuildConfig = async () => {
  const [serverConfig, ldJsonConfig] = await Promise.all(buildConfigFiles.map(fetchBuildConfig));

  return {
    serverConfig,
    ldJsonConfig
  }
}
