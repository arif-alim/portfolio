import { PortfolioTemplate } from '@/components/portfolio'

// Custom section components for CBSA's unique structure
function SummaryTabCustom() {
  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      <div className="col-span-full mb-4">
        <h2 className="text-lg font-semibold">Responsibilities</h2>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          At the Canada Border Services Agency (CBSA), I served as a Lead UX
          Designer, focusing on improving service design and user experience for
          key projects. My work involved conducting in-depth user research
          through interviews, surveys, and observational studies to identify
          customer pain points and align solutions with user needs. I developed
          detailed user journey maps and service blueprints, ensuring a
          comprehensive understanding of current-state processes and identifying
          areas for improvement. Using Figma, I created high-fidelity prototypes
          and conducted iterative testing, gathering feedback to refine designs
          and enhance service interactions.
        </p>
        <p>
          In collaboration with cross-functional teams, I facilitated
          co-creation workshops using Miro, ensuring alignment between user
          needs and business objectives while adhering to Federal Digital
          Service Standards. While I am unable to share the designs due to
          confidentiality, my work at CBSA demonstrates my ability to design
          user-focused interfaces within government service constraints.
        </p>
      </div>
    </div>
  )
}

function ScopeTabCustom() {
  return (
    <div className="space-y-8">
      <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
        <h2 className="mb-4 text-lg font-semibold">Overview</h2>
        <p>
          Project Epsilon focused on delivering a user-centered solution that
          connected complex backend data with front-end interface design. The
          goal was to create a scalable, efficient, and visually cohesive
          interface that simplified development workflows while enhancing the
          user experience.
        </p>
      </div>
      <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
        <h2 className="mb-4 text-lg font-semibold">Role and Approach</h2>
        <p>
          As a Lead UX Designer, my role involved deeply understanding the
          system architecture, particularly the API calls and the JSON data
          structure retrieved. By analyzing the API responses and the data
          schema, I identified patterns and opportunities to streamline how data
          was presented and interacted with on the user interface.
        </p>
      </div>
    </div>
  )
}

function ContributionsTabCustom() {
  const groups = [
    {
      title: 'Data-Driven Design Decisions:',
      items: [
        'By studying the structure of the JSON objects, including arrays of data points, I devised a design solution that dynamically adjusted to varying data sets.',
        'The design used a single card component that could be repeated for each object in the array.',
      ],
    },
    {
      title: 'Simplifying Development Through Design:',
      items: [
        'I used a card-based layout to standardize how data was displayed across different data scenarios.',
        'I designed the card layout around fields in the JSON objects to support collaboration with the development team.',
      ],
    },
    {
      title: 'User-Centered Enhancements:',
      items: [
        'I organized information within the card design using a consistent structure and hierarchy.',
        'The modular design was intended to accommodate additional data fields.',
      ],
    },
  ]

  const summaryItems = [
    'Reusable Components: Designed a card pattern around incoming data.',
    'Variable Data: Designed the layout for repeated objects and varying data sets.',
    'Information Hierarchy: Organized complex data into a consistent interface structure.',
  ]

  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      <h2 className="mb-6 text-lg font-semibold">Key Contributions</h2>
      <ol className="list-inside list-decimal space-y-6">
        {groups.map((group, gIdx) => (
          <li key={gIdx}>
            <span className="font-semibold">{group.title}</span>
            <ul className="ml-6 mt-2 list-inside list-disc space-y-2">
              {group.items.map((item, iIdx) => (
                <li key={iIdx}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <h3 className="mb-2 text-md font-semibold">Design Deliverables</h3>
        <ul className="ml-6 list-inside list-disc space-y-2">
          {summaryItems.map((item, iIdx) => (
            <li key={iIdx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ResultTabCustom() {
  const items = [
    'Reusable Components: Designed a card pattern around incoming data.',
    'Variable Data: Designed the layout for repeated objects and varying data sets.',
    'Information Hierarchy: Organized complex data into a consistent interface structure.',
  ]

  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      <h2 className="mb-4 text-lg font-semibold">Design Deliverables</h2>
      <ul className="ml-6 list-inside list-disc space-y-2">
        {items.map((item, iIdx) => (
          <li key={iIdx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const projectData = {
  meta: {
    title: 'Service & Interface Design — CBSA | Arif Alim',
    description:
      'Lead UX design work for CBSA, including user research, service blueprints, prototypes, and reusable interface patterns.',
  },
  layout: {
    title: 'CBSA',
    intro:
      'User research, service design, and interface design as a Lead UX Designer at the Canada Border Services Agency.',
  },
  tabs: [
    {
      name: 'Summary',
      render: () => <SummaryTabCustom />,
    },
    {
      name: 'Scope of work',
      render: () => <ScopeTabCustom />,
    },
    {
      name: 'Contributions',
      render: () => <ContributionsTabCustom />,
    },
    {
      name: 'Deliverables',
      render: () => <ResultTabCustom />,
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
