# Leonard Jonathan Saputra Portfolio Website

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=fff)

A personal portfolio website for **Leonard Jonathan Saputra**, built with React, TypeScript, Vite, and Tailwind CSS. The site presents cybersecurity interests, web development work, selected writing, competition proof, GitHub activity, and contact links in a polished navy-black portfolio interface.

## Features

- Hash-based navigation for `Home`, `About`, `Projects`, and `Blog` pages.
- Responsive navbar with mobile-friendly project/blog/about access.
- Navy-black visual theme with blue glow accents, page transitions, and cursor glow on pointer devices.
- Skill marquee, skill preview, and Radix-powered skill detail dialog.
- Project categories for `Cyber Security` and `Web Development`.
- Blog category filtering and readable post detail view.
- Personal assets for profile photography and a pentest report PDF.
- Static-hosting friendly build output through Vite.

## Tech Stack

- **React 18** for UI components.
- **TypeScript** for safer code and project data types.
- **Vite** for local development and production builds.
- **Tailwind CSS 4** for utility-first styling.
- **Radix UI Dialog** for accessible modal behavior.
- **Lucide React** for icons.

## Getting Started

### Prerequisites

Install Node.js first. The recommended path is the current LTS version from [nodejs.org](https://nodejs.org/).

Check that Node and npm are available:

```bash
node --version
npm --version
```

### Installation

Clone the repository, then install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```txt
http://localhost:5173
```

### Useful Scripts

```bash
npm run dev
```

Runs the site locally with hot reload.

```bash
npm run typecheck
```

Checks TypeScript types without generating build files.

```bash
npm run build
```

Creates the production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for a final check.

## Project Structure

```txt
.
├── index.html
├── package.json
├── vite.config.ts
├── src
│   ├── main.tsx
│   ├── app
│   │   ├── App.tsx
│   │   ├── router.ts
│   │   ├── types.ts
│   │   ├── data
│   │   │   └── portfolio.ts
│   │   ├── pages
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ProjectsPage.tsx
│   │   │   └── BlogPage.tsx
│   │   └── components
│   │       ├── github
│   │       ├── layout
│   │       └── skills
│   ├── imports
│   └── styles
└── README.md
```

## How It Works

The app starts from `src/main.tsx`, renders `src/app/App.tsx`, then switches between pages using the hash route stored in `src/app/router.ts`.

Supported routes:

```txt
#/
#/about
#/projects
#/blog
```

Most portfolio content is stored in `src/app/data/portfolio.ts`, including:

- `techSkills`
- `otherSkills`
- `projects`
- `projectCategories`
- `competitions`
- `blogPosts`
- `footerLinks`

This keeps content editing separate from page layout code.

## Editing Content

### Add a Project

Edit `src/app/data/portfolio.ts` and add an item to the `projects` array:

```ts
{
  n: "01",
  title: "PT Vulnapp Pentest Report",
  category: "Cyber Security",
  blurb: "A web application penetration testing project with report writing and remediation notes.",
  tags: ["Pentest", "Web Security", "Report"],
  year: "2026",
  image: "",
  credit: "Personal project",
  github: null,
  live: null,
}
```

Valid project categories:

```ts
"Cyber Security"
"Web Development"
```

### Add a Blog Post

Add a new item to `blogPosts` in `src/app/data/portfolio.ts`:

```ts
{
  slug: "my-new-writeup",
  title: "My New Writeup",
  date: "19-05-2026",
  category: "CTF Writeup",
  excerpt: "Short summary shown on the blog list.",
  readingTime: "3 min",
  tags: ["CTF", "Web"],
  content: "Full post content goes here.",
}
```

### Change Theme Colors

Global color tokens live in `src/styles/theme.css`. The main portfolio colors use CSS variables such as:

```css
--portfolio-accent: #7692ff;
--portfolio-accent-strong: #abd2fa;
--portfolio-navy: #091540;
--portfolio-black: #02040b;
```

## Deployment

Build the project before deploying:

```bash
npm run build
```

The production files are generated in:

```txt
dist/
```

This project uses hash routes, so it can be deployed as a static site on platforms such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages without custom server rewrites.

## Assets and Attribution

Portfolio assets are stored in `src/imports/`.

- Profile photo: used by the About page.
- Pentest report PDF: used as supporting proof for the competition/blog content.

Open-source attribution notes are available in [ATTRIBUTIONS.md](ATTRIBUTIONS.md).

## Getting Help

For project-specific questions, check these files first:

- [src/app/data/portfolio.ts](src/app/data/portfolio.ts) for portfolio content.
- [src/app/App.tsx](src/app/App.tsx) for app-level layout, transitions, and cursor effects.
- [src/app/router.ts](src/app/router.ts) for navigation behavior.
- [src/styles/theme.css](src/styles/theme.css) for global colors and background styling.

For framework documentation:

- [React documentation](https://react.dev/)
- [Vite documentation](https://vite.dev/)
- [Tailwind CSS documentation](https://tailwindcss.com/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Maintainer

Maintained by **Leonard Jonathan Saputra**.

Contact links are available in the website footer and About page.

## Contributing

This is a personal portfolio, so changes should stay aligned with the existing design and content structure.

Recommended contribution flow:

1. Create a new branch.
2. Make focused changes.
3. Run checks:

```bash
npm run typecheck
npm run build
```

4. Open a pull request with a short description and screenshots for visual changes.

When adding content, prefer updating `src/app/data/portfolio.ts` before changing page layout files.
