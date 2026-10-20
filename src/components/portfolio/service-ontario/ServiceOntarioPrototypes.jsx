import Link from 'next/link'
import { ResponsiveIframe } from '@/components/portfolio/ResponsiveIframe'

export function ServiceOntarioPrototypes() {
  return (
    <div className="flex flex-col lg:gap-x-8">
      <div className="my-6 lg:mt-0 lg:max-w-3xl">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Prototypes
        </h3>
        <p className="mt-2 text-gray-600 dark:text-zinc-200">
          Original external prototypes are retained separately from the local
          demonstration. Access depends on the external host and its
          permissions; if the embed is unavailable, try the links below.
        </p>
        <Link
          href="https://ddr-demo.vercel.app/"
          target="_blank"
          className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View web prototype
        </Link>

        <div className="mt-10">
          <Link
            className="text-blue-800 dark:text-blue-400"
            href="https://www.figma.com/proto/ZstoHuYqSWOp5f5On03TAD/Design---Truth-Clickable?page-id=0%3A1&node-id=47-28658&starting-point-node-id=47%3A28004"
            target="_blank"
          >
            View clickable prototype
          </Link>
        </div>
      </div>
      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Embedded Figma prototype
      </h2>
      <div className="mb-0 lg:mb-8">
        <ResponsiveIframe
          title="ServiceOntario Digital Dealership Registration prototype"
          className="border-1 border-black border-opacity-10"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZstoHuYqSWOp5f5On03TAD%2FDesign---Truth-Clickable%3Fpage-id%3D0%253A1%26node-id%3D47-30142%26viewport%3D1242%252C221%252C0.08%26scaling%3Dscale-down-width%26starting-point-node-id%3D47%253A28004"
        />
      </div>
    </div>
  )
}
