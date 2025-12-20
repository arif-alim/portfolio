import TableOfContents from '@/components/TableOfContents'
import Divider from '@/components/Divider'
import { PortfolioTemplate, Screenshot } from '@/components/portfolio'

// Wireframes
import wireframe1 from '@/images/projects/manulife/home-mvp.png'
import wireframe2 from '@/images/projects/manulife/home-future-1.png'
import wireframe3 from '@/images/projects/manulife/home-future-2.png'
import wireframe4 from '@/images/projects/manulife/coverage-summary-1.png'
import wireframe5 from '@/images/projects/manulife/coverage-summary-2.png'
import wireframe6 from '@/images/projects/manulife/status-terminate.png'
import wireframe7 from '@/images/projects/manulife/status-parental.png'
import wireframe8 from '@/images/projects/manulife/status-other.png'
import wireframe9 from '@/images/projects/manulife/reinstate-member.png'

// Design system
import component1 from '@/images/projects/manulife/datepicker-1.png'
import component2 from '@/images/projects/manulife/datepicker-2.png'

// Custom Summary Section
function SummarySectionCustom() {
  const responsibilities = [
    'Document detailed user experience specifications.',
    'Design user interfaces by applying the fundamental principles of user experience design, research experience, industry best practices and balancing those against system constraints and business objectives.',
    'Create and revise user flows, sitemaps and low and high-fidelity wireframes based on specifications, goals, needs and limitations.',
    'Develop rapid interactional UX prototypes; verify design assumptions through concept and usability testing.',
    'Lead design review sessions with project teams, acquiring consensus and approval on designs and documentation.',
    'Create final visual mockups against wireframes, in keeping with the company brand standards, UX guidelines and accessibility legislation (AODA/WCAG).',
    'Provide final design assets and documentation to the development team; liaise to ensure final output matches UX specifications and visual design.',
  ]

  const contributions = [
    "Collaborated with Product, Marketing, Business, and IS teams to gather comprehensive requirements for Manulife's Plan Administrator Site, translating into strategic UX redesigns that align with business objectives to enhance overall usability.",
    'Simplified the user journey by streamlining navigation flows, reducing steps to key destinations, and restructuring content hierarchy for improved access and user engagement.',
    "Coordinated and led UX design reviews, ensuring project alignment with business goals while adhering to Manulife's brand standards and accessibility requirements (AODA/WCAG).",
    "Developed clickable prototypes for usability testing on UserTesting.com and leveraged Google Analytics data to gather both qualitative and quantitative feedback, driving data-informed iterative improvements to enhance user experience and interface functionality for Manulife's Plan Administrator Site and Disability Portal.",
  ]

  return (
    <div className="flex flex-col lg:gap-x-8">
      <div className="col-span-full mb-4 text-lg font-semibold">
        <h2>Summary</h2>
      </div>
      <div className="max-w-3xl lg:mt-0">
        <p>
          Work with Product, Marketing, Business and IS teams to obtain and understand business, functional and technical requirements.
        </p>
        <ul className="list-disc pl-2 lg:pl-8">
          {responsibilities.map((item, idx) => (
            <li key={idx} className={idx === 0 ? 'mt-4' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-full my-4 text-lg font-semibold lg:mt-8">
        <h2>Contributions</h2>
      </div>
      <div className="max-w-3xl lg:mt-0">
        <ul className="list-disc pl-2 lg:pl-8">
          {contributions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Custom Wireframes Section
function WireframesSectionCustom() {
  const sections = [
    {
      title: 'Plan Administrator Home (MVP)',
      images: [wireframe1],
      columns: 1,
    },
    {
      title: 'Plan Administrator Home (PowerBi)',
      images: [wireframe2, wireframe3],
      columns: 2,
    },
    {
      title: 'Coverage summary',
      images: [wireframe4, wireframe5],
      columns: 2,
    },
    {
      title: 'Status Update (Terminate a member)',
      images: [wireframe6],
      columns: 1,
    },
    {
      title: 'Status Update (Parental leave)',
      images: [wireframe7],
      columns: 1,
    },
    {
      title: 'Status Update (Other leave)',
      images: [wireframe8],
      columns: 1,
    },
    {
      title: 'Reinstate a member',
      images: [wireframe9],
      columns: 1,
    },
  ]

  return (
    <div className="flex flex-col gap-y-16">
      {sections.map((section, idx) => (
        <div key={idx} className="col-span-full lg:grid lg:grid-cols-12 lg:gap-x-4">
          <div className="col-span-full mb-4 text-lg font-semibold">
            <h2>{section.title}</h2>
          </div>
          <div
            className={`flex gap-8 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8`}
          >
            {section.images.map((img, imgIdx) => (
              <div key={imgIdx} className={section.columns === 1 ? 'w-full' : ''}>
                <Screenshot src={img} alt={section.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// Custom Design System Section
function DesignSystemSectionCustom() {
  return (
    <div className="flex flex-col gap-y-16">
      <div className="col-span-full gap-y-4 lg:grid lg:grid-cols-12 lg:gap-x-4">
        <div className="col-span-full mb-4 text-lg font-semibold">
          <h2>Datepicker</h2>
        </div>
        <div className="flex gap-8 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8">
          <Screenshot src={component1} alt="Datepicker component 1" />
        </div>
        <div className="flex gap-8 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8">
          <Screenshot src={component2} alt="Datepicker component 2" />
        </div>
      </div>
    </div>
  )
}

// Custom Case Study Section with TableOfContents
function CaseStudySectionCustom() {
  return (
    <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
      {/* LEFT SIDEBAR — TOC */}
      <aside className="hidden lg:block">
        <TableOfContents contentId="manulife-case-study-content" />
      </aside>

      {/* RIGHT SIDE — CASE STUDY CONTENT */}
      <main id="manulife-case-study-content">
        <h2
          id="overview"
          className="pb-1 pt-4 text-lg font-semibold text-black dark:text-white"
        >
          01. Overview
        </h2>
        <p>
          Manulife provides group health benefits to enterprises across Canada. Plan Administrators (typically HR professionals) handle employee enrollment, updates, policy changes, billing, and compliance — but their legacy tools were fragmented, unintuitive, and time-consuming.
        </p>
        <p className="pt-4">
          This case study outlines how I redesigned the Plan Administrator Portal to deliver:
        </p>
        <ul className="list-disc pl-2 lg:pl-8">
          <li className="pt-2">
            <strong>Simplified workflows</strong> for daily administrative tasks
          </li>
          <li>
            <strong>Clear dashboards</strong> powered by Power BI for data-driven decisions
          </li>
          <li>
            <strong>Modern UI</strong> consistent with Manulife&apos;s design system
          </li>
          <li>
            <strong>A unified experience</strong> for both administrators and employees
          </li>
        </ul>
        <p className="pt-4">
          The result is a scalable, accessible, and future-ready portal for enterprise benefits management.
        </p>

        <Divider />

        <h2
          id="problem"
          className="pb-1 pt-4 text-lg font-semibold text-black dark:text-white"
        >
          02. The Problem
        </h2>
        <p>
          Through heuristic evaluation, stakeholder interviews, and workflow audits, several critical issues emerged:
        </p>

        <h3
          id="app"
          className="pb-1 pt-4 font-semibold text-black dark:text-white"
        >
          Admin Pain Points
        </h3>
        <ul className="list-disc pl-2 lg:pl-8">
          <li>Member search required too many inputs and produced inconsistent results</li>
          <li>High dependency on email and spreadsheets for updates</li>
          <li>No centralized dashboard showing plan trends, activity, or tasks</li>
          <li>Reporting required manually exporting data</li>
          <li>No standardized UI components across pages</li>
          <li>Time-consuming multi-step tasks (add members, update certificates, manage terminated employees)</li>
        </ul>

        <h3
          id="epp"
          className="pb-1 pt-4 font-semibold text-black dark:text-white"
        >
          Employee Pain Points
        </h3>
        <ul className="list-disc pl-2 lg:pl-8">
          <li>Confusing benefit structures</li>
          <li>No unified place to view claims, balances, or eligibility</li>
          <li>Enrollment lacked guidance and transparency</li>
        </ul>

        <h3
          id="bpp"
          className="pb-1 pt-4 font-semibold text-black dark:text-white"
        >
          Business Pain Points
        </h3>
        <ul className="list-disc pl-2 lg:pl-8">
          <li>Support centers received high call volume</li>
          <li>No way to surface trends or risks in real time</li>
          <li>Fragmented systems increased training time for HR teams</li>
        </ul>

        <Divider />

        <h2
          id="goals"
          className="pb-1 pt-4 text-lg font-semibold text-black dark:text-white"
        >
          03. Project Goals
        </h2>

        <h3
          id="egoals"
          className="pb-1 pt-4 font-semibold text-black dark:text-white"
        >
          Experience Goals
        </h3>
        <ul className="list-disc pl-2 lg:pl-8">
          <li>Simplify navigation and reduce cognitive load</li>
          <li>Provide clear end-to-end workflows for admins</li>
          <li>Improve employee understanding of their benefits</li>
          <li>Enable self-serve tools for HR teams and employees</li>
        </ul>

        <h3
          id="bgoals"
          className="pb-1 pt-4 font-semibold text-black dark:text-white"
        >
          Business Goals
        </h3>
        <ul className="list-disc pl-2 lg:pl-8">
          <li>Lower support costs</li>
          <li>Increase efficiency of plan-management tasks</li>
          <li>Provide data visualization via Power BI for deeper insights</li>
          <li>Improve user satisfaction and platform adoption</li>
        </ul>

        <Divider />

        <h2
          id="research"
          className="pb-1 pt-4 text-lg font-semibold text-black dark:text-white"
        >
          04. Research & Discovery
        </h2>

        <h3
          id="methods"
          className="py-1 text-md font-semibold text-black dark:text-white lg:pl-4"
        >
          Methods Used
        </h3>
        <ul className="list-disc pl-2 lg:pl-8">
          <li>Stakeholder interviews (Ops, HR, Support, Sales)</li>
          <li>Competitive analysis (Sun Life, Canada Life, Workday, Benepass)</li>
          <li>Legacy system audit</li>
          <li>Workflow mapping (current vs. optimized)</li>
          <li>Data requirements workshops for Power BI integration</li>
        </ul>

        <h3
          id="insights"
          className="py-1 pt-3 text-md font-semibold text-black dark:text-white lg:pl-4"
        >
          Key Insights
        </h3>
        <ol className="list-disc pl-2 lg:pl-8">
          <li>
            <strong>Admins spend 60–70% of their time searching or verifying member info.</strong>
          </li>
          <li>
            <strong>Most errors occur due to unclear field hierarchy</strong> (Client → Policy → Member → Plan).
          </li>
          <li>
            <strong>Admins rely on external spreadsheets</strong> to track plan activity, resulting in outdated and inconsistent data.
          </li>
          <li>
            <strong>Dashboards must provide meaning, not just charts</strong> — actionable insights are essential.
          </li>
          <li>
            <strong>Complex organizations need bulk actions</strong>, filtered lists, and high-performance search.
          </li>
        </ol>
        <p className="pt-4">These insights guided the redesign strategy.</p>

        <Divider />

        <h2
          id="approach"
          className="pb-1 pt-4 text-lg font-semibold text-black dark:text-white"
        >
          05. UX Approach
        </h2>

        <h3
          id="ia"
          className="py-1 text-md font-semibold text-black dark:text-white lg:pl-4"
        >
          Information Architecture Redesign
        </h3>
        <div className="pl-4">
          Home
          <br />→ Dashboard (Power BI) <br /> → Member Search <br /> → Manage Members <br /> → Billing & Statements <br /> → Documents <br />
          → Send a Note <br /> → Help & Resources
          <p className="pt-4">This ensured:</p>
          <ul className="list-disc pl-2 lg:pl-4">
            <li>fewer clicks</li>
            <li>clearer structure</li>
            <li>consistent paths across tasks</li>
          </ul>
        </div>

        <h3
          id="powerbi"
          className="py-1 pt-4 text-md font-semibold text-black dark:text-white lg:pl-4"
        >
          Power BI Integration
        </h3>
        <div className="pl-4">
          <p>
            This was one of the largest parts of the redesign. Admins needed <strong>actionable insights</strong> not raw data.
          </p>
          <p className="pt-2 font-semibold">Power BI cards integrated directly into the UI</p>
          <ul className="list-disc pl-2 lg:pl-4">
            <li>Recent activity</li>
            <li>Plan utilization</li>
            <li>Enrollment trends</li>
            <li>Member movement logs (additions, terminations, class changes)</li>
            <li>Billing discrepancies</li>
            <li>Missing-document alerts</li>
          </ul>
        </div>

        <h3
          id="considerations"
          className="py-1 pt-4 text-md font-semibold text-black dark:text-white lg:pl-4"
        >
          Design Considerations
        </h3>
        <div className="pl-4">
          <ul className="list-disc pl-2 lg:pl-4">
            <li>Charts must align visually with Manulife&apos;s DS</li>
            <li>Tiles are embeddable, scalable modules</li>
            <li>Each chart supports drill-down</li>
            <li>Accessible color palette</li>
            <li>Clear labeling and tooltips</li>
            <li>Avoid overloading users with &quot;chart clutter&quot;</li>
          </ul>
          <p className="pt-4">
            <strong>UX Outcome</strong>
            <br />
            Admins now see issues before they become problems.
          </p>
          <p className="pt-4">
            Example:
            <br />
            Instead of exporting spreadsheets weekly, an HR admin sees:
          </p>
          <p className="pt-4">
            ❗ 12 employees missing certification documents
            <br />❗ 4 terminated members still being billed
            <br />✔ 89% plan utilization this quarter
          </p>
          <p className="pt-4">
            These insights appear immediately on the dashboard — without needing Power BI training.
          </p>
        </div>

        <h3
          id="search"
          className="py-1 pt-4 text-md font-semibold text-black dark:text-white lg:pl-4"
        >
          Member Search Redesign
        </h3>
        <div className="pl-4">
          <p>The wireframes tab reflect these improvements:</p>
          <ul className="list-disc pl-2 pt-4 lg:pl-4">
            <li>Single multi-purpose search bar</li>
            <li>Optional filters (Location, Class, Plan)</li>
            <li>Auto-complete suggestions</li>
            <li>&quot;Include terminated members&quot; toggle</li>
            <li>Cleaner layout with consistent spacing</li>
            <li>Accessible labels, improved hierarchy</li>
          </ul>
          <p className="pt-4">Result: search times decreased significantly.</p>
        </div>
      </main>
    </div>
  )
}

const projectData = {
  layout: {
    title: 'Manulife',
    intro: 'Streamlined the user interface for the Plan Administrator and Disability portal to enhance user experience.',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      render: () => <SummarySectionCustom />,
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About',
        paragraphs: [
          'Manulife is a leading international financial services group that helps people make their decisions easier and lives better. We operate primarily as John Hancock in the United States and Manulife elsewhere. We provide financial advice, insurance, as well as wealth and asset management solutions for individuals, groups and institutions.',
        ],
        link: 'https://www.manulife.ca/personal.html',
      },
    },
    {
      name: 'Wireframes',
      render: () => <WireframesSectionCustom />,
    },
    {
      name: 'Design system',
      render: () => <DesignSystemSectionCustom />,
    },
    {
      name: 'Case Study',
      render: () => <CaseStudySectionCustom />,
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
