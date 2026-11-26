import Link from 'next/link'
import { ProcessArtifact } from './ProcessArtifact'
import { TopicIllustration } from './TopicIllustration'

function Section({ title, children }) {
  return children ? (
    <section className="space-y-2">
      <h3 className="font-semibold">{title}</h3>
      {children}
    </section>
  ) : null
}

export function ProcessTopicContent({ domain, discipline, topic }) {
  return (
    <article
      aria-labelledby="process-topic"
      className="min-w-0 space-y-6 break-words rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900 sm:p-6"
    >
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
          {domain.name} / {discipline.name}
        </p>
        <h2
          id="process-topic"
          className="text-2xl font-semibold tracking-tight"
        >
          {topic.name}
        </h2>
      </header>
      <Section title="The decision">
        <p className="max-w-prose">{topic.decision}</p>
      </Section>
      <Section title="The approach">
        {topic.approach && <p className="max-w-prose">{topic.approach}</p>}
      </Section>
      <Section title="The artefact">
        {topic.artifact && <p className="max-w-prose">{topic.artifact}</p>}
      </Section>
      {(topic.scenario || topic.illustration) && (
        <Section title="Illustrative example">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Hypothetical scenario
          </p>
          <p className="max-w-prose">{topic.scenario}</p>
          {topic.illustration && (
            <TopicIllustration illustration={topic.illustration} />
          )}
        </Section>
      )}
      <Section title="Validation">
        {topic.validation && <p className="max-w-prose">{topic.validation}</p>}
      </Section>
      <Section title="Business value">
        {topic.value && <p className="max-w-prose">{topic.value}</p>}
      </Section>
      {topic.preservedExamples.map((example) => (
        <section
          key={example.id}
          aria-labelledby={`example-${example.id}`}
          className="space-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-700"
        >
          <h3 id={`example-${example.id}`} className="text-lg font-semibold">
            {example.name}
          </h3>
          <div className="space-y-1">
            <h4 className="font-semibold">The decision</h4>
            <p>{example.decision}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">The artefact</h4>
            <p>
              {example.artifact}
              {example.reference && (
                <>
                  {' '}
                  <Link
                    href={example.reference[0]}
                    className="text-blue-700 underline underline-offset-4 dark:text-blue-300"
                  >
                    {example.reference[1]}
                  </Link>
                  .
                </>
              )}
            </p>
            <ProcessArtifact topic={example} />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold">
              {example.proposedCheck ? 'How I’d check it' : 'How I checked it'}
            </h4>
            <p>{example.check}</p>
          </div>
        </section>
      ))}
    </article>
  )
}
