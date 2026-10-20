import { NarrativeSections } from '@/components/portfolio/case-study'

export function CbsaOverview() {
  return (
    <article className="max-w-3xl space-y-6">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
          Government service & interface design
        </p>
        <h2 className="text-xl font-semibold">
          Connecting user journeys with the systems behind a service
        </h2>
        <p>
          At the Canada Border Services Agency, I worked as a Lead UX Designer
          across research, service design and interface design. I mapped user
          needs and service processes, then translated complex data into a
          consistent interface structure.
        </p>
        <dl className="grid gap-4 border-y border-zinc-200 py-4 text-xs dark:border-zinc-700 sm:grid-cols-3">
          {[
            ['Role', 'Lead UX Designer'],
            [
              'Methods',
              'Interviews, surveys, observation and iterative testing',
            ],
            ['Tools', 'Figma and Miro'],
          ].map(([title, text]) => (
            <div key={title}>
              <dt className="font-semibold">{title}</dt>
              <dd className="mt-1">{text}</dd>
            </div>
          ))}
        </dl>
      </header>
      <NarrativeSections
        leadingDivider={false}
        sections={[
          {
            id: 'cbsa-challenge',
            title: 'The design challenge',
            content: (
              <p>
                I needed to connect user-facing interactions with complex
                service processes and backend data. The design challenge was to
                make information understandable while accommodating varying
                datasets and government service constraints.
              </p>
            ),
          },
          {
            id: 'cbsa-contribution',
            title: 'My contribution',
            content: (
              <p>
                I conducted interviews, surveys and observational research,
                developed journey maps and service blueprints, and created
                high-fidelity prototypes in Figma. I facilitated co-creation
                workshops in Miro and worked with cross-functional teams to
                align user needs with business objectives and Federal Digital
                Service Standards.
              </p>
            ),
          },
          {
            id: 'cbsa-approach',
            title: 'From service journeys to reusable patterns',
            content: (
              <p>
                I used journey mapping and service blueprints to connect
                interactions with the processes supporting them. For interface
                work, I studied API responses and JSON structures, then designed
                a repeatable card pattern around the data fields. Consistent
                hierarchy helped organize information across variable datasets
                and supported collaboration with developers.
              </p>
            ),
          },
          {
            id: 'cbsa-deliverables',
            title: 'Deliverables and design learning',
            content: (
              <p>
                My outputs included research, journey maps, service blueprints,
                prototypes and a modular card pattern. Iterative testing and
                feedback informed revisions. The card work connected information
                hierarchy with data structure: a repeated object could use a
                consistent component while allowing for additional fields.
              </p>
            ),
          },
        ]}
      />
      <aside
        aria-label="Confidentiality and demonstration disclosure"
        className="space-y-2 rounded-lg border border-zinc-200 p-4 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
      >
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          Confidential work
        </h3>
        <p>
          Original designs, research details and system information remain
          confidential. The Interactive Demo is a fictional information-request
          service built for this portfolio, not a CBSA workflow or production
          system. Outcomes here describe design outputs, not measured service
          impact.
        </p>
      </aside>
    </article>
  )
}

export function CbsaProcess() {
  return (
    <article className="max-w-3xl space-y-6">
      <header className="space-y-3">
        <h2 className="text-xl font-semibold">Design Process</h2>
        <p>
          I combined service-level research with interface-level design, moving
          between the user journey, operational processes and the structure of
          the information presented on screen.
        </p>
      </header>
      <NarrativeSections
        sections={[
          {
            id: 'cbsa-discovery',
            title: 'Understand people and service needs',
            content: (
              <p>
                I used interviews, surveys and observational studies to identify
                user pain points. Journey maps helped me organize the current
                experience and identify opportunities for improvement.
              </p>
            ),
          },
          {
            id: 'cbsa-blueprinting',
            title: 'Connect the visible and invisible service',
            content: (
              <p>
                I developed service blueprints to connect user interactions with
                supporting processes. In Miro co-creation workshops, I worked
                with cross-functional teams to align user needs and business
                objectives within government service constraints.
              </p>
            ),
          },
          {
            id: 'cbsa-data-design',
            title: 'Translate data into information hierarchy',
            content: (
              <p>
                I analyzed API responses and JSON structures to understand how
                information could vary. I designed a single card pattern that
                could repeat for objects in an array, organizing fields
                consistently and allowing room for additional information. This
                gave developers a common interface structure to work from.
              </p>
            ),
          },
          {
            id: 'cbsa-validation',
            title: 'Prototype, test and revise',
            content: (
              <p>
                I created high-fidelity prototypes in Figma and conducted
                iterative testing. Feedback informed design revisions, while
                cross-functional collaboration kept the proposals aligned with
                user needs and Federal Digital Service Standards.
              </p>
            ),
          },
        ]}
      />
    </article>
  )
}
