import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ToolboxCard } from '@/components/ToolboxCard'
import { designTools, developmentTools } from '@/data/toolbox'

export default function Toolbox() {
  return (
    <>
      <Head>
        <title>Toolbox - Arif Alim</title>
        <meta
          name="description"
          content="UI/UX, frontend, and backend languages, software and frameworks I use."
        />
      </Head>
      <SimpleLayout
        title="The tools and frameworks I use to bring ideas to life!"
        intro="I’m often asked about the tools and technologies I use for graphic design, interaction design, and creating seamless user experiences, as well as the front-end and back-end tools I rely on to bring my ideas to life. I’ve put together a list of the software, languages, and frameworks that form the foundation of my workflow."
      >
        <div className="space-y-20">
          {[
            { title: 'Design tools', tools: designTools },
            { title: 'Development tools', tools: developmentTools },
          ].map(({ title, tools }) => (
            <div key={title} className="space-y-10">
              <h2 className="border-b-4 pb-2 text-md font-semibold tracking-normal dark:border-zinc-700 ">
                {title}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                {tools.map((tool) => (
                  <ToolboxCard key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
