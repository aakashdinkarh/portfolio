/**
 * Build configuration for the projects project
 */
module.exports = {
  // File paths
  paths: {
    entryPoint: "src/app.js",
    cssFiles: [
      "styles/style.css",
      "styles/responsive.css",
      "styles/nav.css",
      "styles/scrollItems.css",
      "styles/home.css",
      "styles/about.css",
      "styles/skills.css",
      "styles/experience.css",
      "styles/project.css",
      "styles/footer.css",
    ],
    htmlTemplate: "index.html",
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
  },
};
