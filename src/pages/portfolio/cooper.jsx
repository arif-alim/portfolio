import { PortfolioTemplate } from '@/components/portfolio'

// Cooper designs
import logo1 from '@/images/projects/cooper/cooper-1.jpg'
import logo2 from '@/images/projects/cooper/cooper-2.jpg'
import logo3 from '@/images/projects/cooper/cooper-3.jpg'
import logo4 from '@/images/projects/cooper/cooper-4.jpg'
import app1 from '@/images/projects/cooper/cooper-6.jpg'
import app2 from '@/images/projects/cooper/cooper-7.jpg'
import app3 from '@/images/projects/cooper/cooper-8.jpg'
import app4 from '@/images/projects/cooper/cooper-9.jpg'
import app5 from '@/images/projects/cooper/cooper-10.jpg'
import app6 from '@/images/projects/cooper/cooper-11.jpg'
import app7 from '@/images/projects/cooper/cooper-12.jpg'
import app8 from '@/images/projects/cooper/cooper-13.jpg'
import app9 from '@/images/projects/cooper/cooper-14.jpg'
import app10 from '@/images/projects/cooper/cooper-15.jpg'
import app11 from '@/images/projects/cooper/cooper-16.jpg'
import app12 from '@/images/projects/cooper/cooper-17.jpg'
import app13 from '@/images/projects/cooper/cooper-18.jpg'
import app14 from '@/images/projects/cooper/cooper-19.jpg'
import app15 from '@/images/projects/cooper/cooper-20.jpg'
import web1 from '@/images/projects/cooper/cooper-21.jpg'
import web2 from '@/images/projects/cooper/cooper-22.jpg'
import web3 from '@/images/projects/cooper/cooper-23.jpg'
import web4 from '@/images/projects/cooper/cooper-24.jpg'
import web5 from '@/images/projects/cooper/cooper-25.jpg'
import web6 from '@/images/projects/cooper/cooper-26.jpg'

import logoCooper from '@/images/projects/cooper/coooper-logo.svg'

const projectData = {
  meta: {
    title: 'Cooper - Project',
    description: 'Cooper Driver app and brand design',
  },
  layout: {
    title: 'Cooper Apps',
    intro:
      'Extensive user research followed with affinity mapping and user journeys. I had to account for Google Maps not picking up some Bahamas locations and designed a custom app experience.',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        logo: {
          src: logoCooper,
          alt: 'Cooper logo',
        },
        paragraphs: [
          'As the designer of the Cooper Driver mobile app, my focus was on creating a user-friendly and efficient user experience that would meet the needs of both drivers and clients. The app features a simple and intuitive interface that makes it easy for users to request and track transportation services, with real-time updates and delivery confirmation for added convenience.',
          'The design of the Cooper Driver app incorporates the latest UI/UX mobile app design trends to enhance user experience, including the use of white space, high-quality images, and simplified navigation. The use of clear labeling and bold icons ensures that users can easily navigate the app and access the features they need, while the incorporation of real-time tracking and delivery confirmation improves transparency and user trust.',
          'Overall, the Cooper Driver mobile app redesign has resulted in a significant improvement in user experience and customer satisfaction. The user-friendly design and efficient functionality have helped to increase engagement and improve the overall user experience, making it easier for drivers and clients to access the information and services they need while on the go.',
        ],
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Cooper',
        paragraphs: [
          'The Cooper Driver app is a transportation service based in the Bahamas that provides a reliable and affordable solution for individuals and businesses looking to move goods across the country. The app connects drivers with clients in need of transportation, offering a seamless and efficient solution for all types of cargo. The Cooper Driver app features real-time tracking, delivery confirmation, and payment processing, making it easy for both drivers and clients to stay informed and in control. With a focus on safety and customer satisfaction, Cooper Driver is a trusted and reliable transportation service that meets the needs of businesses and individuals in the Bahamas.',
        ],
        link: 'https://www.ontario.ca/page/digital-dealership-registration-program',
      },
    },
    {
      name: 'Logo',
      type: 'imageGrid',
      content: {
        columnsLg: 4,
        images: [
          { src: logo1, alt: 'Cooper logo design version 1' },
          { src: logo2, alt: 'Cooper logo design version 2' },
          { src: logo3, alt: 'Cooper logo design version 3' },
          { src: logo4, alt: 'Cooper logo design version 4' },
        ],
      },
    },
    {
      name: 'Mobile App',
      type: 'imageGrid',
      content: {
        columnsLg: 5,
        images: [
          { src: app1, alt: 'Cooper app design 1' },
          { src: app2, alt: 'Cooper app design 2' },
          { src: app3, alt: 'Cooper app design 3' },
          { src: app4, alt: 'Cooper app design 4' },
          { src: app5, alt: 'Cooper app design 5' },
          { src: app6, alt: 'Cooper app design 6' },
          { src: app7, alt: 'Cooper app design 7' },
          { src: app8, alt: 'Cooper app design 8' },
          { src: app9, alt: 'Cooper app design 9' },
          { src: app10, alt: 'Cooper app design 10' },
          { src: app11, alt: 'Cooper app design 11' },
          { src: app12, alt: 'Cooper app design 12' },
          { src: app13, alt: 'Cooper app design 13' },
          { src: app14, alt: 'Cooper app design 14' },
          { src: app15, alt: 'Cooper app design 15' },
        ],
      },
    },
    {
      name: 'Responsive Website',
      type: 'imageGrid',
      content: {
        columnsLg: 3,
        images: [
          { src: web1, alt: 'Cooper responsive website 1' },
          { src: web2, alt: 'Cooper responsive website 2' },
          { src: web3, alt: 'Cooper responsive website 3' },
          { src: web4, alt: 'Cooper responsive website 4' },
          { src: web5, alt: 'Cooper responsive website 5' },
          { src: web6, alt: 'Cooper responsive website 6' },
        ],
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
