import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { PortfolioCard } from '@/components/portfolio/PortfolioCard'
import { portfolioProjects } from '@/data/portfolioProjects'

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Portfolio - Arif Alim</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>

      <SimpleLayout
        title="My portfolio"
        intro="I’ve worked across government, enterprise, aviation, and product teams, creating intuitive, user-centered interfaces that balance usability with technical feasibility. By partnering closely with engineers, I ensure smooth implementation, while my focus on accessibility and performance delivers inclusive, reliable experiences."
      >
        <div className="mt-10 grid grid-cols-1 items-start gap-x-6 gap-y-10 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </SimpleLayout>
    </div>
  )
}
