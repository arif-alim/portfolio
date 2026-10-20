export function ManulifeSummary() {
  const sections = [
    [
      'The problem',
      'Benefits administration spans member enrollment, status changes, coverage, reporting and supporting documents. The existing project notes describe fragmented workflows, inconsistent components and a navigation hierarchy that needed clarification. The design work focused on making these tasks easier to understand within the Plan Administrator platform and Disability Portal.',
    ],
    [
      'My role and responsibilities',
      'I translated business, functional and technical requirements into user flows, sitemaps, low- and high-fidelity wireframes, clickable prototypes and detailed UX specifications. I led design reviews to build agreement on the proposed experience, prepared final visual assets, and worked with developers to align implementation with the documented interaction and visual design.',
    ],
    [
      'Discovery and collaboration',
      'Collaboration with Product, Marketing, Business and IS teams connected user needs with business objectives and system constraints. Clickable prototypes supported usability validation on UserTesting.com, while Google Analytics supplied quantitative feedback alongside qualitative research. The work informed iterative revisions to both the Plan Administrator Site and Disability Portal.',
    ],
    [
      'Design approach',
      'I reworked navigation flows and content hierarchy around administrative tasks, moving from workflow mapping to prototypes and visual designs. Brand standards, reusable design-system patterns and AODA/WCAG accessibility requirements informed the designs and review sessions.',
    ],
    [
      'Key challenges',
      'The interface needed to make the relationship between Client, Policy, Member and Plan clearer, support member search and status changes, and present useful dashboard information without overwhelming administrators. Responsive layouts, conditional fields, clear labels and consistent components were central design considerations.',
    ],
    [
      'Solution',
      'The documented designs bring dashboard concepts, member information, coverage summaries and status-change workflows into a more consistent interface. Power BI integration designs explore activity, utilization and enrollment information. Shared patterns, including datepicker exploration, support consistency across tasks.',
    ],
    [
      'Outcomes and learnings',
      'The documented outputs include wireframes, clickable prototypes, visual mockups, UX specifications and design handoff assets. Research, usability feedback and design reviews informed revisions; no verified adoption, time-saving or business-impact metrics are available here. A central design takeaway is that consistent hierarchy and reusable patterns matter as much as individual screens when a task crosses several administrative workflows.',
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
