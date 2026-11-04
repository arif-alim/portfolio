import Link from 'next/link'
import { ArtifactImage } from '@/components/portfolio/case-study/ArtifactImage'
import { dashboardArtifacts } from '@/data/manulifeArtifacts'

const products = [
  {
    id: 'plan',
    name: 'Plan Administration',
    scope: 'Project work · Benefits administration',
  },
  {
    id: 'wealth',
    name: 'Manulife Wealth',
    scope: 'Product context · Investment accounts',
  },
  {
    id: 'bank',
    name: 'Manulife Bank',
    scope: 'Product context · Mobile transfers',
  },
]

const linkStyle =
  'inline-flex min-h-[44px] items-center text-sm font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300'
const visualStyle =
  'rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50'
const sectionStyle =
  'scroll-mt-5 space-y-5 border-t border-zinc-200 pt-6 dark:border-zinc-700'

function ProductLinks({ area }) {
  return (
    <div className="flex flex-wrap gap-x-5">
      <Link
        href={{
          pathname: '/portfolio/manulife',
          query: { view: 'explorations', area },
        }}
        shallow
        scroll={false}
        className={linkStyle}
      >
        View design explorations
      </Link>
      <Link
        href={{
          pathname: '/portfolio/manulife',
          query: { view: 'demos', area },
        }}
        shallow
        scroll={false}
        className={linkStyle}
      >
        Open interaction demo
      </Link>
    </div>
  )
}

export function ManulifeCaseStudy() {
  return (
    <article className="space-y-8">
      <header className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
          Design Process · Enterprise benefits
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Help administrators find the right record and act on it
        </h2>
        <p>
          Benefits administrators needed to find members, verify coverage and
          make updates across a fragmented set of tasks. I focused on where
          people start, what they need to see and what changes from one task to
          the next.
        </p>
        <dl className="grid gap-3 border-y border-zinc-200 py-4 text-sm dark:border-zinc-700 sm:grid-cols-2">
          <div>
            <dt className="font-semibold">My role</dt>
            <dd>
              I mapped workflows, designed and tested prototypes, led design
              reviews and prepared UX specifications for developers.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Project scope</dt>
            <dd>
              Plan Administrator Site and Disability Portal. Wealth and Bank
              appear separately as product context and portfolio prototypes.
            </dd>
          </div>
        </dl>
      </header>

      <nav aria-label="Product areas">
        <ul className="grid gap-3 sm:grid-cols-3">
          {products.map(({ id, name, scope }) => (
            <li key={id}>
              <a
                href={`#process-${id}`}
                className="block h-full rounded-xl border border-zinc-200 p-3 hover:border-blue-500 dark:border-zinc-700 dark:hover:border-blue-400"
              >
                <span className="block font-semibold">
                  {name} <span aria-hidden="true">↓</span>
                </span>
                <span className="mt-1 block text-xs text-zinc-600 dark:text-zinc-300">
                  {scope}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="process-plan"
        tabIndex={-1}
        aria-labelledby="process-plan-title"
        className={sectionStyle}
      >
        <header className="space-y-2">
          <h2 id="process-plan-title" className="text-xl font-semibold">
            Plan Administration
          </h2>
          <p className="max-w-3xl">
            I used heuristic reviews, stakeholder interviews and workflow
            mapping to find where benefits tasks broke down. I worked with
            Product, Marketing, Business and IS to turn those findings into
            navigation, search and form designs for the Plan Administrator Site
            and Disability Portal.
          </p>
        </header>

        <section
          aria-labelledby="process-search"
          className="grid gap-4 lg:grid-cols-2 lg:items-start"
        >
          <div className="space-y-2">
            <h3 id="process-search" className="text-lg font-semibold">
              Let administrators start with what they know
            </h3>
            <p>
              Member search asked for too many inputs and returned inconsistent
              results. I designed one search entry point with suggestions and
              optional location, class and plan filters. I put coverage and
              member actions together so administrators could verify the record
              before updating it.
            </p>
            <p className="text-sm">
              <strong>How I checked it.</strong> I used clickable prototypes and
              usability feedback to refine the portal, then documented the
              hierarchy and interactions for handoff.
            </p>
          </div>
          <figure className={visualStyle}>
            <figcaption className="mb-3 font-semibold">
              Member search · workflow comparison
            </figcaption>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold">Earlier workflow</dt>
                <dd>
                  Supply several inputs up front, then reconcile inconsistent
                  results.
                </dd>
              </div>
              <div className="border-t border-zinc-200 pt-3 dark:border-zinc-700">
                <dt className="font-semibold">Redesign</dt>
                <dd>
                  Start with one query, narrow when needed and verify the member
                  in the coverage summary.
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs">
              Record hierarchy · Client → Policy → Member → Plan
            </p>
          </figure>
        </section>

        <section
          aria-labelledby="process-dashboard"
          className="grid gap-4 border-t border-zinc-200 pt-5 dark:border-zinc-700 lg:grid-cols-2 lg:items-start"
        >
          <div className="space-y-2">
            <h3 id="process-dashboard" className="text-lg font-semibold">
              Put plan signals alongside daily tasks
            </h3>
            <p>
              Administrators used spreadsheets alongside the portal to track
              activity. I explored putting Power BI cards on Home, beside member
              search and navigation, so they could spot plan trends and still
              reach the task they came to do.
            </p>
            <p className="text-sm">
              <strong>How I checked it.</strong> I used data requirements
              workshops to define what the cards could surface and compared
              concepts for how clearly they presented activity, utilisation and
              enrolment.
            </p>
          </div>
          <figure className={visualStyle}>
            <ArtifactImage artifact={dashboardArtifacts[0]} maxHeight={260} />
            <figcaption className="mt-3 text-sm">
              <strong>Power BI dashboard concept.</strong> The concept places
              reporting within the administrator home alongside routes to daily
              work.
            </figcaption>
          </figure>
        </section>

        <section
          aria-labelledby="process-status"
          className="grid gap-4 border-t border-zinc-200 pt-5 dark:border-zinc-700 lg:grid-cols-2 lg:items-start"
        >
          <div className="space-y-2">
            <h3 id="process-status" className="text-lg font-semibold">
              Ask for details that fit the status change
            </h3>
            <p>
              Leave, termination and reinstatement need different information. I
              used conditional fields to keep each flow focused and explored a
              reusable datepicker to make date entry consistent.
            </p>
            <p className="text-sm">
              <strong>How I checked it.</strong> I reviewed desktop and mobile
              variants and documented field behaviour for handoff. The portfolio
              demo lets you try the conditional questions and a fictional
              approval handoff.
            </p>
          </div>
          <figure className={visualStyle}>
            <figcaption className="mb-3 font-semibold">
              Parental leave · simplified form flow
            </figcaption>
            <ol className="flex flex-wrap gap-2 text-sm">
              {[
                'Choose parental leave',
                'Enter effective date',
                'Provide expected return date',
              ].map((step) => (
                <li
                  key={step}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
                >
                  {step}
                </li>
              ))}
            </ol>
          </figure>
        </section>

        <p className="max-w-3xl text-sm">
          <strong>What I delivered.</strong> I shared revised flows, prototypes,
          visual assets and UX specifications with developers. I used usability
          feedback and analytics to inform revisions across the Plan
          Administrator Site and Disability Portal. The dashboard is shown as a
          design concept.
        </p>
        <ProductLinks area="plan" />
      </section>

      <section
        id="process-wealth"
        tabIndex={-1}
        aria-labelledby="process-wealth-title"
        className={sectionStyle}
      >
        <header className="space-y-2">
          <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
            Product context
          </p>
          <h2 id="process-wealth-title" className="text-xl font-semibold">
            Manulife Wealth
          </h2>
          <p className="max-w-3xl">
            The Canadian Investor Portal brings holdings, account activity and
            documents together. In the illustrative portfolio prototype, choose
            a fictional account, scan its activity and open a holding for
            details.
          </p>
        </header>
        <ProductLinks area="wealth" />
      </section>

      <section
        id="process-bank"
        tabIndex={-1}
        aria-labelledby="process-bank-title"
        className={sectionStyle}
      >
        <header className="space-y-2">
          <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
            Product context
          </p>
          <h2 id="process-bank-title" className="text-xl font-semibold">
            Manulife Bank
          </h2>
          <p className="max-w-3xl">
            The Canadian mobile banking app supports account navigation and
            transfers. In the illustrative portfolio prototype, move fictional
            funds through entry, review and confirmation, including recovery
            from an invalid amount or insufficient funds.
          </p>
        </header>
        <ProductLinks area="bank" />
      </section>
    </article>
  )
}
