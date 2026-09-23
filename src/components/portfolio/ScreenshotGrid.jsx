import clsx from 'clsx'
import { Screenshot } from './Screenshot'

const COLUMN_CLASSES = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
}

const GAP_CLASSES = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
}

/** Shared image markup; callers retain their own headings and dimensions. */
export function ScreenshotGrid({
  images,
  columns,
  fallbackColumns = 4,
  gap = 4,
  showBackground,
  imageWidth,
  imageHeight,
}) {
  return (
    <div
      className={clsx(
        showBackground && 'rounded-lg bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6'
      )}
    >
      <div
        className={clsx(
          'grid grid-cols-1 sm:grid-cols-2',
          COLUMN_CLASSES[columns] || COLUMN_CLASSES[fallbackColumns],
          GAP_CLASSES[gap] || GAP_CLASSES[4]
        )}
      >
        {images.map((image, index) => (
          <Screenshot
            key={index}
            src={image.src}
            alt={image.alt}
            width={imageWidth}
            height={imageHeight}
          />
        ))}
      </div>
    </div>
  )
}
