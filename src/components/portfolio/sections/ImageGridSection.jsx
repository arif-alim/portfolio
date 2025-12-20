import { classNames } from '@/lib/classNames'
import { Screenshot } from '../Screenshot'

const COLUMN_CLASSES = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
}

export function ImageGridSection({
  heading,
  description,
  images = [],
  columnsLg = 4,
  showBackground = true,
  imageWidth = 260,
  imageHeight = 260,
  gap = 4,
}) {
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
            'grid grid-cols-1 sm:grid-cols-2',
            COLUMN_CLASSES[columnsLg] || COLUMN_CLASSES[4],
            `gap-${gap}`
          )}
        >
          {images.map((img, idx) => (
            <Screenshot
              key={idx}
              src={img.src}
              alt={img.alt}
              width={imageWidth}
              height={imageHeight}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
