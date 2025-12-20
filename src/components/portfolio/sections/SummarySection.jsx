import Link from 'next/link'
import { Screenshot } from '../Screenshot'

export function SummarySection({
  title,
  heading,
  logo,
  paragraphs = [],
  listItems = [],
  responsibilities,
  link,
  linkText = 'View Website',
}) {
  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      {(logo || title) && (
        <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          {logo && (
            <div className="shrink-0">
              <Screenshot
                src={logo.src}
                alt={logo.alt}
                width={64}
                height={64}
                className="h-10 w-auto dark:invert"
              />
            </div>
          )}
          {title && (
            <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          )}
        </div>
      )}

      {heading && (
        <h2 className="col-span-full mb-4 text-lg font-semibold">{heading}</h2>
      )}

      <div className="flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {responsibilities && (
        <div className="mt-6">
          <h4 className="mb-2 text-lg font-semibold">{responsibilities.heading || 'Responsibilities'}</h4>
          <ul className="list-disc pl-6">
            {responsibilities.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {listItems.length > 0 && (
        <ul className="mt-4 list-disc pl-6">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

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
