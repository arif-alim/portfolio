import { classNames } from '@/lib/classNames'
import { Screenshot } from '../Screenshot'

const COLUMN_CLASSES = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
}

export function WireframesSection({
  heading,
  description,
  sections = [],
  images = [],
  columnsLg = 3,
  showBackground = true,
}) {
  // If sections array is provided, render multiple grouped sections
  if (sections.length > 0) {
    return (
      <div className="space-y-12">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-4">
            {section.title && (
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {section.title}
              </h3>
            )}
            {section.description && (
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {section.description}
              </p>
            )}
            <div
              className={classNames(
                showBackground &&
                  'rounded-lg bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6'
              )}
            >
              <div
                className={classNames(
                  'grid grid-cols-1 gap-4 sm:grid-cols-2',
                  COLUMN_CLASSES[section.columnsCount || columnsLg] ||
                    COLUMN_CLASSES[3]
                )}
              >
                {section.images.map((img, idx) => (
                  <Screenshot
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={300}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Simple flat images array
  return (
    <div className="space-y-4">
      {(heading || description) && (
        <div>
          {heading && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {heading}
            </h3>
          )}
          {description && (
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className={classNames(
          showBackground && 'rounded-lg bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6'
        )}
      >
        <div
          className={classNames(
            'grid grid-cols-1 gap-4 sm:grid-cols-2',
            COLUMN_CLASSES[columnsLg] || COLUMN_CLASSES[3]
          )}
        >
          {images.map((img, idx) => (
            <Screenshot
              key={idx}
              src={img.src}
              alt={img.alt}
              width={500}
              height={300}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
