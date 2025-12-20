import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '@/lib/classNames'
import { SummarySection } from './sections/SummarySection'
import { ImageGridSection } from './sections/ImageGridSection'
import { CompanyDetailsSection } from './sections/CompanyDetailsSection'
import { WireframesSection } from './sections/WireframesSection'
import { CaseStudySection } from './sections/CaseStudySection'
import { FigmaEmbedSection } from './sections/FigmaEmbedSection'

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
      return null
  }
}

export function PortfolioTabs({ tabs, selectedTab, onTabChange }) {
  const selectedIndex = tabs.findIndex((t) => t.name === selectedTab)
  const safeIndex = selectedIndex === -1 ? 0 : selectedIndex

  return (
    <Tab.Group
      as="div"
      className="mt-10"
      selectedIndex={safeIndex}
      onChange={(i) => onTabChange(tabs[i].name)}
    >
      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
          <div className="flex-auto border-b border-gray-200 px-4 dark:border-gray-500 sm:px-0">
            <Tab.List className="-mb-px flex">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-blue-700 font-semibold text-blue-900 outline-none dark:border-blue-500 dark:text-gray-50'
                        : 'border-transparent font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100',
                      'whitespace-nowrap border-b-2 px-6 text-tiny outline-none'
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
