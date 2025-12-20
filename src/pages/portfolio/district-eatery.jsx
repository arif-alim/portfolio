import { PortfolioTemplate } from '@/components/portfolio'

const projectData = {
  meta: {
    title: 'District Eatery - Project',
    description: 'Restaurant that provides healthy choices',
  },
  layout: {
    title: 'District Eatery',
    intro: 'Project details coming soon...',
  },
  tabs: [],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
