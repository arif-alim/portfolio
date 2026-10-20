import { ArtifactGallery } from '@/components/portfolio/case-study'
import {
  mastheadArtifact,
  registrationArtifactGroups,
} from '@/data/serviceOntarioArtifacts'
import { ServiceOntarioPrototypes } from './ServiceOntarioPrototypes'

export function ServiceOntarioOverview() {
  return (
    <article className="space-y-7">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
          Government service design
        </p>
        <h2 className="text-xl font-semibold">
          Designing the Digital Dealership Registration interface
        </h2>
        <p>
          Digital Dealership Registration (DDR) is a ServiceOntario initiative
          focused on the automotive dealership registration process. My work
          connected interface design, user needs and technical requirements.
        </p>
        <dl className="grid grid-cols-1 gap-4 border-y border-zinc-200 py-4 text-xs dark:border-zinc-700 sm:grid-cols-3">
          {[
            ['Role', 'Senior UI Architect'],
            ['Focus', 'Automotive dealership registration'],
            ['Deliverables', 'Wireframes and clickable prototypes'],
          ].map(([title, text]) => (
            <div key={title}>
              <dt className="font-semibold">{title}</dt>
              <dd className="mt-1">{text}</dd>
            </div>
          ))}
        </dl>
      </header>
      <div className="max-w-3xl space-y-7">
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">The design challenge</h3>
          <p>
            The project required interface decisions that aligned dealership
            registration needs with project requirements. The published designs
            show registration information, verification, payment, receipts and
            permit-related states; they are design artifacts rather than
            evidence of a complete production journey.
          </p>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">My contribution</h3>
          <p>
            As a Senior UI Architect, I created wireframes and clickable
            prototypes to guide development of the DDR platform. I worked with
            developers, product managers and stakeholders to align the designs
            with user needs and project requirements.
          </p>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">
            Approach and documented outputs
          </h3>
          <p>
            Prototyping, collaboration and usability testing supported revisions
            to the interface. The case study preserves the original published
            screens and external prototypes. The separate interactive
            demonstration illustrates UX principles locally; it is not the
            original government application.
          </p>
        </section>
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Outcomes and evidence</h3>
          <p>
            The documented outputs are wireframes, clickable prototypes and
            design revisions informed by user feedback. No verified
            transaction-time, adoption or business-impact metrics are available
            here, and usability findings are not reconstructed from the
            screenshots.
          </p>
        </section>
      </div>
      <ArtifactGallery
        title="Project masthead"
        description="Original ServiceOntario project artwork, retained as published. Open the viewer to inspect the source at its original resolution."
        artifacts={mastheadArtifact}
      />
      <aside className="max-w-3xl space-y-2 border-t border-zinc-200 pt-5 text-sm dark:border-zinc-700">
        <h3 className="font-semibold">About ServiceOntario</h3>
        <p>
          ServiceOntario provides government services in Ontario, including
          driver and vehicle licensing. This project focused on Digital
          Dealership Registration.
        </p>
        <a
          href="https://www.ontario.ca/page/digital-dealership-registration-program"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 underline underline-offset-4 dark:text-blue-300"
        >
          Digital Dealership Registration program
        </a>
      </aside>
    </article>
  )
}

export function ServiceOntarioProcess() {
  return (
    <article className="max-w-3xl space-y-7">
      <header className="space-y-3">
        <h2 className="text-xl font-semibold">Design Process</h2>
        <p>
          The existing project record documents collaboration, wireframing,
          prototyping and usability testing. It does not establish research
          sample sizes, individual findings or a measured production outcome.
        </p>
      </header>
      {[
        [
          'Align interface decisions with requirements',
          'I worked with developers, product managers and stakeholders to align the designs with user needs and project requirements. This involved resolving interface design questions alongside technical requirements.',
        ],
        [
          'Make proposals tangible',
          'I created wireframes and clickable prototypes to guide development of the DDR platform. The original screens and prototype links remain available in Design Explorations, separate from the illustrative local demonstration.',
        ],
        [
          'Test and revise',
          'I conducted usability testing and incorporated user feedback into revisions of the DDR designs. The available notes do not identify specific test findings, so no new research results or before-and-after performance claims are added here.',
        ],
      ].map(([title, text]) => (
        <section
          key={title}
          className="space-y-2 border-t border-zinc-200 pt-5 dark:border-zinc-700"
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>{text}</p>
        </section>
      ))}
    </article>
  )
}

export function ServiceOntarioExplorations() {
  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3">
        <h2 className="text-xl font-semibold">Design Explorations</h2>
        <p>
          The 18 previously published screens retain their original source
          labels and three source groups. These groups preserve the former
          gallery columns, not a verified linear journey. Select any screen to
          enlarge it; the viewer offers compact navigation, original scale and
          full-resolution source access.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Original project artifacts are separate from the fictional records and
          illustrative rules in Interactive Demo. No additional unpublished
          assets have been introduced.
        </p>
      </header>
      {registrationArtifactGroups.map((group) => (
        <ArtifactGallery
          key={group.id}
          title={group.title}
          description="Original published registration and transaction-state artwork. Source numbers identify the existing images; they are not verified task steps. Tall previews show the top of the artwork; open the viewer for the complete screen."
          artifacts={group.artifacts}
        />
      ))}
      <section
        aria-label="Original prototypes"
        className="border-t border-zinc-200 pt-6 dark:border-zinc-700"
      >
        <ServiceOntarioPrototypes />
      </section>
    </div>
  )
}
