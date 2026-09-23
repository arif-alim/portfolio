import Head from 'next/head'
import { useState } from 'react'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { PortfolioTabs } from '@/components/portfolio/PortfolioTabs'
import { processes } from '@/data/processes'

const processTabs = processes.map((process) => ({
  name: process.name,
  render: () => <ProcessTimeline stages={process.stages} />,
}))

export default function Process() {
  const [selectedTab, setSelectedTab] = useState(processTabs[0].name)

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Process | Arif Alim</title>
        <meta
          name="description"
          content="How I approach product design, service design, accessibility, and frontend implementation—from understanding the problem to validating and improving the experience."
        />
      </Head>
      <SimpleLayout
        title="The process"
        intro="I start with the problem, then shape the approach around the people, constraints, and systems involved. Product design is at the centre of my work, supported by service design, accessibility, and frontend implementation."
      >
        <section aria-labelledby="process-heading">
          <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
            <h2 id="process-heading" className="mb-2 text-lg font-semibold">
              How I approach the work
            </h2>
            <p className="mt-4 max-w-3xl">
              These stages provide structure, not a fixed sequence. I revisit
              decisions as research, testing, and implementation reveal more.
            </p>
          </div>
          <PortfolioTabs
            tabs={processTabs}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            tabListLabel="Design and delivery processes"
            tabClassName="min-h-[44px] shrink-0 focus-visible:outline-offset-[-3px]"
          />
        </section>
      </SimpleLayout>
    </div>
  )
}
