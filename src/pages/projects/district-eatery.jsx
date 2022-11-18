import Head from 'next/head'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/projects/mbo/mbo-1.jpeg'
import screen2 from '@/images/projects/mbo/mbo-2.jpeg'
import screen3 from '@/images/projects/mbo/mbo-3.jpeg'
import screen4 from '@/images/projects/mbo/mbo-4.jpeg'
import screen5 from '@/images/projects/mbo/mbo-5.jpeg'
import screen6 from '@/images/projects/mbo/mbo-6.jpeg'
import screen7 from '@/images/projects/mbo/mbo-7.jpeg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>District Eatery - Project</title>
        <meta
          name="description"
          content="Restaurant that provides healthy choices"
        />
      </Head>
      <SimpleLayout
        title="District Eatery"
        intro="Project details coming soon...
"
      ></SimpleLayout>
    </>
  )
}
