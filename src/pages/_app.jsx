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
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/nbe3crr.css"
        ></link>
      </Head>
      <div className="fixed inset-0 flex justify-center bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full " />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
        <Analytics />
      </div>
    </>
  )
}
