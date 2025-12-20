import TableOfContents from '@/components/TableOfContents'

export function CaseStudySection({
  contentId,
  children,
  placeholder = 'Coming Soon...',
  showTableOfContents = true,
}) {
  if (!children) {
    return (
      <div className="mt-6 max-w-2xl lg:col-span-5 lg:mt-0">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {placeholder}
        </h3>
      </div>
    )
  }

  if (!showTableOfContents) {
    return (
      <main id={contentId} className="max-w-3xl">
        {children}
      </main>
    )
  }

  return (
    <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
      {/* LEFT SIDEBAR - TOC */}
      <aside className="hidden lg:block">
        <TableOfContents contentId={contentId} />
      </aside>

      {/* RIGHT SIDE - CASE STUDY CONTENT */}
      <main id={contentId}>{children}</main>
    </div>
  )
}
