import Head from 'next/head'
import { useState } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { PortfolioTabs } from './PortfolioTabs'

export function PortfolioTemplate({
  meta = {},
  layout = {},
  tabs = [],
  defaultTab,
  children,
}) {
  const [selectedTab, setSelectedTab] = useState(
    defaultTab || tabs[0]?.name || ''
  )

  return (
    <>
      {meta.title && (
        <Head>
          <title>{meta.title}</title>
          {meta.description && (
            <meta name="description" content={meta.description} />
          )}
        </Head>
      )}

      <SimpleLayout title={layout.title} intro={layout.intro}>
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
            {tabs.length > 0 ? (
              <PortfolioTabs
                tabs={tabs}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
              />
            ) : (
              children
            )}
          </div>
        </section>
      </SimpleLayout>
    </>
  )
}
