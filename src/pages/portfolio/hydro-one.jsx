import Link from 'next/link'
import { PortfolioTemplate, Screenshot } from '@/components/portfolio'

// Wireframe screens
import screen1 from '@/images/projects/hydroone/screen1.jpg'
import screen3 from '@/images/projects/hydroone/screen3.jpg'
import screen5 from '@/images/projects/hydroone/screen5.jpg'
import screen7 from '@/images/projects/hydroone/screen7.jpg'
import screen9 from '@/images/projects/hydroone/screen9.jpg'

// Prototypes
import proto1 from '@/images/projects/hydroone/proto1.png'
import proto2 from '@/images/projects/hydroone/proto2.png'
import proto3 from '@/images/projects/hydroone/proto3.png'
import proto4 from '@/images/projects/hydroone/proto4.png'
import proto5 from '@/images/projects/hydroone/proto5.png'
import proto6 from '@/images/projects/hydroone/proto6.png'
import proto7 from '@/images/projects/hydroone/proto7.png'
import proto8 from '@/images/projects/hydroone/proto8.png'
import proto9 from '@/images/projects/hydroone/proto9.png'
import proto10 from '@/images/projects/hydroone/proto10.png'

// Custom Wireframes Section with links
function WireframesSectionCustom() {
  const sections = [
    {
      title: 'Sustainability Initiatives',
      subheading: 'Our commitment to a greener future',
      link: {
        href: 'https://www.hydroone.com/Sustainability',
        label: 'Learn more about our sustainability initiatives',
      },
      images: [
        { src: screen1, alt: 'Sustainability screen 1' },
        { src: screen3, alt: 'Sustainability screen 2' },
        { src: screen5, alt: 'Sustainability screen 3' },
      ],
    },
    {
      title: 'Energy Hub',
      subheading: 'Innovative energy solutions',
      link: {
        href: 'https://www.hydroone.com/energy-hub',
        label: 'Explore our energy hub',
      },
      images: [
        { src: screen7, alt: 'Energy Hub screen 1' },
        { src: screen9, alt: 'Energy Hub screen 2' },
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-y-8">
      {sections.map((section, index) => (
        <div key={index} className="mb-8 text-zinc-900 dark:text-zinc-50">
          <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
          <p className="max-w-3xl">{section.subheading}</p>

          {section.link && (
            <Link
              href={section.link.href}
              target="_blank"
              className="mb-4 mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
            >
              {section.link.label}
            </Link>
          )}

          <div className="mt-4 grid grid-cols-1 gap-4 rounded-lg bg-slate-100 p-4 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-6">
            {section.images.map((image, idx) => (
              <Screenshot
                key={idx}
                src={image.src}
                alt={image.alt}
                width={260}
                height={260}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// Custom Prototypes Section with Figma links
function PrototypesSectionCustom() {
  const figmaLinks = [
    { href: 'https://www.figma.com/design/C63rTgdhnGR38HCokMK1fP/Sustainability-2021?node-id=0-1&t=HbCS9TMWfWol79Al-1', label: 'Sustainability' },
    { href: 'https://www.figma.com/file/qlbk5r4jpix7dRdlxwHXO8/Vacation-Conservation-Tips?node-id=2%3A66&t=u0nfmNQO4Tm3IHaw-1', label: 'Vacation Conservation Tips' },
    { href: 'https://www.figma.com/file/OWiuIOxVw4K1GnHxXzsdNN/Richview-to-Manby?node-id=0%3A1&t=44Yp4t5z6vJpwtBm-1', label: 'Richview to Manby' },
    { href: 'https://www.figma.com/file/YkdlTQIZduAtdhuV4CYrLL/Islington-TS-LP?node-id=0%3A1&t=qXdRMOZ82HqcHx6p-1', label: 'Islington TSLP' },
    { href: 'https://www.figma.com/file/mfkVcrjSymJWH26i5LlgyI/Sault-3-TS?node-id=0%3A1&t=ojhVZqJlEiLL2Re2-1', label: 'Sault 3 TS' },
    { href: 'https://www.figma.com/file/YUqmU8h7otbD7yKSPptRrM/Merivale?node-id=0%3A1&t=tE8P17VMrwyDev1w-1', label: 'Merivale' },
    { href: 'https://www.figma.com/file/aO52JoNiH7zpQyXXdLbcCV/Insulation-Tips?node-id=0%3A1&t=ircfMjDokfKHgn9X-1', label: 'Insulation Tips' },
    { href: 'https://www.figma.com/file/yhxLLF5WmzzBj1FwEtK2Sl/WTTLR?node-id=0%3A1&t=NfVxLuY6MN9NZqbg-1', label: 'WTTLR' },
    { href: 'https://www.figma.com/file/PkrAaCCp3lXDZ9iHuzkqIz/Lighting-Your-Home?node-id=0%3A1&t=fAXHXZtD7RAIdFt4-1', label: 'Lighting Your Home' },
    { href: 'https://www.figma.com/file/YbApoBKV60o7MAaZ3SJOHx/Saint-Clair?node-id=0%3A1&t=Fn3pBujvdF3u2lZw-1', label: 'Saint Clair' },
  ]

  const images = [proto1, proto2, proto3, proto4, proto5, proto6, proto7, proto8, proto9, proto10]

  return (
    <div className="flex flex-col">
      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-zinc-50">
        Mobile First Responsive Designs
      </h3>

      <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Screenshot
              src={src}
              alt={`Hydro One prototype screen ${index + 1}`}
              width={260}
              height={260}
            />
            {figmaLinks[index] && (
              <Link
                href={figmaLinks[index].href}
                target="_blank"
                className="mt-2 block text-blue-800 hover:underline dark:text-blue-400"
              >
                {figmaLinks[index].label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const projectData = {
  meta: {
    title: 'Hydro One – Responsive Mobile Design',
  },
  layout: {
    title: 'Hydro One',
    intro: 'Responsive mobile and web design.',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Hydro One – Responsive Site & Components',
        paragraphs: [
          "As a Senior Lead Designer at Hydro One, I played a pivotal role in enhancing the company's digital presence by creating a comprehensive style guide and reusable design components using Figma.",
          "I developed high-fidelity UI prototypes and integrated accessible, responsive designs into SharePoint using HTML5, CSS3, and JavaScript. My contributions included conducting user research to address pain points, applying design thinking principles, and ensuring compliance with accessibility standards such as contrast trends, aria labels, and alt tags.",
          "Collaborating with cross-functional teams via Wrike, I delivered innovative, user-friendly solutions that improved the overall digital experience.",
        ],
      },
    },
    {
      name: 'Wireframes',
      render: () => <WireframesSectionCustom />,
    },
    {
      name: 'Prototypes',
      render: () => <PrototypesSectionCustom />,
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Hydro One',
        paragraphs: [
          "Hydro One is Ontario's largest electricity transmission and distribution provider, delivering power to homes, businesses, and communities across the province. With a commitment to safety, reliability, and sustainability, Hydro One plays a critical role in Ontario's energy infrastructure and economic development.",
        ],
        link: 'https://www.hydroone.com/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
