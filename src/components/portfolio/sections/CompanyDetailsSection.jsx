import Link from 'next/link'

export function CompanyDetailsSection({
  name,
  paragraphs = [],
  link,
  linkText = 'View Website',
}) {
  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      {name && (
        <h3 className="mb-4 text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
          {name}
        </h3>
      )}

      <div className="flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {link && (
        <Link
          href={link}
          target="_blank"
          className="mt-8 inline-block self-start rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {linkText}
        </Link>
      )}
    </div>
  )
}
