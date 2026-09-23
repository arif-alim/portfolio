import Image from 'next/image'
import Link from 'next/link'

export function ToolboxCard({ tool }) {
  return (
    <div className="relative flex items-center space-x-6 rounded-lg border  bg-white px-6 pb-3 pt-4 shadow-sm  hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600">
      <div className=" relative w-1/6 flex-shrink bg-cover sm:h-auto sm:w-10 ">
        <Image src={tool.imageUrl} alt="" width={40} height={40} />
      </div>
      <div className="min-w-0 flex-1">
        <Link href={tool.link.href} target="_blank">
          <div>
            <span className="absolute inset-0" aria-hidden="true" />
            <p className=" font-medium leading-snug  ">{tool.name}</p>
            <p className="truncate text-xxs ">{tool.description}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
