/**
 * JSON-LD structured data configuration
 * This file contains all the structured data that will be injected into the HTML at build time
 */

module.exports = {
  // Person/Profile page schema
  profilePage: {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Aakash Dinkar",
      "alternateName": "aakashdinkarh",
      "description": "Aakash Dinkar is a Frontend Engineer at Meesho. He is proficient in ReactJS, NextJS, TypeScript, Redux, Webp Performance Optimization. He is also a passionate learner and enjoys sharing his knowledge with others.",
      "image": "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/portfolio.webp",
      "sameAs": [
        "https://www.linkedin.com/in/aakash-dinkar-74a817212/",
        "https://github.com/aakashdinkarh",
        "https://www.instagram.com/dinkar_2103/",
      ],
    },
  },

  // Projects list schema
  projectsList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects",
    "itemListElement": [
      {
        "@type": "Article",
        "headline": "Bounce and Collect Game",
        "url": "https://aakashdinkar.in/bounce-and-collect-game/",
        "image": "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/bounce-and-collect-game_2.webp",
        "description": "A fun game where you collect points while mastering gravity and elasticity.",
        "author": {
          "@type": "Person",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
      },
      {
        "@type": "Article",
        "headline": "Smart Components Dinkar",
        "url": "https://devdinkar-codebook.vercel.app",
        "image": "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/devDinkar-codebook_1.webp",
        "description": "A collection of components designed to ease web application development by providing reusable and efficient solutions for common UI patterns.",
        "author": {
          "@type": "Person",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
      },
      {
        "@type": "Article",
        "headline": "JS/TS Playground",
        "url": "https://aakashdinkar.in/js-ts-playground/",
        "image": "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/js-ts-playground_2.webp",
        "description": "A browser-based JavaScript/TypeScript playground with real-time execution, rich console output, and offline support.",
        "author": {
          "@type": "Person",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
      },
      {
        "@type": "Article",
        "headline": "Content Tracker",
        "url": "https://chromewebstore.google.com/detail/content-tracker/jfmjdjbfofohakgmdmdhkajimjjplbna",
        "image": "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/content-tracker_1.webp",
        "description": "A Chrome extension that tracks specified content on a webpage in real-time and sends a browser notification when the content appears. This extension is ideal for monitoring dynamic web pages where content updates frequently.",
        "author": {
          "@type": "Person",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
      },
      {
        "@type": "Article",
        "headline": "Window Props Plus",
        "url": "https://chromewebstore.google.com/detail/window-props-plus/imepmnfbpoohiejbnbeodjlgjpakmkif",
        "image": "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/window-props-plus_2.webp",
        "description": "This Chrome extension allows users to add custom properties to the global window object with an intuitive and interactive user interface. It's a powerful tool for web developers and testers who need to manipulate the window object on the fly.",
        "author": {
          "@type": "Person",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
      },
      {
        "@type": "Article",
        "headline": "The Movie DB App",
        "url": "https://aakashdinkar.in/the-movie-db/",
        "image": "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/movie-db-project_3.webp",
        "description": "A web application to browse and search movies using a movie database API.",
        "author": {
          "@type": "Person",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aakash Dinkar",
          "url": "https://aakashdinkar.in",
        },
      },
    ],
  },
};
