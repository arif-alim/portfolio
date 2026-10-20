import type { StaticImageData } from 'next/image'

/** Source pixels; crops frame an existing composite without modifying its file. */
export interface CaseStudyArtifact {
  id: string
  label: string
  source: StaticImageData
  crop?: { x: number; y: number; width: number; height: number }
}

export type DesignDecision = readonly [title: string, explanation: string]
