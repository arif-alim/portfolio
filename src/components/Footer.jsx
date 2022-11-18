import Link from 'next/link'

import { Container } from '@/components/Container'

export function Footer() {
  return (
    <>
      <footer className="mt-16">
        <Container.Outer>
          <div className="border-t border-zinc-100 pt-8 pb-10 dark:border-zinc-700/40">
            <Container.Inner>
              <div className="flex flex-col justify-between sm:flex-row sm:gap-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    © 2007-2022
                  </p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Built with Next, React, Tailwind and Vercel
                </p>
              </div>
            </Container.Inner>
          </div>
        </Container.Outer>
      </footer>
    </>
  )
}
