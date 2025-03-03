import { useId } from 'react'

export function Section({ title, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="text-zinc-600  dark:text-zinc-50 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 id={id} className="text-tiny font-semibold ">
          {title}
        </h2>
        text-zinc-600 dark:text-zinc-50
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
