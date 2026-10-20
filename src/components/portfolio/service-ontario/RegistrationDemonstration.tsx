import { designDecisions } from '@/data/dealershipRegistration'
import { RegistrationWorkflow } from './RegistrationWorkflow'
export function RegistrationDemonstration() {
  return (
    <section aria-labelledby="ddr-demo-title" className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
          Illustrative reconstruction
        </p>
        <h2 id="ddr-demo-title" className="text-xl font-semibold">
          Interactive Demonstration — Digital Dealership Registration
        </h2>
        <p>
          Explore how complex registration requirements can be simplified
          through progressive disclosure, conditional workflows, clear
          validation, and accessible interaction design.
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-300">
          A locally implemented demonstration based on the project’s UX
          principles, not the original government production application. Use
          fictitious sample data only. No external APIs, persistent storage or
          actual submission; values reset when you leave this tab or reload.
        </p>
      </header>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">
        <RegistrationWorkflow />
        <aside
          aria-labelledby="ddr-decisions"
          className="border-t border-zinc-200 pt-5 dark:border-zinc-700 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0"
        >
          <h3 id="ddr-decisions" className="mb-4 font-semibold">
            Design Decisions
          </h3>
          <dl className="space-y-4">
            {designDecisions.map(([title, detail]) => (
              <div key={title}>
                <dt className="font-semibold">{title}</dt>
                <dd className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
      <section
        aria-labelledby="ddr-comparison"
        className="border-t border-zinc-200 pt-6 dark:border-zinc-700"
      >
        <h3 id="ddr-comparison" className="font-semibold">
          Before / After · conceptual comparison
        </h3>
        <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
          Design principles only; not verified historical production screens,
          research findings or measured outcomes.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {[
            [
              'Before — Traditional Process',
              [
                'Fragmented manual steps',
                'Repeated information entry',
                'Limited visibility into progress',
                'Complex eligibility and validation requirements',
              ],
            ],
            [
              'After — Digital Experience',
              [
                'Guided multi-step workflow',
                'Conditional questions',
                'Clear progress and status',
                'Accessible validation and review',
              ],
            ],
          ].map(([title, items]) => (
            <div key={String(title)}>
              <h4 className="font-semibold">{title}</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
