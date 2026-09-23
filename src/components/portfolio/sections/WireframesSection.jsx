import { ScreenshotGrid } from '../ScreenshotGrid'

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
            <ScreenshotGrid
              images={section.images}
              columns={section.columnsCount || columnsLg}
              fallbackColumns={3}
              showBackground={showBackground}
              imageWidth={500}
              imageHeight={300}
            />
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

      <ScreenshotGrid
        images={images}
        columns={columnsLg}
        fallbackColumns={3}
        showBackground={showBackground}
        imageWidth={500}
        imageHeight={300}
      />
    </div>
  )
}
