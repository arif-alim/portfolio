import Image from 'next/image'
import Link from 'next/link'
import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/tripsupport/tripsupport1.jpg'
import screen2 from '@/images/projects/tripsupport/tripsupport2.jpg'
import screen3 from '@/images/projects/tripsupport/tripsupport3.jpg'
import screen4 from '@/images/projects/tripsupport/tripsupport4.jpg'
import screen5 from '@/images/projects/tripsupport/tripsupport5.jpg'
import screen6 from '@/images/projects/tripsupport/tripsupport6.jpg'
import screen7 from '@/images/projects/tripsupport/tripsupport7.jpg'
import screen8 from '@/images/projects/tripsupport/tripsupport8.jpg'
import screen9 from '@/images/projects/tripsupport/tripsupport9.jpg'
import screen10 from '@/images/projects/tripsupport/tripsupport10.jpg'
import screen11 from '@/images/projects/tripsupport/tripsupport11.jpg'
import screen12 from '@/images/projects/tripsupport/tripsupport12.jpg'
import screen13 from '@/images/projects/tripsupport/tripsupport13.jpg'
import screen14 from '@/images/projects/tripsupport/tripsupport14.jpg'
import screen15 from '@/images/projects/tripsupport/tripsupport15.jpg'
import screen16 from '@/images/projects/tripsupport/tripsupport16.jpg'
import screen17 from '@/images/projects/tripsupport/tripsupport17.jpg'

import newSite from '@/images/projects/tripsupport/tripsupport-new.jpg'
import oldSite from '@/images/projects/tripsupport/tripsupport-old.jpg'

// Custom render for Prototypes tab
function PrototypesContent() {
  const links = [
    {
      label: 'CA website',
      href: 'https://tripsupport.ca/book-now-pay-later/',
      imageSrc: newSite,
      imageAlt: 'Trip Support CA website',
    },
    {
      label: 'US Website',
      href: 'https://tripsupport.com/book-now-pay-later',
      imageSrc: oldSite,
      imageAlt: 'Trip Support US website',
    },
  ]

  return (
    <div className="flex flex-col dark:bg-inherit">
      <div className="col-span-full mb-4 dark:text-gray-200">
        <h2 className="text-lg font-semibold">Design comparison</h2>
      </div>
      <div className="flex flex-row flex-wrap gap-16 p-2">
        {links.map((link, index) => (
          <div key={index} className="mb-4 flex flex-col">
            <Link
              href={link.href}
              target="_blank"
              className="text-blue-800 dark:text-blue-400"
            >
              {link.label}
            </Link>
            <div className="my-2 max-w-md">
              <Image
                src={link.imageSrc}
                alt={link.imageAlt}
                width={260}
                height={260}
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const projectData = {
  meta: {
    title: 'Responsive Website Design — Trip Support | Arif Alim',
    description:
      'UI/UX design and frontend development for Trip Support, including responsive website work using Svelte and Tailwind CSS.',
  },
  layout: {
    title: 'Trip Support',
    intro: 'Responsive Mobile Design',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          'As a Lead UI/UX Designer & Frontend Developer, I used Sketch, Figma, and Axure to create high-fidelity prototypes.',
          'I converted digital assets to vector files and redesigned footer logos in Illustrator. I also edited images in Photoshop, adjusting resolution and applying lossless compression to reduce file size.',
          "I worked on Trip Support's mobile-responsive website using Svelte and Tailwind CSS. I collaborated with back-end engineers and assisted with writing scripts for business logic.",
          'I considered AODA and WCAG requirements as part of the design work, with a focus on information and communication accessibility.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'imageGrid',
      content: {
        heading: 'Custom web pages',
        columnsLg: 3,
        images: [
          { src: screen1, alt: 'Trip Support project screen 1' },
          { src: screen2, alt: 'Trip Support project screen 2' },
          { src: screen3, alt: 'Trip Support project screen 3' },
          { src: screen4, alt: 'Trip Support project screen 4' },
          { src: screen5, alt: 'Trip Support project screen 5' },
          { src: screen6, alt: 'Trip Support project screen 6' },
          { src: screen7, alt: 'Trip Support project screen 7' },
          { src: screen8, alt: 'Trip Support project screen 8' },
          { src: screen9, alt: 'Trip Support project screen 9' },
          { src: screen10, alt: 'Trip Support project screen 10' },
          { src: screen11, alt: 'Trip Support project screen 11' },
          { src: screen12, alt: 'Trip Support project screen 12' },
          { src: screen13, alt: 'Trip Support project screen 13' },
          { src: screen14, alt: 'Trip Support project screen 14' },
          { src: screen15, alt: 'Trip Support project screen 15' },
          { src: screen16, alt: 'Trip Support project screen 16' },
          { src: screen17, alt: 'Trip Support project screen 17' },
        ],
      },
    },
    {
      name: 'Prototypes',
      render: () => <PrototypesContent />,
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Trip Support',
        paragraphs: [
          'Trip Support is a travel company offering flight bookings and hotel reservations.',
        ],
        link: 'https://tripsupport.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
