import Head from 'next/head'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'

import story from '@/images/process/story.svg'
import empathize from '@/images/process/empathize.svg'
import define from '@/images/process/define.svg'
import ideate from '@/images/process/ideate.svg'
import prototype from '@/images/process/prototype.svg'
import testing from '@/images/process/testing.svg'

// Ensure any Link components in this file have exactly one child element

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

export default function Process() {
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
