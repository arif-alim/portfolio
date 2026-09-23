import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

// Ensure any Link components in this file have exactly one child element

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Article - Arif Alim</title>
        <meta name="description" content="Articles page coming soon." />
      </Head>
      <SimpleLayout
        title="Articles"
        intro="The page is under construction. Please check back later."
      ></SimpleLayout>
    </div>
  )
}
