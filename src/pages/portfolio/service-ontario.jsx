import { PortfolioTemplate } from '@/components/portfolio'
import { RegistrationDemonstration } from '@/components/portfolio/service-ontario/RegistrationDemonstration'
import {
  ServiceOntarioOverview,
  ServiceOntarioProcess,
  ServiceOntarioExplorations,
} from '@/components/portfolio/service-ontario/ServiceOntarioCaseStudy'

const projectData = {
  meta: {
    title: 'Digital Dealership Registration — ServiceOntario | Arif Alim',
    description:
      'UI design for ServiceOntario Digital Dealership Registration, including wireframes, clickable prototypes, and usability testing.',
  },
  layout: {
    title: 'ServiceOntario',
    intro: 'Digital Dealership Registration (DDR)',
  },
  defaultTab: 'Overview',
  tabs: [
    { name: 'Overview', render: () => <ServiceOntarioOverview /> },
    { name: 'Design Process', render: () => <ServiceOntarioProcess /> },
    {
      name: 'Design Explorations',
      render: () => <ServiceOntarioExplorations />,
    },
    { name: 'Interactive Demo', render: () => <RegistrationDemonstration /> },
  ],
}
export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
