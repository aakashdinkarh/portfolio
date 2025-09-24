#!/usr/bin/env node

const esbuild = require("esbuild");
const fs = require("fs-extra");
const path = require("path");
const {
  processCSS,
  processHTML,
  printBuildSummary,
} = require("./build-utils");
const config = require("./build-config");

const rootPath = path.join(__dirname, "..");

async function build() {
  const isProduction = process.argv.includes("--production");
  const outputDir = path.join(rootPath, config.paths.outputDir);

  console.log("🚀 Starting build process...");
  console.log(`📦 Mode: ${isProduction ? "Production" : "Development"}`);

  try {
    // Clean output directory
    await fs.remove(outputDir);
    await fs.ensureDir(outputDir);

    // Bundle JavaScript
    console.log("📦 Bundling JavaScript modules...");
    const esbuildConfig = isProduction ? config.esbuildProd : config.esbuild;
    const jsResult = await esbuild.build({
      entryPoints: [path.join(rootPath, config.paths.entryPoint)],
      outfile: path.join(outputDir, "bundle.js"),
      ...esbuildConfig,
    });

    if (jsResult.errors.length > 0) {
      console.error("❌ JavaScript bundling errors:", jsResult.errors);
      process.exit(1);
    }

    // Process CSS
    const cssPaths = config.paths.cssFiles.map((cssFile) => path.join(rootPath, cssFile));
    const cssContent = await processCSS(cssPaths, isProduction);

    // Process HTML
    const htmlPath = path.join(rootPath, config.paths.htmlTemplate);
    const htmlContent = await processHTML(htmlPath, cssContent, "bundle.js");

    // Process files to be available in build
    const filesToBeAvailableInBuildPath = path.join(rootPath, config.paths.filesToBeAvailableInBuildPath);
    const files = await fs.readdir(filesToBeAvailableInBuildPath, { recursive: true });
    for (const file of files) {
      const sourcePath = path.join(filesToBeAvailableInBuildPath, file);
      const stats = await fs.stat(sourcePath);
      if (stats.isFile()) {
        const fileName = path.basename(file);
        const destPath = path.join(outputDir, fileName);
        await fs.copy(sourcePath, destPath);
      }
    }

    // Write the bundled HTML file
    const outputHtmlPath = path.join(outputDir, "index.html");
    await fs.writeFile(outputHtmlPath, htmlContent);

    // Print build summary
    printBuildSummary({
      outputDir,
      htmlPath: outputHtmlPath,
      bundlePath: path.join(outputDir, "bundle.js"),
      isProduction,
      cssMinified: isProduction,
    });

    console.log("");
    console.log("🚀 To deploy:");
    console.log(
      "   Copy the contents of the dist/ directory to your deployment location",
    );
    console.log("   The index.html file can be opened directly in a browser");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

build();
