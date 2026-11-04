import Link from 'next/link'
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
      <Link
        href="/process?discipline=design-systems&topic=figma-to-react"
        className="mb-4 inline-flex min-h-[44px] items-center font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
      >
        Back to Design Systems on Process
      </Link>
      <DesignSystemsCaseStudy />
    </PortfolioTemplate>
  )
}
