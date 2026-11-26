import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ProcessTopicContent } from '@/components/process/ProcessTopicContent'
import styles from '@/components/process/Process.module.css'
import {
  processDomains,
  processHref,
  resolveProcessSelection,
} from '@/data/processDomains'

const linkStyle =
  'flex min-h-[44px] min-w-0 items-center rounded-lg px-2 py-2 text-left text-sm font-medium focus-visible:outline-offset-[-3px]'
const activeStyle =
  'bg-blue-100 text-blue-950 dark:bg-blue-950 dark:text-blue-100'
const inactiveStyle = 'hover:bg-zinc-100 dark:hover:bg-zinc-800'

export default function Process() {
  const router = useRouter()
  const { domain, discipline, topic } = resolveProcessSelection(router.query)
  const remembered = useRef({})
  const sidebarRef = useRef(null)
  const selectionKey = `${domain.id}/${discipline.id}/${topic.id}`
  const [accordion, setAccordion] = useState({ selectionKey, groups: {} })
  // Derive the open group on route changes, including browser Back/Forward.
  // A selected group remains collapsible until a different topic is selected.
  if (accordion.selectionKey !== selectionKey) {
    setAccordion({
      selectionKey,
      groups: { ...accordion.groups, [`${domain.id}/${discipline.id}`]: true },
    })
  }

  useEffect(() => {
    remembered.current[domain.id] = { discipline, topic }
    const sidebar = sidebarRef.current
    const selected = sidebar?.querySelector('[aria-current="page"]')
    if (sidebar && selected) {
      const bounds = sidebar.getBoundingClientRect()
      const item = selected.getBoundingClientRect()
      if (item.top < bounds.top) sidebar.scrollTop += item.top - bounds.top - 8
      else if (item.bottom > bounds.bottom)
        sidebar.scrollTop += item.bottom - bounds.bottom + 8
    }
  }, [domain, discipline, topic])

  function changeDomain(next) {
    const previous = remembered.current[next.id]
    router.push(
      processHref(next, previous?.discipline, previous?.topic),
      undefined,
      { shallow: true, scroll: false }
    )
  }

  function tabKeys(event) {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End']
    if (!keys.includes(event.key)) return
    event.preventDefault()
    const tabs = Array.from(
      event.currentTarget.querySelectorAll('[role="tab"]')
    )
    const index = tabs.indexOf(document.activeElement)
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
        ? tabs.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) %
          tabs.length
    tabs[next].focus()
  }

  return (
    <>
      <Head>
        <title>Process | Arif Alim</title>
        <meta
          name="description"
          content="How I work across business analysis, product ownership, design, accessibility, engineering and artificial intelligence."
        />
      </Head>
      <SimpleLayout
        title="How I work"
        intro={
          <>
            I work at the intersection of business, design and technology,
            translating complex challenges into actionable strategies, intuitive
            experiences and scalable solutions. My approach connects business
            objectives, product strategy, design and engineering to deliver
            meaningful, measurable outcomes.
            <span className="mt-4 block">
              Explore my disciplines, practices and approaches.
            </span>
          </>
        }
      >
        <div
          role="tablist"
          aria-label="Domains"
          aria-orientation="horizontal"
          onKeyDown={tabKeys}
          className="flex gap-1 overflow-x-auto rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900 md:grid md:grid-cols-4"
        >
          {processDomains.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`domain-${item.id}`}
              aria-selected={item.id === domain.id}
              aria-controls={`panel-${item.id}`}
              tabIndex={item.id === domain.id ? 0 : -1}
              onClick={() => changeDomain(item)}
              className={`${linkStyle} shrink-0 grow justify-center px-3 text-center ${
                item.id === domain.id ? activeStyle : inactiveStyle
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <p role="status" className="sr-only">
          {domain.name}, {discipline.name}: {topic.name}
        </p>
        {processDomains.map((item) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`panel-${item.id}`}
            aria-labelledby={`domain-${item.id}`}
            hidden={item.id !== domain.id}
            tabIndex={0}
            className="mt-6 rounded-xl focus-visible:outline-offset-4"
          >
            {item.id === domain.id && (
              <div className="grid items-start gap-5 md:grid-cols-[minmax(12rem,1fr)_2.5fr] lg:gap-8">
                <nav
                  aria-label="Disciplines and topics"
                  ref={sidebarRef}
                  className={`${styles.sidebar} min-w-0 rounded-xl border border-zinc-200 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-900`}
                >
                  <h2 className="px-2 py-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                    Disciplines and topics
                  </h2>
                  {domain.disciplines.map((group) => {
                    const key = `${domain.id}/${group.id}`
                    const open =
                      accordion.groups[key] ?? group.id === discipline.id
                    return (
                      <div
                        key={group.id}
                        className="border-t border-zinc-200 py-1 dark:border-zinc-700"
                      >
                        <h3>
                          <button
                            type="button"
                            id={`discipline-${group.id}`}
                            aria-expanded={open}
                            aria-controls={`topics-${group.id}`}
                            onClick={() =>
                              setAccordion((previous) => ({
                                ...previous,
                                selectionKey,
                                groups: { ...previous.groups, [key]: !open },
                              }))
                            }
                            className={`${linkStyle} w-full justify-between gap-2 font-semibold ${inactiveStyle}`}
                          >
                            <span className="min-w-0 break-words">
                              {group.name}
                            </span>
                            <svg
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              aria-hidden="true"
                              className={`shrink-0 ${open ? 'rotate-90' : ''}`}
                            >
                              <path
                                d="m6 3 5 5-5 5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </button>
                        </h3>
                        <ul
                          id={`topics-${group.id}`}
                          aria-labelledby={`discipline-${group.id}`}
                          hidden={!open}
                          className="space-y-1 py-1 pl-3"
                        >
                          {group.topics.map((entry) => (
                            <li key={entry.id}>
                              <Link
                                href={processHref(domain, group, entry)}
                                shallow
                                scroll={false}
                                aria-current={
                                  entry.id === topic.id &&
                                  group.id === discipline.id
                                    ? 'page'
                                    : undefined
                                }
                                className={`${linkStyle} break-words ${
                                  entry === topic ? activeStyle : inactiveStyle
                                }`}
                              >
                                {entry.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </nav>
                <ProcessTopicContent
                  key={topic.id}
                  domain={domain}
                  discipline={discipline}
                  topic={topic}
                />
              </div>
            )}
          </div>
        ))}
      </SimpleLayout>
    </>
  )
}
