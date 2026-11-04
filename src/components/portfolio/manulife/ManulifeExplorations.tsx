import { ManulifeGallery } from './ManulifeGallery'
import {
  homeArtifacts,
  dashboardArtifacts,
  memberArtifacts,
  statusSequences,
  componentArtifacts,
  archiveArtifacts,
  wealthPrototypeArtifacts,
  bankPrototypeArtifacts,
} from '@/data/manulifeArtifacts'
export function ManulifeExplorations() {
  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3">
        <h2 className="text-xl font-semibold">Design Explorations</h2>
        <p>
          Explore the original Wealth and Bank portfolio prototypes, followed by
          designs from my Plan Administration work. Open any image to inspect
          it.
        </p>
      </header>
      <div id="explorations-wealth" tabIndex={-1} className="scroll-mt-5">
        <ManulifeGallery
          title="Manulife Wealth"
          description="Original prototype screens with fictional holdings and investment activity."
          artifacts={wealthPrototypeArtifacts}
          productReference={{
            label: 'Manulife Wealth Investor Portal',
            href: 'https://www.manulife.com/ca/en/personal/wealth/manulife-wealth/resources/ipresources',
          }}
        />
      </div>
      <div id="explorations-bank" tabIndex={-1} className="scroll-mt-5">
        <ManulifeGallery
          title="Manulife Bank"
          description="Original prototype screens showing the review and receipt for a simulated transfer."
          artifacts={bankPrototypeArtifacts}
          productReference={{
            label: 'Manulife Bank mobile banking',
            href: 'https://www.manulifebank.ca/support/mobile-banking.html',
          }}
        />
      </div>
      <section
        id="explorations-plan"
        tabIndex={-1}
        aria-labelledby="plan-administration-gallery"
        className="scroll-mt-5 space-y-8"
      >
        <h2 id="plan-administration-gallery" className="text-xl font-semibold">
          Plan Administration
        </h2>
        <ManulifeGallery
          title="Plan Administrator Home"
          description="I designed the first version of the administrator home for desktop and mobile."
          artifacts={homeArtifacts}
        />
        <ManulifeGallery
          title="Dashboard & Navigation"
          description="I explored where Power BI cards could sit alongside member search and navigation on the administrator home."
          artifacts={dashboardArtifacts}
        />
        <ManulifeGallery
          title="Member Management"
          description="I designed these coverage summaries to put member information, coverage details and administrative actions in one view."
          artifacts={memberArtifacts}
        />
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Status Changes</h2>
          <p className="max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
            I designed flows for ending coverage, recording leave and
            reinstating a member. Browse the screens for each change below.
          </p>
          {statusSequences.map((group) => (
            <ManulifeGallery
              key={group.id}
              title={group.title}
              description={group.description}
              artifacts={group.artifacts}
              sequence
            />
          ))}
        </div>
        <ManulifeGallery
          title="Reusable patterns · Datepicker"
          description="I explored a reusable datepicker and documented its states for consistent date entry across forms."
          artifacts={componentArtifacts}
        />
        <details className="border-t border-zinc-200 pt-5 dark:border-zinc-700">
          <summary className="cursor-pointer py-2 font-semibold">
            More design explorations
          </summary>
          <div className="pt-4">
            <ManulifeGallery
              title="Home and status updates"
              description="Additional layouts for the administrator home and member status updates."
              artifacts={archiveArtifacts}
            />
          </div>
        </details>
      </section>
    </div>
  )
}
