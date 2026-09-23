import { Fragment, useEffect, useRef } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { SummarySection } from './sections/SummarySection'
import { ImageGridSection } from './sections/ImageGridSection'
import { CompanyDetailsSection } from './sections/CompanyDetailsSection'
import { WireframesSection } from './sections/WireframesSection'
import { CaseStudySection } from './sections/CaseStudySection'
import { FigmaEmbedSection } from './sections/FigmaEmbedSection'

/**
 * @typedef {Object} PortfolioTab
 * @property {string} name Unique visible tab label, also used for selection.
 * @property {'summary'|'imageGrid'|'companyDetails'|'wireframes'|'caseStudy'|'figmaEmbed'} [type]
 * @property {Object} [content] Props for the selected section component.
 * @property {import('react').ReactNode|((content: Object) => import('react').ReactNode)} [render]
 */

/** @param {{tab: PortfolioTab}} props */
function TabContent({ tab }) {
  const { type, content, render } = tab

  // Support custom render function for edge cases
  if (render) {
    return typeof render === 'function' ? render(content) : render
  }

  switch (type) {
    case 'summary':
      return <SummarySection {...content} />
    case 'imageGrid':
      return <ImageGridSection {...content} />
    case 'companyDetails':
      return <CompanyDetailsSection {...content} />
    case 'wireframes':
      return <WireframesSection {...content} />
    case 'caseStudy':
      return <CaseStudySection {...content} />
    case 'figmaEmbed':
      return <FigmaEmbedSection {...content} />
    default:
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Unknown portfolio tab type for "${tab.name}": ${type}`)
      }
      return null
  }
}

/** @param {{tabs: PortfolioTab[], selectedTab: string, onTabChange: (name: string) => void, tabListLabel?: string, tabClassName?: string}} props */
export function PortfolioTabs({
  tabs,
  selectedTab,
  onTabChange,
  tabListLabel = 'Project sections',
  tabClassName,
}) {
  const selectedIndex = tabs.findIndex((t) => t.name === selectedTab)
  const safeIndex = selectedIndex === -1 ? 0 : selectedIndex
  const scrollRef = useRef(null)
  const tabRefs = useRef([])

  useEffect(() => {
    const container = scrollRef.current
    const tab = tabRefs.current[safeIndex]
    if (!container || !tab) return

    // Scroll only the tab row, keeping page position and keyboard focus intact.
    const bounds = container.getBoundingClientRect()
    const clip = container.parentElement.getBoundingClientRect()
    const target = tab.getBoundingClientRect()
    const left = Math.max(bounds.left, clip.left)
    const right = Math.min(bounds.right, clip.right)
    if (target.left < left) container.scrollLeft += target.left - left
    else if (target.right > right) container.scrollLeft += target.right - right
  }, [safeIndex])

  return (
    <Tab.Group
      as="div"
      className="mt-10"
      selectedIndex={safeIndex}
      onChange={(i) => {
        if (tabs[i]) onTabChange(tabs[i].name)
      }}
    >
      <div className="overflow-x-hidden whitespace-nowrap">
        <div ref={scrollRef} className="-mx-4 flex overflow-x-auto sm:mx-0">
          <div className="flex-auto border-b border-gray-200 px-4 dark:border-gray-500 sm:px-0">
            <Tab.List aria-label={tabListLabel} className="-mb-px flex">
              {tabs.map((tab, index) => (
                <Tab
                  key={tab.name}
                  ref={(element) => {
                    tabRefs.current[index] = element
                  }}
                  className={({ selected }) =>
                    clsx(
                      selected
                        ? 'border-blue-700 font-semibold text-blue-900 dark:border-blue-500 dark:text-gray-50'
                        : 'border-transparent font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100',
                      'whitespace-nowrap border-b-2 px-6 text-tiny',
                      tabClassName
                    )
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name} className="space-y-16 pt-4 lg:pt-8">
            <TabContent tab={tab} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
