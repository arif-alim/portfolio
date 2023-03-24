import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'

import uiUx from '@/images/process/pen-tool.svg'
import story from '@/images/process/story.svg'
import empathize from '@/images/process/empathize.svg'
import define from '@/images/process/define.svg'
import ideate from '@/images/process/ideate.svg'
import prototype from '@/images/process/prototype.svg'
import testing from '@/images/process/testing.svg'

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

export default function Process() {
  return (
    <>
      <Head>
        <title>Articles - Arif Alim</title>
        <meta name="description" content="Add content here" />
      </Head>
      <SimpleLayout title="Articles" intro="Coming soon..."></SimpleLayout>
    </>
  )
}
