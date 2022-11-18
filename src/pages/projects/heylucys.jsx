import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'

export default function HeyLucys() {
  return (
    <>
      <Head>
        <title>Hey Lucy - Arif Alim</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout title="HeyLucy's" intro="Coming soon"></SimpleLayout>
    </>
  )
}
