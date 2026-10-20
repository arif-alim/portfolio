import { ManulifeGallery } from './ManulifeGallery'
import {
  homeArtifacts,
  dashboardArtifacts,
  memberArtifacts,
  statusSequences,
  componentArtifacts,
  archiveArtifacts,
} from '@/data/manulifeArtifacts'
export function ManulifeExplorations() {
  return (
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3">
        <h2 className="text-xl font-semibold">Design Explorations</h2>
        <p>
          Original project artifacts, organized by the administrative task they
          support. Open an image to inspect it; every source file remains
          available at full resolution. Tall-screen previews show the top of the
          screen; open the viewer to inspect the complete artwork.
        </p>
      </header>
      <ManulifeGallery
        title="Plan Administrator Home"
        description="Desktop and mobile views from the MVP source show the home experience across screen sizes. Each view is framed separately rather than shrinking the combined canvas."
        artifacts={homeArtifacts}
      />
      <ManulifeGallery
        title="Dashboard & Navigation"
        description="Existing Power BI home concepts explore dashboard modules, member-search entry points and navigation. These are interface designs, not a live reporting integration."
        artifacts={dashboardArtifacts}
      />
      <ManulifeGallery
        title="Member Management"
        description="The available coverage-summary artifacts show member information, coverage details, tables and administrative actions. Search and filtering decisions are documented in Design Process; no separate search-screen artifact is invented here."
        artifacts={memberArtifacts}
      />
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Status Changes</h2>
        <p className="max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
          Inspect individual source frames for termination, leave and
          reinstatement. Frame captions retain the original workflow labels
          because the exact meaning of every state cannot be confirmed from
          filenames alone.
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
        description="The two existing datepicker artifacts preserve component exploration and state documentation. The second is a large component sheet; use original scale or the source link for detailed inspection."
        artifacts={componentArtifacts}
      />
      <details className="border-t border-zinc-200 pt-5 dark:border-zinc-700">
        <summary className="cursor-pointer py-2 font-semibold">
          Additional source artifacts · context not confirmed
        </summary>
        <div className="pt-4">
          <ManulifeGallery
            title="Source archive"
            description="home-future.png and status-update.png were present but not shown by the previous gallery. Their relationship to the named concepts and parental-leave sequence is unconfirmed, so they retain their filenames here rather than appearing as additional design milestones."
            artifacts={archiveArtifacts}
          />
        </div>
      </details>
    </div>
  )
}
