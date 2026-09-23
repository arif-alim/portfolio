import TableOfContents from '@/components/TableOfContents'
import Divider from '@/components/Divider'

export function ManulifeCaseStudy() {
  return (
    <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
      {/* LEFT SIDEBAR — TOC */}
      <aside className="hidden lg:block">
        <TableOfContents contentId="manulife-case-study-content" />
      </aside>

      {/* RIGHT SIDE — CASE STUDY CONTENT */}
      <div id="manulife-case-study-content">
        <h2
          id="overview"
          className="pb-1 pt-4 text-lg font-semibold text-black dark:text-white"
        >
          01. Overview
        </h2>
        <p>
          Manulife provides group health benefits to enterprises across Canada.
          Plan Administrators (typically HR professionals) handle employee
          enrollment, updates, policy changes, billing, and compliance — but
          their legacy tools were fragmented, unintuitive, and time-consuming.
        </p>
        <p className="pt-4">
          This case study outlines how I redesigned the Plan Administrator
          Portal, focusing on:
        </p>
        <ul className="list-disc pl-2 lg:pl-8">
          <li className="pt-2">
            <strong>Simplified workflows</strong> for daily administrative tasks
          </li>
          <li>
            <strong>Clear dashboards</strong> powered by Power BI for
            data-driven decisions
          </li>
          <li>
            <strong>Modern UI</strong> consistent with Manulife&apos;s design
            system
          </li>
          <li>
            <strong>A unified experience</strong> for both administrators and
            employees
          </li>
        </ul>
        <p className="pt-4">
          The work covered enterprise benefits management workflows and
          interface patterns.
        </p>

        <Divider />

        <h2
          id="problem"
          className="pb-1 pt-4 text-lg font-semibold text-black dark:text-white"
        >
          02. The Problem
        </h2>
        <p>
          Through heuristic evaluation, stakeholder interviews, and workflow
          audits, several critical issues emerged:
        </p>

        <h3
          id="app"
          className="pb-1 pt-4 font-semibold text-black dark:text-white"
        >
          Admin Pain Points
        </h3>
        <ul className="list-disc pl-2 lg:pl-8">
          <li>
            Member search required too many inputs and produced inconsistent
            results
          </li>
          <li>High dependency on email and spreadsheets for updates</li>
          <li>
            No centralized dashboard showing plan trends, activity, or tasks
          </li>
          <li>Reporting required manually exporting data</li>
          <li>No standardized UI components across pages</li>
          <li>
            Time-consuming multi-step tasks (add members, update certificates,
            manage terminated employees)
          </li>
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
          <li>Support requests were part of the service workflow</li>
          <li>No way to surface trends or risks in real time</li>
          <li>HR teams worked across fragmented systems</li>
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
          <li>
            Competitive analysis (Sun Life, Canada Life, Workday, Benepass)
          </li>
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
            <strong>
              Member search and verification were priorities for the redesign.
            </strong>
          </li>
          <li>
            <strong>Field hierarchy needed clarification</strong> (Client →
            Policy → Member → Plan).
          </li>
          <li>
            <strong>Admins rely on external spreadsheets</strong> to track plan
            activity alongside the portal.
          </li>
          <li>
            <strong>Dashboards must provide meaning, not just charts</strong> —
            actionable insights are essential.
          </li>
          <li>
            <strong>Complex organizations need bulk actions</strong>, filtered
            lists, and high-performance search.
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
          <br />→ Dashboard (Power BI) <br /> → Member Search <br /> → Manage
          Members <br /> → Billing & Statements <br /> → Documents <br />
          → Send a Note <br /> → Help & Resources
          <p className="pt-4">The structure was designed to support:</p>
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
            This was one of the largest parts of the redesign. Admins needed{' '}
            <strong>actionable insights</strong> not raw data.
          </p>
          <p className="pt-2 font-semibold">
            Power BI cards integrated directly into the UI
          </p>
          <ul className="list-disc pl-2 lg:pl-4">
            <li>Recent activity</li>
            <li>Plan utilization</li>
            <li>Enrollment trends</li>
            <li>
              Member movement logs (additions, terminations, class changes)
            </li>
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
            <li>Color contrast</li>
            <li>Clear labeling and tooltips</li>
            <li>Avoid overloading users with &quot;chart clutter&quot;</li>
          </ul>
          <p className="pt-4">
            <strong>Design Intent</strong>
            <br />
            Surface administrative issues within the dashboard.
          </p>
          <p className="pt-4">
            Example dashboard messages (illustrative, not measured business
            results):
          </p>
          <p className="pt-4">
            ❗ Missing certification documents
            <br />❗ Terminated members still being billed
            <br />✔ Plan utilization this quarter
          </p>
          <p className="pt-4">
            These examples describe the information the dashboard was designed
            to surface.
          </p>
        </div>

        <h3
          id="search"
          className="py-1 pt-4 text-md font-semibold text-black dark:text-white lg:pl-4"
        >
          Member Search Redesign
        </h3>
        <div className="pl-4">
          <p>The Wireframes tab shows the search interface designs:</p>
          <ul className="list-disc pl-2 pt-4 lg:pl-4">
            <li>Single multi-purpose search bar</li>
            <li>Optional filters (Location, Class, Plan)</li>
            <li>Auto-complete suggestions</li>
            <li>&quot;Include terminated members&quot; toggle</li>
            <li>Cleaner layout with consistent spacing</li>
            <li>Labels and field hierarchy</li>
          </ul>
          <p className="pt-4">
            The design brings member search and optional filters into one
            interface.
          </p>
        </div>
      </div>
    </div>
  )
}
