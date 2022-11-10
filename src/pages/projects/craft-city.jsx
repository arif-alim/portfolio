import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function CraftCity() {
  return (
    <>
      <Head>
        <title>Craft City - Arif Alim</title>
        <meta name="craftcity" content="Craft City Hard Seltzer" />
      </Head>
      <SimpleLayout
        title="Cract City Hard Seltzer"
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <h2 className="text-zinc-700 dark:text-zinc-300">Hello World</h2>
        </div>
      </SimpleLayout>
    </>
  )
}
