import { processDisciplines as originalDisciplines } from './processTopics'
import * as content from './processContent'
import type { TopicDraft } from './processContent'
import { topicArtifacts } from './processIllustrations'

export type Illustration =
  | { kind: 'table'; caption: string; headers: string[]; rows: string[][] }
  | { kind: 'flow'; caption: string; steps: [string, string][] }
  | { kind: 'code'; caption: string; code: string }
  | { kind: 'checklist'; caption: string; items: string[] }

export type PreservedExample = {
  id: string
  name: string
  decision: string
  artifact: string
  check: string
  demo?: string
  example?: string[][]
  exampleLabel?: string
  reference?: string[]
  proposedCheck?: boolean
}
export type ProcessTopic = TopicDraft & {
  id: string
  illustration?: Illustration
  preservedExamples: PreservedExample[]
}
export type ProcessDiscipline = {
  id: string
  name: string
  topics: ProcessTopic[]
}
export type ProcessDomain = {
  id: string
  name: string
  disciplines: ProcessDiscipline[]
}

// IDs are deterministic slugs; keep them stable when editing display copy.
export function processId(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
function discipline(name: string, drafts: TopicDraft[]): ProcessDiscipline {
  return {
    id: processId(name),
    name,
    topics: drafts.map((draft) => ({
      ...draft,
      id: processId(draft.name),
      illustration: topicArtifacts[processId(draft.name)],
      preservedExamples: [],
    })),
  }
}

export const processDomains: ProcessDomain[] = [
  {
    id: 'business',
    name: 'Business',
    disciplines: [
      discipline('Business Analysis', content.businessAnalysis),
      discipline('Business Systems Analysis', content.systemsAnalysis),
      discipline('Product Ownership', content.productOwnership),
      discipline('Business Transformation', content.transformation),
    ],
  },
  {
    id: 'design',
    name: 'Design',
    disciplines: [
      discipline('Product Design', content.productDesign),
      discipline('Service Design', content.serviceDesign),
      discipline('Design Systems', content.designSystems),
      discipline('Design Strategy', content.designStrategy),
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    disciplines: [
      discipline('Inclusive Design', content.inclusiveDesign),
      discipline('Standards & Compliance', content.standards),
      discipline('Accessibility Testing', content.accessibilityTesting),
      discipline('Accessibility Governance', content.accessibilityGovernance),
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    disciplines: [
      discipline('Frontend Development', content.frontend),
      discipline('Systems Integration', content.integration),
      discipline('Artificial Intelligence', content.artificialIntelligence),
      discipline('Quality Assurance', content.qualityAssurance),
    ],
  },
]

// Every original topic is retained verbatim and has a stable old-URL alias.
const migrations: Record<string, [string, string, string]> = {
  'frame-the-problem': [
    'design',
    'product-design',
    'product-discovery-and-problem-framing',
  ],
  'map-the-workflow': ['design', 'product-design', 'information-architecture'],
  'prototype-and-test': [
    'design',
    'product-design',
    'wireframing-and-prototyping',
  ],
  'measure-the-workflow': [
    'design',
    'product-design',
    'data-informed-design-optimization',
  ],
  'review-ai-suggestions': [
    'engineering',
    'artificial-intelligence',
    'human-in-the-loop-workflows',
  ],
  'map-the-journey': ['design', 'service-design', 'customer-journey-mapping'],
  'blueprint-the-service': ['design', 'service-design', 'service-blueprinting'],
  'improve-handoffs': [
    'design',
    'service-design',
    'frontstage-and-backstage-processes',
  ],
  'design-assisted-channels': [
    'design',
    'service-design',
    'customer-and-stakeholder-research',
  ],
  'own-and-pilot-exceptions': [
    'design',
    'service-design',
    'service-improvement-and-optimization',
  ],
  'tokens-and-themes': [
    'design',
    'design-systems',
    'foundations-and-design-tokens',
  ],
  'components-and-states': [
    'design',
    'design-systems',
    'component-design-and-architecture',
  ],
  'figma-to-react': ['design', 'design-systems', 'design-to-code-alignment'],
  'ai-readable-contracts': [
    'design',
    'design-systems',
    'design-to-code-alignment',
  ],
  'govern-contributions': [
    'design',
    'design-systems',
    'governance-contribution-and-adoption',
  ],
  'release-and-migrate': [
    'design',
    'design-systems',
    'governance-contribution-and-adoption',
  ],
  'keyboard-and-focus': [
    'accessibility',
    'accessibility-testing',
    'keyboard-navigation',
  ],
  'screen-reader-behaviour': [
    'accessibility',
    'accessibility-testing',
    'screen-reader-testing',
  ],
  'validation-and-recovery': [
    'accessibility',
    'standards-and-compliance',
    'accessible-forms-and-error-handling',
  ],
  'reflow-and-targets': [
    'accessibility',
    'inclusive-design',
    'accessible-interaction-patterns',
  ],
  'combine-accessibility-checks': [
    'accessibility',
    'accessibility-testing',
    'manual-accessibility-audits',
  ],
  'feasibility-and-co-design': [
    'engineering',
    'frontend-development',
    'technical-feasibility-and-co-design',
  ],
  'implementation-handoff': [
    'engineering',
    'quality-assurance',
    'implementation-handoff',
  ],
  'build-review-and-sign-off': [
    'engineering',
    'quality-assurance',
    'build-review-and-sign-off',
  ],
  'specify-data-states': [
    'engineering',
    'frontend-development',
    'application-states-and-error-recovery',
  ],
  'layer-regression-tests': [
    'engineering',
    'quality-assurance',
    'functional-and-regression-testing',
  ],
  'review-responsive-performance': [
    'engineering',
    'frontend-development',
    'frontend-performance-optimization',
  ],
}
type Selection = {
  domain: ProcessDomain
  discipline: ProcessDiscipline
  topic: ProcessTopic
}
export const legacySelections: Record<string, Selection> = {}
for (const original of originalDisciplines) {
  for (const example of original.topics) {
    const [domainId, disciplineId, topicId] = migrations[example.id]
    const domain = processDomains.find(({ id }) => id === domainId)
    const target = domain?.disciplines.find(({ id }) => id === disciplineId)
    const topic = target?.topics.find(({ id }) => id === topicId)
    if (!domain || !target || !topic)
      throw new Error(`Missing Process migration: ${example.id}`)
    topic.preservedExamples.push(example)
    legacySelections[`${original.id}/${example.id}`] = {
      domain,
      discipline: target,
      topic,
    }
  }
}

export function resolveProcessSelection(
  query: Record<string, unknown>
): Selection {
  // Old discipline-only URLs retain their original first example as well.
  if (!query.domain && typeof query.discipline === 'string') {
    const original = originalDisciplines.find(
      ({ id }) => id === query.discipline
    )
    if (original) {
      const key = `${original.id}/${
        typeof query.topic === 'string' ? query.topic : original.topics[0].id
      }`
      if (legacySelections[key]) return legacySelections[key]
    }
  }
  const domain =
    processDomains.find(({ id }) => id === query.domain) || processDomains[0]
  const selectedDiscipline = domain.disciplines.find(
    ({ id }) => id === query.discipline
  )
  // A valid topic URL can recover its containing discipline if it was omitted.
  const owner = domain.disciplines.find(({ topics }) =>
    topics.some(({ id }) => id === query.topic)
  )
  const selected = selectedDiscipline || owner || domain.disciplines[0]
  const topic =
    selected.topics.find(({ id }) => id === query.topic) || selected.topics[0]
  return { domain, discipline: selected, topic }
}

export function processHref(
  domain: ProcessDomain,
  discipline = domain.disciplines[0],
  topic = discipline.topics[0]
) {
  return {
    pathname: '/process',
    query: { domain: domain.id, discipline: discipline.id, topic: topic.id },
  }
}
