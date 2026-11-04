import { useState } from 'react'
import { ManulifeDemo } from './ManulifeDemo'
import { WealthPrototype } from './WealthPrototype'
import { BankPrototype } from './BankPrototype'
import styles from './Manulife.module.css'

const demos = [
  { id: 'wealth', name: 'Manulife Wealth', Component: WealthPrototype },
  { id: 'bank', name: 'Manulife Bank', Component: BankPrototype },
  { id: 'plan', name: 'Plan Administration', Component: ManulifeDemo },
]

export function ManulifeInteractionDemos({ initialArea }) {
  const [selected, setSelected] = useState(() =>
    Math.max(
      0,
      demos.findIndex(({ id }) => id === initialArea)
    )
  )
  const { id, Component } = demos[selected]

  return (
    <div className={`${styles.root} space-y-5`}>
      <div
        role="group"
        aria-label="Choose a demo"
        className="grid grid-cols-1 gap-2 sm:grid-cols-3"
      >
        {demos.map(({ name }, index) => (
          <button
            key={name}
            type="button"
            aria-pressed={selected === index}
            className={`${styles.secondary} aria-pressed:border-blue-600 aria-pressed:bg-blue-50 aria-pressed:text-blue-900 dark:aria-pressed:border-blue-400 dark:aria-pressed:bg-blue-950 dark:aria-pressed:text-blue-100`}
            onClick={() => setSelected(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <div id={`demos-${id}`} tabIndex={-1} className="scroll-mt-5">
        <Component />
      </div>
    </div>
  )
}
