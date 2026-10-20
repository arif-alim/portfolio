import type { ReactNode } from 'react'

export function IllustrativeLabel({
  children = 'Illustrative reconstruction',
}: {
  children?: ReactNode
}) {
  return (
    <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
      {children}
    </p>
  )
}
