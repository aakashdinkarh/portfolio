#!/usr/bin/env node

const { getSitemapConfig } = require("./get-build-config");

/**
 * @typedef {Object} SitemapUrl
 * @property {string} url - The URL to include in the sitemap.
 * @property {number} priority - The priority of this URL.
 * @property {string} [lastmod] - Optional last modification date in W3C format (YYYY-MM-DD).
 * @property {string} [changefreq] - Optional change frequency (always, hourly, daily, weekly, monthly, yearly, never).
 */

/**
 * @typedef {Object} SiteMap
 * @property {SitemapUrl[]} urls - An array of objects each representing a sitemap entry.
 */

/**
 * Escape XML special characters
 * @param {string} str - String to escape
 * @returns {string} XML-escaped string
 */
const escapeXml = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
};

const generateSitemap = async () => {
  /** @type {SiteMap} */
  const sitemapConfig = await getSitemapConfig();

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const url of sitemapConfig.urls) {
    const escapedUrl = escapeXml(url.url);
    sitemapContent += `\t<url>\n\t\t<loc>${escapedUrl}</loc>`;

    // Only include lastmod if provided (don't use same date for all URLs)
    if (url.lastmod) {
      sitemapContent += `\n\t\t<lastmod>${url.lastmod}</lastmod>`;
    }

    // Only include changefreq if provided
    // It's better to omit it than to overstate frequency, which can waste crawl budget
    if (url.changefreq) {
      sitemapContent += `\n\t\t<changefreq>${url.changefreq}</changefreq>`;
    }

    sitemapContent += `\n\t\t<priority>${url.priority}</priority>\n\t</url>\n`;
  }
  sitemapContent += `</urlset>\n`;
  return sitemapContent;
};

module.exports = {
  generateSitemap,
};
