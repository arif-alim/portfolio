import type { CaseStudyArtifact } from '@/components/portfolio/case-study/types'
import type { StaticImageData } from 'next/image'
import home from '@/images/projects/manulife/home-mvp.png'
import future1 from '@/images/projects/manulife/home-future-1.png'
import future2 from '@/images/projects/manulife/home-future-2.png'
import futureArchive from '@/images/projects/manulife/home-future.png'
import coverage1 from '@/images/projects/manulife/coverage-summary-1.png'
import coverage2 from '@/images/projects/manulife/coverage-summary-2.png'
import terminate from '@/images/projects/manulife/status-terminate.png'
import parental from '@/images/projects/manulife/status-parental.png'
import other from '@/images/projects/manulife/status-other.png'
import reinstate from '@/images/projects/manulife/reinstate-member.png'
import statusArchive from '@/images/projects/manulife/status-update.png'
import datepicker1 from '@/images/projects/manulife/datepicker-1.png'
import datepicker2 from '@/images/projects/manulife/datepicker-2.png'
import wealthOverview from '@/images/projects/manulife/prototype-wealth-overview.png'
import wealthHolding from '@/images/projects/manulife/prototype-wealth-holding.png'
import bankReview from '@/images/projects/manulife/prototype-bank-review.png'
import bankComplete from '@/images/projects/manulife/prototype-bank-complete.png'
export type Artifact = CaseStudyArtifact

function frames(
  source: StaticImageData,
  label: string,
  heights: number[]
): Artifact[] {
  return heights.map((height, i) => ({
    id: `${label}-${i}`,
    label: `${label} — frame ${i + 1}`,
    source,
    crop: { x: i * 1590, y: 0, width: 1440, height },
  }))
}
export const homeArtifacts: Artifact[] = [
  {
    id: 'home-desktop',
    label: 'Plan Administrator Home (MVP) — desktop',
    source: home,
    crop: { x: 0, y: 0, width: 1440, height: 2461 },
  },
  {
    id: 'home-mobile',
    label: 'Plan Administrator Home (MVP) — mobile',
    source: home,
    crop: { x: 1540, y: 0, width: 375, height: 3687 },
  },
]
export const dashboardArtifacts: Artifact[] = [
  {
    id: 'home-powerbi-1',
    label: 'Plan Administrator Home (Power BI) — concept 1',
    source: future1,
  },
  {
    id: 'home-powerbi-2',
    label: 'Plan Administrator Home (Power BI) — concept 2',
    source: future2,
  },
]
export const memberArtifacts: Artifact[] = [
  { id: 'coverage-1', label: 'Coverage summary — design 1', source: coverage1 },
  { id: 'coverage-2', label: 'Coverage summary — design 2', source: coverage2 },
]
const parentalBoxes = [
  [0, 1440, 1139],
  [1540, 375, 1477],
  [2065, 1440, 1139],
  [3605, 375, 1477],
  [4130, 1440, 1277],
  [5670, 375, 1945],
  [6195, 1440, 1257],
  [7735, 375, 1945],
  [8260, 1440, 1233],
  [9800, 375, 1765],
  [10325, 1440, 1257],
  [11865, 375, 1945],
  [12390, 1440, 1185],
  [13930, 375, 1717],
]
export const statusSequences = [
  {
    id: 'termination',
    title: 'Member termination',
    description: 'Screens from the flow for ending a member’s coverage.',
    artifacts: frames(
      terminate,
      'Status Update (Terminate a member)',
      [1174, 1174, 1174, 1174, 1174]
    ),
  },
  {
    id: 'parental',
    title: 'Parental leave',
    description: 'Desktop and mobile views of the parental leave workflow.',
    artifacts: parentalBoxes.map(
      ([x, width, height], i): Artifact => ({
        id: `parental-${i}`,
        label: `Status Update (Parental leave) — pair ${
          Math.floor(i / 2) + 1
        }, ${i % 2 ? 'mobile' : 'desktop'}`,
        source: parental,
        crop: { x, y: 0, width, height },
      })
    ),
  },
  {
    id: 'other-leave',
    title: 'Other leave',
    description:
      'Screens from the workflow for recording other types of leave.',
    artifacts: frames(
      other,
      'Status Update (Other leave)',
      [1139, 1139, 1265, 1257, 1257, 1245, 1257, 1205]
    ),
  },
  {
    id: 'reinstate',
    title: 'Reinstate a member',
    description: 'Screens from the workflow for reinstating a member.',
    artifacts: frames(
      reinstate,
      'Reinstate a member',
      [1175, 1175, 1175, 1205, 1205]
    ),
  },
]
export const componentArtifacts: Artifact[] = [
  { id: 'datepicker-1', label: 'Datepicker component 1', source: datepicker1 },
  { id: 'datepicker-2', label: 'Datepicker component 2', source: datepicker2 },
]
export const archiveArtifacts: Artifact[] = [
  {
    id: 'home-future-archive',
    label: 'Plan Administrator Home — additional layout',
    source: futureArchive,
  },
  {
    id: 'status-update-archive',
    label: 'Member status updates — additional screens',
    source: statusArchive,
  },
]

export const wealthPrototypeArtifacts: Artifact[] = [
  {
    id: 'prototype-wealth-overview',
    label: 'Investment account overview',
    alt: 'Fictional investment account with sample market value, two holdings and recent activity',
    source: wealthOverview,
    caption: 'Portfolio prototype screenshot',
  },
  {
    id: 'prototype-wealth-holding',
    label: 'Holding details',
    alt: 'Fictional retirement account with Harbour Balanced Fund expanded to show asset class, units and price',
    source: wealthHolding,
    caption: 'Portfolio prototype screenshot',
  },
]

export const bankPrototypeArtifacts: Artifact[] = [
  {
    id: 'prototype-bank-review',
    label: 'Transfer review',
    alt: 'Simulated transfer review showing the source account, destination and a CAD $125.50 amount before confirmation',
    source: bankReview,
    caption: 'Portfolio prototype screenshot',
  },
  {
    id: 'prototype-bank-complete',
    label: 'Transfer receipt',
    alt: 'Simulated transfer receipt and updated balances for the fictional everyday and savings accounts',
    source: bankComplete,
    caption: 'Portfolio prototype screenshot',
  },
]
