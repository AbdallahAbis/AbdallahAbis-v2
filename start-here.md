# 🚀 Getting Started — `AbdallahAbis-v2`

Welcome to the codebase for [Abdallah Abis](https://abisabdallah.com)'s personal portfolio. This project is built with [Next.js](https://nextjs.org/), styled using custom components, and powered by cleanly organized markdown content.

This `start-here.md` is your guide to understanding how the project is structured and how to contribute or customize it.

<blockquote style="margin: 2em auto; text-align: center; font-style: italic; color: #6a737d; border-left: 4px solid #d0d7de; padding: 0.5em 1em; max-width: 640px;">
  <span style="font-weight: bold; color: #24292f;">Note:</span></br />
   The codebase and tech stack used here could be outdated. <br />
  Feel free to make any changes or improvements as you see fit.
</blockquote>

---

## 📁 Project Structure

```text
root/                               → Project root directory
├── components/                     → All reusable and section-based React components
│   ├── custom/                     → Reusable UI elements used across various sections
│   │   ├── button.js               → Styled button component
│   │   ├── headline.js             → H1 heading element
│   │   └── paragraph.js            → Paragraph text block
│   ├── inner-components/           → Components nested inside main sections
│   │   ├── computer.js             → Laptop graphic shown in the hero/header
│   │   ├── hamburgerMenu.js        → Responsive hamburger menu toggle
│   │   ├── nav-options.js          → Individual navigation links/options
│   │   └── typing.js               → Typing animation logic inside laptop graphic
│   ├── about.js                    → About section of the site
│   ├── analytics.js                → Site analytics/metrics section
│   ├── blog.js                     → Blog section
│   ├── contact.js                  → Contact section
│   ├── footer.js                   → Website footer
│   ├── header.js                   → Hero/header with name, intro, and CTA
│   ├── layout.js                   → Wrapper layout for the entire page
│   ├── loader.js                   → Preloader component
│   ├── navigation.js               → Main site navigation bar
│   ├── testimonials.js             → Testimonials section
│   └── work.js                     → Work/portfolio/projects section
├── lib/                           → Utility libraries and helper functions
│   ├── animation.js               → Animation configuration for scroll, fade, etc.
│   ├── carousel.js                → Carousel logic for slideshows
│   ├── isInView.js                → Checks if an element is in the viewport
│   └── queryMarkdown.js           → Reads and parses markdown files from /content
├── pages/                         → Next.js page routes
│   ├── _app.js                    → Custom App component for global config
│   ├── _document.js               → Custom HTML Document for meta, fonts, etc.
│   ├── blog.js                    → `/blog` page route
│   └── index.js                   → Homepage (`/`)
├── public/                        → Static assets served by Next.js
│   ├── brand/                     → Branding assets (logos, screenshots, etc.)
│   ├── fonts/                     → Custom font files
│   ├── icons/                     → Icon assets
│   ├── images/                    → General image assets
│   ├── projects/                  → Project-related images/media
│   └── favicon.ico                → Site favicon
├── styles/                        → Global styles and font declarations
│   └── fonts.css
├── theme/                         → Theme variables and media queries
│   └── media.js
├── .gitignore                     → Git ignored files
├── babel.config.json              → Babel config (e.g. for styled-components and SVGs)
├── package.json                   → Project metadata and dependencies
├── start-here.md                  → Setup & project structure guide (you're here!)
├── README.md                      → Overview and instructions for the project
|── yarn.lock                      → Dependency lockfile for consistent installs
└── content/                       → Markdown content for all site sections
    ├── about/
    │   └── about.md
    ├── contact/
    │   └── contact.md
    ├── header/
    │   └── header.md
    ├── navigation/
    │   └── navigation.md
    ├── testimonials/
    │   └── testimonials.md
    └── work/
        └── work.md
```

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AbdallahAbis/AbdallahAbis-v2.git
cd AbdallahAbis-v2
```

### 2. Install Dependencies

```bash
yarn
```

### 3. Run the Development Server

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Production Build

```bash
yarn build
```

Start the production server with:

```bash
yarn start
```

---

## ☁️ Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply import your repo, set it up via the Vercel dashboard, and you're good to go.

---

## 🙌 Credits & Attribution

This project was designed and developed by [Abdallah Abis](https://twitter.com/Dev_abis). If you fork or use it for inspiration, a mention or link back is greatly appreciated.

---

Happy coding! 🧑‍💻
