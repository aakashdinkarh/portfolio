/**
 * JSON-LD structured data configuration
 * This file contains all the structured data that will be injected into the HTML at build time
 */
module.exports = [
  // Person schema
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aakash Dinkar",
    alternateName: "aakashdinkarh",
    description:
      "Aakash Dinkar is a Frontend Engineer at Meesho. He is proficient in ReactJS, NextJS, TypeScript, Redux, Webp Performance Optimization. He is also a passionate learner and enjoys sharing his knowledge with others.",
    image:
      "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/portfolio.webp",
    url: "https://aakashdinkar.in",
    jobTitle: "Frontend Engineer",
    email: "aakashdinkarh@gmail.com",
    birthDate: "2000-03-21",
    worksFor: {
      "@type": "Organization",
      name: "Meesho",
      url: "https://www.meesho.com/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology (BHU) Varanasi",
      url: "https://www.iitbhu.ac.in/",
    },
    knowsAbout: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "Redux",
      "Web Performance Optimization",
      "Frontend Development",
    ],
    knowsLanguage: ["English", "Hindi"],
    nationality: {
      "@type": "Country",
      name: "India",
    },
    birthPlace: {
      "@type": "Place",
      name: "India",
    },
    sameAs: [
      "https://www.linkedin.com/in/aakash-dinkar-74a817212/",
      "https://github.com/aakashdinkarh",
      "https://www.instagram.com/dinkar_2103/",
    ],
    hasCreated: [
      {
        "@type": "WebPage",
        name: "JS/TS Playground",
        url: "https://aakashdinkar.in/js-ts-playground/",
      },
      {
        "@type": "WebPage",
        name: "Smart Components Dinkar",
        url: "https://devdinkar-codebook.vercel.app",
      },
      {
        "@type": "WebPage",
        name: "Image Convert",
        url: "https://aakashdinkar.in/image-convert/",
      },
      {
        "@type": "WebPage",
        name: "Bounce and Collect Game",
        url: "https://aakashdinkar.in/bounce-and-collect-game/",
      },
      {
        "@type": "WebPage",
        name: "Web Repo Editor",
        url: "https://aakashdinkar.in/web-repo-editor/",
      },
      {
        "@type": "SoftwareApplication",
        name: "Content Tracker",
        url: "https://chromewebstore.google.com/detail/content-tracker/jfmjdjbfofohakgmdmdhkajimjjplbna",
      },
      {
        "@type": "SoftwareApplication",
        name: "Window Props Plus",
        url: "https://chromewebstore.google.com/detail/window-props-plus/imepmnfbpoohiejbnbeodjlgjpakmkif",
      },
      {
        "@type": "WebPage",
        name: "The Movie DB App",
        url: "https://aakashdinkar.in/the-movie-db/",
      },
      {
        "@type": "WebPage",
        name: "Tic Tac Toe Game",
        url: "https://aakashdinkar.in/Tic-Tac-Toe-Game/",
      },
      {
        "@type": "WebPage",
        name: "Block Game",
        url: "https://aakashdinkar.in/block-game/",
      },
      {
        "@type": "WebPage",
        name: "Memory Game",
        url: "https://aakashdinkar.in/MemoryGame/",
      },
      {
        "@type": "WebPage",
        name: "Todo React App",
        url: "https://aakashdinkar.in/todo-react-app/",
      },
      {
        "@type": "WebPage",
        name: "Case Utils",
        url: "https://aakashdinkar.in/case-utils/",
      },
      {
        "@type": "WebPage",
        name: "Music Player Project",
        url: "https://aakashdinkar.in/music-player-project/",
      },
      {
        "@type": "WebPage",
        name: "Portfolio v1",
        url: "https://aakashdinkar.in/portfolio-v1/",
      },
      {
        "@type": "WebPage",
        name: "Portfolio v0",
        url: "https://aakashdinkar.in/portfolio-v0/",
      },
      {
        "@type": "WebPage",
        name: "Panda Img",
        url: "https://aakashdinkar.in/panda-img/",
      },
      {
        "@type": "WebPage",
        name: "Calculator",
        url: "https://aakashdinkar.in/calculator/",
      },
      {
        "@type": "WebPage",
        name: "Image Modal",
        url: "https://aakashdinkar.in/Image-modal/",
      },
    ],
  },
  // Website schema
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aakash Dinkar Portfolio",
    url: "https://aakashdinkar.in",
    description:
      "Aakash Dinkar's portfolio showcasing projects and skills in web development, software engineering, and more.",
    author: {
      "@type": "Person",
      name: "Aakash Dinkar",
      url: "https://aakashdinkar.in",
    },
    publisher: {
      "@type": "Person",
      name: "Aakash Dinkar",
      url: "https://aakashdinkar.in",
    },
  },
  // Projects list schema
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aakash Dinkar's Projects",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Aakash Dinkar Projects",
        url: "https://aakashdinkar.in/projects/",
        description:
          "Aakash Dinkar's portfolio showcasing all the projects he has created, including web apps, games, and developer tools.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/portfolio.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Portfolio",
        operatingSystem: "Web",
        genre: "Web Development Projects",
        keywords: [
          "Portfolio",
          "Web Development",
          "Frontend",
          "React",
          "NextJS",
          "Games",
          "Tools",
          "Projects",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "JS/TS Playground",
        url: "https://aakashdinkar.in/js-ts-playground/",
        description:
          "A browser-based JavaScript/TypeScript playground with real-time execution, rich console output, and offline support.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/js-ts-playground_2.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Development Tool",
        operatingSystem: "Web",
        genre: "Code Editor",
        keywords: ["JavaScript", "TypeScript", "Playground", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Image Convert",
        url: "https://aakashdinkar.in/image-convert/",
        description:
          "An online tool to convert images to different formats and compress them for web use.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/image-convert.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Tool",
        operatingSystem: "Web",
        genre: "Utility",
        keywords: ["Image", "Convert", "Web Tool", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 4,
        name: "Bounce and Collect Game",
        url: "https://aakashdinkar.in/bounce-and-collect-game/",
        description:
          "A fun game where you collect points while mastering gravity and elasticity.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/bounce-and-collect-game_2.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Game",
        operatingSystem: "Web",
        genre: "Web Game",
        keywords: ["Game", "Web Game", "JavaScript", "HTML5", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 5,
        name: "Web Repo Editor",
        url: "https://aakashdinkar.in/web-repo-editor/",
        description:
          "A web-based repository editor for quick code edits and previews without setting up local environments.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/web-repo-editor.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Tool",
        operatingSystem: "Web",
        genre: "Developer Tool",
        keywords: ["Web", "Repository", "Editor", "Frontend", "Code"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 6,
        name: "The Movie DB App",
        url: "https://aakashdinkar.in/the-movie-db/",
        description:
          "A web application to browse and search movies using a movie database API.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/movie-db-project_3.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Application",
        operatingSystem: "Web",
        genre: "Entertainment",
        keywords: ["Movies", "Web App", "API", "Entertainment", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 7,
        name: "Tic Tac Toe Game",
        url: "https://aakashdinkar.in/Tic-Tac-Toe-Game/",
        description:
          "Classic Tic Tac Toe game built for web browsers with a clean UI and interactive gameplay.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/tic-tac-toe.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Game",
        operatingSystem: "Web",
        genre: "Web Game",
        keywords: ["Tic Tac Toe", "Game", "Web", "JavaScript"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 8,
        name: "Block Game",
        url: "https://aakashdinkar.in/block-game/",
        description:
          "A block-stacking puzzle game that tests your strategy and speed skills.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/block-game.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Game",
        operatingSystem: "Web",
        genre: "Puzzle Game",
        keywords: ["Block", "Game", "Puzzle", "Web"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 9,
        name: "Memory Game",
        url: "https://aakashdinkar.in/MemoryGame/",
        description:
          "A memory matching game designed to enhance cognitive skills and reflexes.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/memory-game.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Game",
        operatingSystem: "Web",
        genre: "Memory Game",
        keywords: ["Memory", "Game", "Web", "JavaScript"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 10,
        name: "Todo React App",
        url: "https://aakashdinkar.in/todo-react-app/",
        description:
          "A simple and intuitive Todo app built using React, featuring task management and local storage support.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/todo-react-app.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Tool",
        operatingSystem: "Web",
        genre: "Productivity Tool",
        keywords: ["Todo", "React", "Frontend", "Productivity"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 11,
        name: "Case Utils",
        url: "https://aakashdinkar.in/case-utils/",
        description:
          "A utility library to quickly convert and manipulate string cases in JavaScript projects.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/case-utils.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Developer Tool",
        operatingSystem: "Web",
        genre: "Utility",
        keywords: ["JavaScript", "Utility", "String", "Case"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 12,
        name: "Music Player Project",
        url: "https://aakashdinkar.in/music-player-project/",
        description:
          "A web-based music player supporting playlists, audio controls, and offline playback.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/music-player-project.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Application",
        operatingSystem: "Web",
        genre: "Music Player",
        keywords: ["Music", "Player", "Web", "Audio", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 13,
        name: "Portfolio v1",
        url: "https://aakashdinkar.in/portfolio-v1/",
        description:
          "Previous version of Aakash Dinkar's portfolio website showcasing projects and skills.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/portfolio-v1.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Application",
        operatingSystem: "Web",
        genre: "Portfolio",
        keywords: ["Portfolio", "Web", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 14,
        name: "Portfolio v0",
        url: "https://aakashdinkar.in/portfolio-v0/",
        description:
          "Initial version of portfolio showcasing early projects and experiments.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/portfolio-v0.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Application",
        operatingSystem: "Web",
        genre: "Portfolio",
        keywords: ["Portfolio", "Web", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 15,
        name: "Panda Img",
        url: "https://aakashdinkar.in/panda-img/",
        description:
          "A web tool for image processing and transformation tasks for creative purposes.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/panda-img.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Tool",
        operatingSystem: "Web",
        genre: "Utility",
        keywords: ["Image", "Web Tool", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 16,
        name: "Calculator",
        url: "https://aakashdinkar.in/calculator/",
        description:
          "A simple web-based calculator for arithmetic operations built with JavaScript.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/calculator.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Tool",
        operatingSystem: "Web",
        genre: "Utility",
        keywords: ["Calculator", "Web", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        position: 17,
        name: "Image Modal",
        url: "https://aakashdinkar.in/Image-modal/",
        description:
          "A web component to show images in modals with zoom and navigation features.",
        image:
          "https://aakashdinkarh.github.io/static_assets/images/portfolio/webp-images/image-modal.webp",
        creator: {
          "@type": "Person",
          name: "Aakash Dinkar",
          url: "https://aakashdinkar.in",
        },
        applicationCategory: "Web Tool",
        operatingSystem: "Web",
        genre: "UI Component",
        keywords: ["Image", "Modal", "Web Component", "Frontend"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    ],
  },
  // FAQPage schema
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Aakash Dinkar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aakash Dinkar is a Frontend Engineer at Meesho with expertise in React, Next.js, TypeScript, Redux, and web performance optimization.",
        },
      },
      {
        "@type": "Question",
        name: "Where did Aakash Dinkar study?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He completed his B.Tech in Civil Engineering from IIT BHU, Varanasi.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of projects has Aakash Dinkar built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He has worked on several frontend projects, including apps like Window Props Plus, The Movie DB App, and Content Tracker, all of which are open-source and available on his portfolio website.",
        },
      },
      {
        "@type": "Question",
        name: "How can I connect with Aakash Dinkar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can connect with him via LinkedIn, GitHub, or Twitter. Links are available on his personal website.",
        },
      },
    ],
  },
];
