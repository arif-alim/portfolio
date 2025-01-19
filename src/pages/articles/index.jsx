import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import authorImage from '@/images/author-image.png'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

const posts = [
  {
    id: 1,
    title: 'The Importance of User-Centered Design in UI/UX',
    href: '/articles/coming-soon',
    description:
      'In this blog post, we will explore the crucial role that user-centered design plays in creating effective UI/UX. We will discuss the principles of user-centered design, provide examples of successful implementation, and offer practical tips for incorporating this approach into your own UI/UX work.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Arif Alim',
      role: 'UI/UX Designer',
      imageUrl: authorImage,
    },
  },
  {
    id: 2,
    title:
      'Designing for Accessibility to Ensure a Positive User Experience for All"',
    href: '/articles/coming-soon',
    description:
      'This blog post will delve into the critical topic of accessibility in UI/UX, discussing the key principles of accessible design and offering practical tips for ensuring that your designs are inclusive and usable for all users, regardless of their abilities or disabilities. We will provide resources for learning more about accessible design and testing your designs for accessibility.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Arif Alim',
      role: 'UI/UX Designer',
      imageUrl: authorImage,
    },
  },
  {
    id: 3,
    title: 'How to Create a Consistent and Cohesive Design System',
    href: '/articles/coming-soon',
    description:
      'In this blog post, we will explore the benefits of using a design system in UI/UX and discuss the key elements of a successful design system, such as establishing a clear visual language and creating a library of reusable design elements. We will offer practical tips for implementing a design system in your own work and provide examples of successful design systems in action.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Arif Alim',
      role: 'UI/UX Designer',
      imageUrl: authorImage,
    },
  },

  // More posts...
]

export function Blog() {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8  pt-10   lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex max-w-xl flex-col items-start justify-between"
        >
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <Link href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h3>
            <div className="text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
            </div>
            <p className="line-clamp-3 mt-5 text-tiny leading-6 text-gray-600">
              {post.description}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <Image
              src={post.author.imageUrl}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
              width={40}
              height={40}
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function Process() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Articles - Arif Alim</title>
        <meta name="description" content="Add content here" />
      </Head>
      <SimpleLayout title="Articles" intro="What I find interesting!">
        <Blog></Blog>
      </SimpleLayout>
    </div>
  )
}
