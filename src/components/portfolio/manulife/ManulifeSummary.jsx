export function ManulifeSummary() {
  const sections = [
    [
      'The problem',
      'I worked on the Plan Administrator platform and Disability Portal, where benefits tasks span enrolment, member updates, coverage, reporting and documents. I focused on clarifying where people should start a task and making the controls they encounter more consistent.',
    ],
    [
      'My role and responsibilities',
      'I translated business, functional and technical requirements into user flows, sitemaps, low- and high-fidelity wireframes, clickable prototypes and detailed UX specifications. I led design reviews to build agreement on the proposed experience, prepared final visual assets, and worked with developers to align implementation with the documented interaction and visual design.',
    ],
    [
      'Discovery and collaboration',
      'I worked with Product, Marketing, Business and IS to balance user needs with business requirements and system constraints. I used feedback from clickable prototypes on UserTesting.com and quantitative data from Google Analytics to inform revisions across both portals.',
    ],
    [
      'Design approach',
      'I reworked navigation flows and content hierarchy around administrative tasks, moving from workflow mapping to prototypes and visual designs. Brand standards, reusable design-system patterns and AODA/WCAG accessibility requirements informed the designs and review sessions.',
    ],
    [
      'Key challenges',
      'I clarified the relationship between clients, policies, members and plans so administrators could tell which record they were working on. For status changes I used clear labels and conditional fields to show the questions relevant to each change.',
    ],
    [
      'Solution',
      'I designed coverage summaries and status-change flows, and explored a reusable datepicker to give date entry a consistent pattern. I also designed Power BI dashboard concepts around activity, utilisation and enrolment.',
    ],
    [
      'Outcomes and learnings',
      'I brought member search and optional filters together in one interface and designed coverage summaries that put member details, coverage and administrative actions in the same view. I refined the designs through usability feedback and reviews, then handed developers visual assets and UX specifications for the layouts and interactions.',
    ],
  ]
  return (
    <article className="max-w-3xl space-y-7">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
          Enterprise benefits administration
        </p>
        <h2 className="text-xl font-semibold">
          Making complex plan administration easier to navigate
        </h2>
        <dl className="grid grid-cols-1 gap-4 border-y border-zinc-200 py-4 text-xs dark:border-zinc-700 sm:grid-cols-3">
          <div>
            <dt className="font-semibold">Platforms</dt>
            <dd className="mt-1">
              Plan Administrator Site
              <br />
              Disability Portal
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Practice</dt>
            <dd className="mt-1">
              UX research, interaction design, accessible UI and design handoff
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Validation tools</dt>
            <dd className="mt-1">
              UserTesting.com
              <br />
              Google Analytics
            </dd>
          </div>
        </dl>
      </header>
      {sections.map(([title, text]) => (
        <section key={title} className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>{text}</p>
        </section>
      ))}
      <section
        aria-labelledby="manulife-bank-wealth"
        className="space-y-3 border-t border-zinc-200 pt-5 dark:border-zinc-700"
      >
        <h3 id="manulife-bank-wealth" className="text-lg font-semibold">
          Manulife Bank &amp; Manulife Wealth
        </h3>
        <p>
          My design work in this case study focused on benefits administration.
          I’ve included fictional banking and investment prototypes in
          Interaction Demos, with official Canadian product references in Design
          Explorations.
        </p>
      </section>
      <aside className="space-y-2 border-t border-zinc-200 pt-5 text-sm dark:border-zinc-700">
        <h3 className="font-semibold">About Manulife</h3>
        <p>
          Manulife provides insurance and financial services, including group
          health benefits for Canadian employers.
        </p>
        <a
          href="https://www.manulife.ca/personal.html"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 underline underline-offset-4 dark:text-blue-300"
        >
          Manulife company website
        </a>
      </aside>
    </article>
  )
}
