import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
  titleFontSize = 'text-3xl sm:text-4xl tracking-tight',
  introFontSize = 'text-tiny',
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
          className={`mt-6 ${introFontSize} leading-6  text-zinc-900 dark:text-zinc-50`}
        >
          {intro}
        </p>
      </header>
      <div className="mt-6">{children}</div>
    </Container>
  )
}
