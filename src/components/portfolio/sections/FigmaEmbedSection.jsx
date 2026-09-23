import { ResponsiveIframe } from '@/components/portfolio/ResponsiveIframe'
import Link from 'next/link'

export function FigmaEmbedSection({
  embedUrl,
  directLink,
  webPrototypeLink,
  title = 'Embedded Figma iFrame',
  fallbackMessage = "If the embedded prototype doesn't work, click the link to view it in browser.",
  responsiveHeights = { mobile: 450, desktop: 1024 },
}) {
  return (
    <div className="flex flex-col lg:gap-x-8">
      <div className="my-6 lg:mt-0 lg:max-w-3xl">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Prototypes
        </h3>
        <p className="mt-2 text-gray-600 dark:text-zinc-200">
          {fallbackMessage}
        </p>

        {webPrototypeLink && (
          <Link
            href={webPrototypeLink}
            target="_blank"
            className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            View web prototype
          </Link>
        )}

        {directLink && (
          <div className="mt-10">
            <Link
              className="text-blue-800 dark:text-blue-500"
              href={directLink}
              target="_blank"
            >
              View clickable prototype
            </Link>
          </div>
        )}
      </div>

      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>

      <div className="mb-0 lg:mb-8">
        <ResponsiveIframe
          className="border border-black border-opacity-10"
          mobileHeight={responsiveHeights.mobile}
          desktopHeight={responsiveHeights.desktop}
          src={embedUrl}
          title={title}
        />
      </div>
    </div>
  )
}
