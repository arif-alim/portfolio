import { ScreenshotGrid } from '../ScreenshotGrid'

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

      <ScreenshotGrid
        images={images}
        columns={columnsLg}
        gap={gap}
        showBackground={showBackground}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    </div>
  )
}
