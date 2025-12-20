import { PortfolioTemplate } from '@/components/portfolio'

const projectData = {
  meta: {
    title: 'Urban Dining Group - Project',
    description: 'Restaurant that provides healthy choices',
  },
  layout: {
    title: 'Urban Dining',
    intro: 'Project details coming soon...',
  },
  tabs: [],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
