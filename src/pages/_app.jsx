import Head from 'next/head'

import { useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'

import 'focus-visible'
import '@/styles/global.css'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full " />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main className="text-tiny text-zinc-900 dark:text-zinc-50 sm:text-sm">
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
        <Analytics />
      </div>
    </>
  )
}
