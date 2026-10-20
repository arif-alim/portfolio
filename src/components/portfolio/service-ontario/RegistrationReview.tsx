import { categories, type Registration } from '@/data/dealershipRegistration'
import styles from './Registration.module.css'
export function RegistrationReview({
  data,
  onEdit,
}: {
  data: Registration
  onEdit: (step: number) => void
}) {
  const vehicle: string[][] = [
    [
      'Registration category',
      categories.find((c) => c.value === data.category)?.label || '',
    ],
    ['VIN', data.vin.trim().toUpperCase()],
    ['Vehicle year', data.year],
    ['Vehicle make', data.make],
    ['Vehicle model', data.model],
    ...(data.category === 'used'
      ? [['Previous registration reference', data.previousRegistration]]
      : []),
    ...(data.category === 'commercial'
      ? [['Commercial use', data.commercialUse]]
      : []),
  ]
  const owner =
    data.ownership === 'individual'
      ? [
          ['Ownership', 'Individual'],
          ['Owner name', data.ownerName],
        ]
      : [
          ['Ownership', 'Business'],
          ['Business name', data.businessName],
          ['Business reference', data.businessReference],
        ]
  return (
    <div className="space-y-5">
      {[
        { rows: vehicle, label: 'Vehicle details', step: 0 },
        { rows: owner, label: 'Ownership details', step: 1 },
      ].map(({ rows, label, step }) => (
        <section key={label}>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-semibold">{label}</h4>
            <button
              type="button"
              onClick={() => onEdit(step)}
              className={styles.secondary}
            >
              Edit {label.toLowerCase()}
            </button>
          </div>
          <dl className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {rows.map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-2"
              >
                <dt className="text-zinc-600 dark:text-zinc-300">{key}</dt>
                <dd className="break-words font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
      <p className="text-xs">
        Demonstration eligibility acknowledged. This does not establish legal
        eligibility.
      </p>
    </div>
  )
}
