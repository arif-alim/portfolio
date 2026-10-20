import type { CaseStudyArtifact } from '@/components/portfolio/case-study'
import masthead from '@/images/projects/serviceontario/ServiceOntario.png'
import screen1 from '@/images/projects/serviceontario/ddr1.jpg'
import screen2 from '@/images/projects/serviceontario/ddr2.jpg'
import screen3 from '@/images/projects/serviceontario/ddr3.jpg'
import screen5 from '@/images/projects/serviceontario/ddr5.jpg'
import screen6 from '@/images/projects/serviceontario/ddr6.jpg'
import screen7 from '@/images/projects/serviceontario/ddr7.jpg'
import screen9 from '@/images/projects/serviceontario/ddr9.jpg'
import screen10 from '@/images/projects/serviceontario/ddr10.jpg'
import screen11 from '@/images/projects/serviceontario/ddr11.jpg'
import screen13 from '@/images/projects/serviceontario/ddr13.jpg'
import screen14 from '@/images/projects/serviceontario/ddr14.jpg'
import screen15 from '@/images/projects/serviceontario/ddr15.jpg'
import screen17 from '@/images/projects/serviceontario/ddr17.jpg'
import screen18 from '@/images/projects/serviceontario/ddr18.jpg'
import screen19 from '@/images/projects/serviceontario/ddr19.jpg'
import screen21 from '@/images/projects/serviceontario/ddr21.jpg'
import screen22 from '@/images/projects/serviceontario/ddr22.jpg'
import screen23 from '@/images/projects/serviceontario/ddr23.jpg'

// Preserve the three previously published columns and their original labels.
// These groups do not establish chronological transaction steps.
export const registrationArtifactGroups: {
  id: string
  title: string
  artifacts: CaseStudyArtifact[]
}[] = [
  {
    id: 'source-group-1',
    title: 'Registration screens · source group 1',
    artifacts: [
      { id: 'ddr1', label: 'Service Ontario screen 1', source: screen1 },
      { id: 'ddr5', label: 'Service Ontario screen 5', source: screen5 },
      { id: 'ddr9', label: 'Service Ontario screen 9', source: screen9 },
      { id: 'ddr13', label: 'Service Ontario screen 13', source: screen13 },
      { id: 'ddr17', label: 'Service Ontario screen 17', source: screen17 },
      { id: 'ddr21', label: 'Service Ontario screen 21', source: screen21 },
    ],
  },
  {
    id: 'source-group-2',
    title: 'Registration screens · source group 2',
    artifacts: [
      { id: 'ddr2', label: 'Service Ontario screen 2', source: screen2 },
      { id: 'ddr6', label: 'Service Ontario screen 6', source: screen6 },
      { id: 'ddr10', label: 'Service Ontario screen 10', source: screen10 },
      { id: 'ddr14', label: 'Service Ontario screen 14', source: screen14 },
      { id: 'ddr18', label: 'Service Ontario screen 18', source: screen18 },
      { id: 'ddr22', label: 'Service Ontario screen 22', source: screen22 },
    ],
  },
  {
    id: 'source-group-3',
    title: 'Registration screens · source group 3',
    artifacts: [
      { id: 'ddr3', label: 'Service Ontario screen 3', source: screen3 },
      { id: 'ddr7', label: 'Service Ontario screen 7', source: screen7 },
      { id: 'ddr11', label: 'Service Ontario screen 11', source: screen11 },
      { id: 'ddr15', label: 'Service Ontario screen 15', source: screen15 },
      { id: 'ddr19', label: 'Service Ontario screen 19', source: screen19 },
      { id: 'ddr23', label: 'Service Ontario screen 23', source: screen23 },
    ],
  },
]
export const mastheadArtifact: CaseStudyArtifact[] = [
  {
    id: 'service-ontario-masthead',
    label: 'Service Ontario Masthead',
    source: masthead,
  },
]
