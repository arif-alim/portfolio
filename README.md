# Arif Alim

Welcome to my personal portfolio.

## Getting started

Built my personal portfolio website using Nextjs, Reactjs, TailwindCSS, Headless UI, MDX and Vercel.

Use Node.js 22 (the exact development version is in `.nvmrc`):

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open http://localhost:3000. Before submitting changes, run:

```sh
npm run lint
npm run format:check
npm run build
npm test
npm start
```

The site uses JavaScript/JSX and the Next.js Pages Router. There is no
TypeScript migration or separate type-check command. ESLint runs separately
from the production build. Prettier retains the existing formatting conventions.

For the first browser-test run, install Chromium with
`npx playwright install chromium`. `npm test` serves the production build on
port 3102 and checks all registered routes and tabs at mobile, tablet, and
desktop widths in both themes. It also checks theme persistence, blocked
storage, keyboard focus, case-study anchors, and prototype sizing. Run a fresh
build first. No external credentials are required; embedded Figma content may
still require access outside the test suite.

## Updating the site

- Pages and URLs live in `src/pages`. Keep `pageExtensions` restricted to
  `jsx` and `mdx`; the `.js` article template is intentionally unpublished.
- Portfolio listing data lives in `src/data/portfolioProjects.js`. Array order
  controls project order; project detail pages retain their own tab configuration.
- Shared portfolio sections live in `src/components/portfolio`. Custom Manulife
  components live in its `manulife` subfolder, outside the route directory.
- Toolbox data lives in `src/data/toolbox.js`; certificates live in
  `src/data/certificates.js`.
- Retain static image imports from `src/images`. Source assets are intentionally
  preserved, including images not currently rendered.
- Tab names must be unique within a page. Keep heading IDs stable so case-study
  links continue to work. Supported tab types are documented in `PortfolioTabs`.
- `tests/fixtures/routes.json` records the existing routes, tabs, and default
  selections. Update it deliberately if a future content phase changes them.

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
