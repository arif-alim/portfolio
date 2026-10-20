import { PortfolioTemplate } from '@/components/portfolio'
import { DesignSystemsCaseStudy } from '@/components/portfolio/design-systems/DesignSystemsCaseStudy'
export default function DesignSystems() {
  return (
    <PortfolioTemplate
      meta={{
        title:
          'Design Systems Engineering & AI-Ready Component Architecture | Arif Alim',
        description:
          'An architectural exploration connecting Figma variables, semantic tokens, accessible React components and AI-readable contracts.',
      }}
      layout={{
        title: 'Design Systems Engineering & AI-Ready Component Architecture',
        intro:
          'Connecting Figma variables, design tokens, reusable components, and frontend engineering through structured, scalable workflows.',
      }}
    >
      <DesignSystemsCaseStudy />
    </PortfolioTemplate>
  )
}
