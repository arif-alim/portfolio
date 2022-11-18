import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-700 dark:font-light dark:text-zinc-100">
          {intro}
        </p>
      </header>
      <div className="mt-12">{children}</div>
    </Container>
  )
}
