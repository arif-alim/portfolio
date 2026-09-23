import Image from 'next/image'

import story from '@/images/process/story.svg'
import empathize from '@/images/process/empathize.svg'
import define from '@/images/process/define.svg'
import ideate from '@/images/process/ideate.svg'
import prototype from '@/images/process/prototype.svg'
import testing from '@/images/process/testing.svg'

const stageIcons = [story, empathize, define, ideate, prototype, testing]

export function ProcessTimeline({ stages }) {
  return (
    <div className="mt-6 p-4">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {stages.map((stage, index) => (
          <li key={stage.title} className="mb-10 ml-10">
            <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Image
                className="rounded shadow-lg"
                src={stageIcons[index]}
                alt=""
                width={32}
                height={32}
              />
            </span>
            <div className="items-start justify-between rounded-lg border bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 sm:flex">
              <span className="mb-1 shrink-0 whitespace-nowrap text-xs font-normal text-gray-400 sm:order-last sm:mb-0 sm:ml-4">
                Step {index + 1}
              </span>
              <div className="max-w-3xl font-normal">
                <h3 className="mb-2 text-lg font-semibold">{stage.title}</h3>
                <p>{stage.description}</p>
                <p className="mt-3">
                  <span className="font-semibold">Key activities:</span>{' '}
                  {stage.activities}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
