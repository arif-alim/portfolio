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
          'As a Lead UI/UX Designer & Frontend Developer, I have extensive experience designing and developing high-quality digital assets for various projects. I utilized Sketch, Figma, and Axure to create high-fidelity prototypes, ensuring that the user interface was intuitive and aligned with project requirements.',
          'I also have expertise in converting digital assets to vector files and redesigning footer logos with Illustrator, adhering to branding guidelines and improving the overall visual design of the assets. I used Photoshop to edit photos/images, adjusting resolution and applying lossless compression to optimize file size and improve performance.',
          "Additionally, I designed Trip Support's new mobile-responsive website using Svelte (JS framework) and Tailwind CSS, optimizing the user interface for mobile devices and delivering an intuitive user experience. I collaborated closely with back-end engineers, assisting in writing scripts that improved business logic.",
          'Ensuring that every page on the website complied with AODA and WCAG standards, I prioritized information and communication standards to ensure that the website was accessible to all users. My skills and expertise have been crucial in developing high-quality digital assets and delivering exceptional user experiences across various projects.',
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
          "Trip Support is a global travel management company that provides a wide range of services to individual and corporate clients. The company specializes in offering personalized travel solutions, including flight bookings, hotel reservations, car rentals, and visa services. Trip Support aims to simplify the travel experience for its clients by providing a one-stop-shop for all their travel needs. With its global network of partners and suppliers, the company is able to offer competitive pricing and access to exclusive travel deals. Trip Support is committed to providing excellent customer service and support, and its team of experienced travel professionals is available 24/7 to assist clients with any questions or issues. The company's mission is to make travel easy, convenient, and affordable for everyone, and it continues to expand its offerings and services to meet the evolving needs of its clients.",
        ],
        link: 'https://tripsupport.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
