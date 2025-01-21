import { Container } from '@/components/Container'

export function Footer() {
  return (
    <>
      <footer className="mt-16">
        <Container.Outer>
          <div className="border-t border-zinc-100 pb-10 pt-8 dark:border-zinc-700/40">
            <Container.Inner>
              <div className="flex flex-col justify-between text-xs text-zinc-700 dark:text-zinc-400 sm:flex-row  sm:gap-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
                  <p className="">© 2007-2025</p>
                </div>
                <p className="">Built with Next, React, Tailwind and Vercel</p>
              </div>
            </Container.Inner>
          </div>
        </Container.Outer>
      </footer>
    </>
  )
}
