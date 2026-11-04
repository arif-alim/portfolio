import { useState } from 'react'
import styles from './Manulife.module.css'

const accounts = [
  {
    name: 'Long-term investing',
    type: 'TFSA',
    holdings: [
      {
        name: 'Northline Equity Fund',
        units: 120,
        price: 62.5,
        type: 'Equity',
      },
      {
        name: 'Cedar Bond Fund',
        units: 80,
        price: 41.25,
        type: 'Fixed income',
      },
    ],
    activity: [
      ['Oct 23', 'Contribution', '+$500.00'],
      ['Oct 15', 'Fund distribution', '+$28.40'],
    ],
  },
  {
    name: 'Retirement savings',
    type: 'RRSP',
    holdings: [
      {
        name: 'Harbour Balanced Fund',
        units: 150,
        price: 48.6,
        type: 'Balanced',
      },
      {
        name: 'Meadow Income Fund',
        units: 90,
        price: 28.8,
        type: 'Fixed income',
      },
    ],
    activity: [
      ['Oct 28', 'Contribution', '+$250.00'],
      ['Oct 12', 'Fund distribution', '+$19.60'],
    ],
  },
]

const cad = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
})

export function WealthPrototype() {
  const [accountIndex, setAccountIndex] = useState(0)
  const [openHolding, setOpenHolding] = useState(null)
  const account = accounts[accountIndex]
  const value = account.holdings.reduce(
    (total, item) => total + item.units * item.price,
    0
  )

  return (
    <section
      aria-labelledby="wealth-prototype"
      className="space-y-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700 sm:p-6"
    >
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
            Illustrative portfolio prototype
          </p>
          <h2 id="wealth-prototype" className="mt-1 text-xl font-semibold">
            Manulife Wealth
          </h2>
          <p className="mt-1 text-sm">
            Explore fictional investments and activity. All data stays in this
            demo.
          </p>
        </div>
        <button
          type="button"
          className={styles.secondary}
          onClick={() => {
            setAccountIndex(0)
            setOpenHolding(null)
          }}
        >
          Reset demo
        </button>
      </header>
      <div className="grid gap-4 rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800 sm:grid-cols-2">
        <label className="font-semibold">
          Investment account
          <select
            className={styles.input}
            value={accountIndex}
            onChange={(event) => {
              setAccountIndex(Number(event.target.value))
              setOpenHolding(null)
            }}
          >
            {accounts.map(({ name, type }, index) => (
              <option key={name} value={index}>
                {name} · {type}
              </option>
            ))}
          </select>
        </label>
        <p role="status" className="self-center text-sm">
          Sample market value · CAD
          <strong className="block text-2xl tabular-nums">
            {cad.format(value)}
          </strong>
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <section
          aria-labelledby="wealth-holdings"
          className="min-w-0 space-y-2"
        >
          <h3 id="wealth-holdings" className="font-semibold">
            Holdings
          </h3>
          {account.holdings.map(({ name, type, price, units }, index) => (
            <details
              key={name}
              open={openHolding === name}
              className="rounded-lg border border-zinc-200 dark:border-zinc-700"
            >
              <summary
                className="min-h-[44px] cursor-pointer px-3 py-3 font-medium"
                onClick={(event) => {
                  event.preventDefault()
                  setOpenHolding(openHolding === name ? null : name)
                }}
              >
                {name}
                <span className="mt-1 block pl-4 text-sm tabular-nums">
                  {cad.format(units * price)}
                </span>
              </summary>
              <dl
                className="space-y-1 border-t border-zinc-200 p-3 text-sm dark:border-zinc-700"
                aria-label={`Holding ${index + 1} details`}
              >
                <div className="flex justify-between gap-2">
                  <dt>Asset class</dt>
                  <dd>{type}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Units held</dt>
                  <dd>{units}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Price per unit</dt>
                  <dd>{cad.format(price)}</dd>
                </div>
              </dl>
            </details>
          ))}
        </section>
        <section
          aria-labelledby="wealth-activity"
          className="min-w-0 space-y-2"
        >
          <h3 id="wealth-activity" className="font-semibold">
            Recent activity
          </h3>
          <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 dark:divide-zinc-700 dark:border-zinc-700">
            {account.activity.map(([date, activity, amount]) => (
              <li
                key={date}
                className="flex flex-wrap justify-between gap-2 p-3 text-sm"
              >
                <span>
                  {activity}
                  <span className="block text-xs text-zinc-600 dark:text-zinc-300">
                    {date} · Sample activity
                  </span>
                </span>
                <span className="font-medium tabular-nums">{amount}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
