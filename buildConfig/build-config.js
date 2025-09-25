/**
 * Build configuration for the projects project
 */
module.exports = {
  // File paths
  paths: {
    entryPoint: "src/clientApp.js",
    cssFiles: [
      "styles/style.css",
      "styles/nav.css",
      "styles/home.css",
      "styles/about.css",
      "styles/skills.css",
      "styles/scrollItems.css",
      "styles/experience.css",
      "styles/project.css",
      "styles/footer.css",
      "styles/responsive.css",
    ],
    htmlTemplate: "static-src/index.html",
    filesToBeAvailableInBuildPath: "static-src/toBeAvailableInBuild",
    outputDir: "dist",
    devOutputDir: "dist-dev",
  },

  // esbuild configuration
  esbuild: {
    target: ["es2020"],
    format: "iife",
    bundle: true,
    sourcemap: true,
    define: {
      "process.env.NODE_ENV": '"development"',
      "BUILD_CONFIG": '{"right-arrow-icon":"https://aakashdinkarh.github.io/static_assets/images/svgs/right-arrow-icon.svg","upward-icon":"https://aakashdinkarh.github.io/static_assets/images/svgs/upward-icon.svg"}',
    },
  },

  // Production esbuild configuration
  esbuildProd: {
    target: ["es2020"],
    format: "iife",
    bundle: true,
    minify: true,
    sourcemap: false,
    define: {
      "process.env.NODE_ENV": '"production"',
      "BUILD_CONFIG": '{"right-arrow-icon":"https://aakashdinkarh.github.io/static_assets/images/svgs/right-arrow-icon.svg","upward-icon":"https://aakashdinkarh.github.io/static_assets/images/svgs/upward-icon.svg"}',
    },
  },

  // Development server configuration
  devServer: {
    port: process.env.PORT || 3000,
    servedir: "dist-dev",
  },

  // HTML template replacements
  htmlReplacements: {
    cssLink: '<link rel="stylesheet" />',
    headerElement: "<header></header>",
    mainElement: "<main></main>",
    footerElement: "<footer></footer>",
    moduleScript: '<script src="bundle.js"></script>',
    jsonLDScripts: '<!-- JSON-LD scripts will be generated here -->',
  },
};
