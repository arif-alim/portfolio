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
          secure, user-focused solutions that meet the stringent requirements of
          government services.
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
          seamlessly integrated complex backend data with an intuitive front-end
          design. The goal was to create a scalable, efficient, and visually
          cohesive interface that simplified development workflows while
          enhancing the user experience.
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
        'The design leveraged a single card component, which could be replicated for each object in the array, ensuring scalability and consistency across the interface.',
      ],
    },
    {
      title: 'Simplifying Development Through Design:',
      items: [
        'The card-based layout minimized the complexity of the development process by standardizing how data was displayed. This approach eliminated the need for developers to create multiple components for different data scenarios, reducing both development time and potential errors.',
        'Dynamic data-binding principles were incorporated, allowing the card design to automatically populate with data from the JSON object, ensuring seamless integration between the front-end and back-end.',
      ],
    },
    {
      title: 'User-Centered Enhancements:',
      items: [
        'The card design not only simplified development but also improved usability by presenting information in a clear, organized format that users could easily interact with and understand.',
        'The modular nature of the design ensured that future API changes or additional data fields could be accommodated without disrupting the user experience.',
      ],
    },
  ]

  const summaryItems = [
    'Efficiency Gains: Reduced development time by creating a reusable and dynamic component that adapts to incoming data.',
    'Scalability: Enabled the interface to handle large and variable data sets without requiring significant redesign or additional development effort.',
    'Enhanced Usability: Delivered a streamlined user interface that presented complex data in a visually clear and accessible manner.',
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
        <h3 className="mb-2 text-md font-semibold">Impact</h3>
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
    'Efficiency Gains: Reduced development time by creating a reusable and dynamic component that adapts to incoming data.',
    'Scalability: Enabled the interface to handle large and variable data sets without requiring significant redesign or additional development effort.',
    'Enhanced Usability: Delivered a streamlined user interface that presented complex data in a visually clear and accessible manner.',
  ]

  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      <h2 className="mb-4 text-lg font-semibold">Outcomes</h2>
      <ul className="ml-6 list-inside list-disc space-y-2">
        {items.map((item, iIdx) => (
          <li key={iIdx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const projectData = {
  layout: {
    title: 'CBSA',
    intro:
      'Streamlined the user interface for the Plan Administrator and Disability portal to enhance user experience.',
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
      name: 'Result',
      render: () => <ResultTabCustom />,
    },
    {
      name: 'Case Study',
      render: () => (
        <div className="mt-6 max-w-2xl lg:col-span-5 lg:mt-0">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Coming Soon...
          </h3>
        </div>
      ),
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
