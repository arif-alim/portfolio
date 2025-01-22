import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
  titleFontSize = 'text-2xl sm:text-3xl tracking-tight',
  introFontSize = 'text-tiny sm:text-tiny',
}) {
  return (
    <Container className="mt-16 sm:mt-20">
      <header className="max-w-3xl text-zinc-900 dark:text-zinc-50">
        <h1 className={`${titleFontSize} font-bold `}>{title}</h1>
        <p className={`mt-5 ${introFontSize} leading-6`}>{intro}</p>
      </header>
      <div className="mt-10">{children}</div>
    </Container>
  )
}
