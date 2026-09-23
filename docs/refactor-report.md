# Technical refactor report

## Preserved scope

The site remains Next.js 16, React 18, JavaScript/JSX, Pages Router, and Tailwind 3.
All 29 registered page routes, navigation entries, portfolio ordering, visible
content, project links, images, tab labels, default selections, and case-study
heading IDs were preserved. No files under `src/images` or `public` changed.
`/example` remains available. The `.js` article template remains unpublished;
`pageExtensions` is unchanged. No deployment was performed.

## Tooling

- Pinned development Node to 22.23.1 in `.nvmrc`; documented support for Node 22.13+
  within the Node 22 release line.
- Replaced `next lint` and legacy `.eslintrc.json` with ESLint 9 flat configuration.
- Aligned `eslint-config-next` to 16.1.0, matching the installed Next.js version.
- Retained Prettier conventions and added `format:check`.
- Added development-only Playwright tests and `npm test`.
- Documented installation, production builds, tests, and portfolio update locations.

## Functional and accessibility fixes

- Theme initialization runs in the document head before the page paints. It
  restores `isDarkMode`, falls back to the system preference, and tolerates blocked
  storage. The existing toggle still removes overrides that match the system.
- Added names to the homepage social links.
- Repaired section labels and added `aria-current` to active desktop navigation.
- Removed nested main landmarks from Manulife and the shared case-study section.
- Added a descriptive ServiceOntario iframe title.
- Restored visible keyboard focus, including portfolio tabs and toolbox links.
- Replaced process-step `<time>` elements with spans, retaining classes and text.
- Table-of-contents headings now initialize through the existing observer callback;
  observer cleanup and case-study anchors remain intact.

## Components and organization

- `Header.jsx`: one navigation list shared by the existing mobile and desktop UI.
- `src/data/portfolioProjects.js` and `PortfolioCard.jsx`: extracted listing data
  and card rendering. Portfolio index reduced from 388 to 29 lines.
- `src/data/toolbox.js` and `ToolboxCard.jsx`: extracted data and shared card markup.
  Toolbox page reduced from 350 to 40 lines.
- `src/components/portfolio/manulife`: extracted summary, galleries, and case study.
  Manulife route reduced from 471 to 49 lines; custom content remains custom.
- `ScreenshotGrid.jsx`: shared gallery rendering with explicit Tailwind column/gap
  mappings. Existing gallery dimensions, spacing, and background styles remain.
- `ResponsiveIframe.jsx`: replaces duplicated resize listeners and state with CSS
  using the original 768px breakpoint and 450px/1024px heights.
- `Screenshot.jsx`: forwards `sizes` in both image modes.
- `PortfolioCard.jsx`: replaces legacy `layout="responsive"` with equivalent
  dimensions/styles and explicit responsive image sizes.
- `PortfolioTabs.jsx`: documents the data contract, guards invalid selection indexes,
  and warns about unknown tab types during development.
- Standardized class-name composition on `clsx` and corrected misleading internal
  page names without changing visible labels or URLs.

## Removed code

Removed unreachable `ArticleLayout`, `Button`, `Card`, `CertImage`, `DiamondIcon`,
`Prose`, `Section`, and `SimpleLayoutAlt`; unused `formatDate`, `generateRssFeed`,
`getAllArticles`, and `classNames`; obsolete previous-path tracking; unused imports,
header refs, and social icon exports; unused article-fetching calls; unimported
Prism styles and unused CSS helpers. Portfolio source assets were retained.

## Dependencies

Removed direct dependencies: `feed`, `fast-glob`, `remark-gfm`,
`postcss-focus-visible`, and `@tailwindcss/line-clamp`. Tailwind 3 supplies the active
line-clamp utility. Generated Tailwind CSS was byte-for-byte identical before and
after dependency removal, and again after removing unused component-style helpers.

Retained Flowbite because Tailwind uses its plugin and scans its package; retained
MDX and its highlighter because they remain configured; retained Heroicons because
preserved dormant article source still imports it. Added `@playwright/test` only to
development dependencies. No runtime dependency was added.

## Validation

- `npm run lint`: passed.
- `npm run format:check`: passed.
- `npm run build`: passed; all 29 original page routes retained.
- `npm test`: 204 checks passed across 390px, 768px, and 1280px in both themes.
- Checked every route and every tab, default selections, semantic landmarks, ARIA
  references, social names, keyboard focus, keyboard tab selection, mobile menu
  navigation, theme persistence/system preference/blocked storage, case-study
  anchors, responsive iframe heights including 767px/768px, and the unpublished
  article's 404 status.
- Compared all routes' visible text, page titles, tab labels, and defaults with the
  saved unchanged build: matched.
- Compared 168 responsive screenshot pairs: 166 exact pixel matches; two differed
  by less than 0.002% of pixels in small text-rendering regions. No dimension changes.
  Focus outlines were checked separately because they intentionally changed.
- Visual comparisons used identical original image responses and blank third-party
  Figma content for deterministic results; real image delivery and the live
  ServiceOntario Figma frame were checked separately.
- No uncaught application errors were observed. Local `next start` produces an
  existing Vercel Analytics script 404 in both builds. Figma telemetry can emit
  external errors; its prototype frame loaded successfully.
- `git diff --check`: passed. Existing `.claude/settings.local.json` edits were
  left untouched.

## Remaining technical debt

- Browser automation currently covers Chromium; Safari/Firefox and physical-device
  verification remain separate checks.
- Browserslist reports an old `caniuse-lite` database. Updating browser targets and
  related generated CSS was deferred to avoid broadening this refactor.
- Flowbite and dormant MDX tooling remain candidates for a separately validated
  dependency/configuration simplification. MDX still uses an older integration.
- Existing ineffective visual utilities (for example `rounded-4xl` and
  `i nset-x-1`) were preserved; changing them could alter the current design.
- Unreferenced image/font assets remain intentionally preserved for a later review.
- External fonts, Vercel Analytics hosting, and Figma availability remain external
  dependencies. No production deployment or production analytics test was performed.
- No TypeScript conversion or separate type-check configuration was introduced.

## Content issues intentionally deferred

- Cooper's company link points to ServiceOntario.
- Equity Bank's company link points to Miss Bahamas.
- Titan's company link points to Chicasa; its intro resembles another project.
- NFCD's summary heading names Island Traders.
- Craft City references the same promotional image twice.
- Bombardier, CBSA, Co-operators, Manulife, ServiceOntario, and Trip Support lack
  page-specific metadata.
- Placeholder article content, copied descriptions, unpublished article source,
  `/example`, and existing footer text remain unchanged.

The next content phase should review `src/data/portfolioProjects.js`, individual
`src/pages/portfolio` configurations, Manulife's extracted content, article pages,
metadata, and the retained source assets. Update route/tab fixtures deliberately
if that phase changes navigation or project tabs.
