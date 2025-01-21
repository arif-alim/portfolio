import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
  titleFontSize = 'text-2xl sm:text-3xl tracking-tight',
  introFontSize = 'text-sm',
}) {
  return (
    <Container className="mt-16 sm:mt-20">
      <header className="max-w-3xl">
        <h1
          className={`${titleFontSize} font-bold text-zinc-900 dark:text-zinc-50`}
        >
          {title}
        </h1>
        <p
          className={`mt-5 ${introFontSize} leading-6  text-zinc-900  dark:text-zinc-300`}
        >
          {intro}
        </p>
      </header>
      <div className="mt-10">{children}</div>
    </Container>
  )
}
