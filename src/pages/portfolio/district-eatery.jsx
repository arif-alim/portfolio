import { PortfolioTemplate } from '@/components/portfolio'

const projectData = {
  meta: {
    title: 'District Eatery | Arif Alim',
    // TODO(Arif): Confirm project scope and contribution before adding a description.
  },
  layout: {
    title: 'District Eatery',
    intro: 'Project details are not published.',
  },
  tabs: [],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
