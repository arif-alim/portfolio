import { Screenshot } from '../Screenshot'

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

export function ManulifeWireframes() {
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
        <div
          key={idx}
          className="col-span-full lg:grid lg:grid-cols-12 lg:gap-x-4"
        >
          <div className="col-span-full mb-4 text-lg font-semibold">
            <h2>{section.title}</h2>
          </div>
          <div
            className={`flex gap-8 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8`}
          >
            {section.images.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className={section.columns === 1 ? 'w-full' : ''}
              >
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
export function ManulifeDesignSystem() {
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
