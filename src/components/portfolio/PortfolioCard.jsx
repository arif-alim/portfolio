import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import Badge from '@/components/Badge'

const CARD_BORDER_COLOR = 'border-blue-300'

export function PortfolioCard({ project }) {
  return (
    <div>
      <Link href={project.link.href}>
        <div className="rounded-4xl group relative h-[196px] transform overflow-hidden">
          {project.badge && (
            <div className="absolute right-4 top-4 z-10">
              <Badge color={project.badge.color}>{project.badge.label}</Badge>
            </div>
          )}

          {/* Blue border */}
          <div
            className={clsx(
              'rounded-4xl absolute inset-0 border transition duration-300 group-hover:scale-95',
              CARD_BORDER_COLOR
            )}
          />

          <div className="absolute inset-0 my-auto">
            <div className="flex h-full w-full items-center p-8 sm:p-6">
              {/* Light mode logo */}
              <Image
                className="transition duration-300 group-hover:scale-110 dark:hidden"
                src={project.imageLight}
                alt={`${project.name} logo`}
                width={260}
                height={260}
                sizes="(min-width: 1024px) 33vw, 100vw"
                style={{ width: '100%', height: 'auto' }}
              />

              {/* Dark mode logo */}
              <Image
                className="hidden transition duration-300 group-hover:scale-110 dark:block"
                src={project.imageDark}
                alt={`${project.name} logo`}
                width={260}
                height={260}
                sizes="(min-width: 1024px) 33vw, 100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        <h3 className="font-display mt-2 text-base font-semibold">
          {project.name}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-300">
          {project.about}
        </p>
      </Link>
    </div>
  )
}
