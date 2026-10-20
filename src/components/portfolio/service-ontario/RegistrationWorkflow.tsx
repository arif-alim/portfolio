import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  categories,
  emptyRegistration,
  sampleRegistration,
  steps,
  validateRegistration,
  type Registration,
  type Errors,
  type FieldName,
} from '@/data/dealershipRegistration'
import { RegistrationField } from './RegistrationField'
import { RegistrationReview } from './RegistrationReview'
import styles from './Registration.module.css'
export function RegistrationWorkflow() {
  const [data, setData] = useState<Registration>({ ...emptyRegistration })
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<Errors>({})
  const [confirmed, setConfirmed] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const errorSummary = useRef<HTMLDivElement>(null)
  const previousStep = useRef(0)
  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus()
    previousStep.current = step
  }, [step])
  useEffect(() => {
    if (Object.keys(errors).length) errorSummary.current?.focus()
  }, [errors])
  function update<K extends FieldName>(key: K, value: Registration[K]) {
    setData((current) => ({ ...current, [key]: value }))
    setConfirmed(false)
    if (key === 'category' || key === 'ownership') setErrors({})
  }
  function goTo(next: number) {
    setErrors({})
    setStep(next)
  }
  function submit(event: FormEvent) {
    event.preventDefault()
    const nextErrors = validateRegistration(data, step, confirmed)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    goTo(step + 1)
  }
  function reset() {
    setData({ ...emptyRegistration })
    setConfirmed(false)
    goTo(0)
  }
  function field(
    name: FieldName,
    label: string,
    help?: string,
    numeric = false
  ) {
    return (
      <RegistrationField
        name={name}
        label={label}
        value={String(data[name])}
        help={help}
        error={errors[name]}
        inputMode={numeric ? 'numeric' : 'text'}
        onChange={(value) => update(name, value)}
      />
    )
  }
  return (
    <div className={styles.root}>
      <ol
        aria-label="Registration progress"
        className="mb-5 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3"
      >
        {steps.map((label, i) => (
          <li
            key={label}
            aria-current={step === i ? 'step' : undefined}
            className={`rounded-lg border p-3 ${
              step === i
                ? 'border-blue-600 bg-blue-50 text-blue-900 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-100'
                : 'border-zinc-200 dark:border-zinc-700'
            }`}
          >
            <span className="font-semibold">
              {i + 1}. {label}
            </span>
            {step > i && <span className="block">Complete</span>}
          </li>
        ))}
      </ol>
      <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700 sm:p-6">
        <h3 ref={heading} tabIndex={-1} className="mb-4 text-lg font-semibold">
          {step === 3
            ? 'Demonstration complete'
            : `Step ${step + 1} — ${steps[step]}`}
        </h3>
        {step === 3 ? (
          <div className="space-y-4">
            <p role="status">
              Your fictional registration record has completed the simulated
              submission. Nothing was sent or saved.
            </p>
            <p>
              This is not a registration, permit or government confirmation. In
              a real service, the next steps would explain processing and any
              outstanding tasks.
            </p>
            <button type="button" onClick={reset} className={styles.primary}>
              Start a new demonstration
            </button>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={submit}
            aria-label="Illustrative dealership registration"
          >
            {Object.keys(errors).length > 0 && (
              <div
                ref={errorSummary}
                tabIndex={-1}
                aria-labelledby="ddr-errors-heading"
                className="mb-5 rounded-lg border border-red-700 p-4 dark:border-red-300"
              >
                <h4 id="ddr-errors-heading" className="font-semibold">
                  Check the information below
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {Object.entries(errors).map(([key, message]) => (
                    <li key={key}>
                      <a
                        className="underline underline-offset-2"
                        href={`#ddr-${key}`}
                        onClick={(event) => {
                          event.preventDefault()
                          document.getElementById(`ddr-${key}`)?.focus()
                        }}
                      >
                        {message}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-5">
              {step === 0 && (
                <>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    All displayed fields are required. Use fictional information
                    only. These simplified rules are demonstration choices, not
                    government requirements.
                  </p>
                  <button
                    type="button"
                    className={styles.secondary}
                    onClick={() => {
                      setData({
                        ...sampleRegistration,
                        category: data.category,
                        ownership: data.ownership,
                      })
                      setErrors({})
                      setConfirmed(false)
                    }}
                  >
                    Use fictional sample data
                  </button>
                  <fieldset>
                    <legend className="font-semibold">
                      Registration category (required)
                    </legend>
                    <div className="mt-2 flex flex-wrap gap-x-5">
                      {categories.map((category) => (
                        <label key={category.value} className={styles.choice}>
                          <input
                            type="radio"
                            name="category"
                            value={category.value}
                            checked={data.category === category.value}
                            onChange={() => update('category', category.value)}
                            required
                          />
                          {category.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {field(
                      'vin',
                      'Vehicle identification number (VIN)',
                      'Sample: TEST1234567890123. Use 17 letters or digits, excluding I, O and Q; no registry or checksum validation.'
                    )}
                    {field(
                      'year',
                      'Vehicle year',
                      'Demonstration range: 1900–2030.',
                      true
                    )}
                    {field(
                      'make',
                      'Vehicle make',
                      'Use a fictional manufacturer.'
                    )}
                    {field('model', 'Vehicle model', 'Use a fictional model.')}
                    {data.category === 'used' &&
                      field(
                        'previousRegistration',
                        'Previous registration reference',
                        'Shown only for used vehicles to illustrate a transfer dependency. Any fictional reference is accepted.'
                      )}
                    {data.category === 'commercial' &&
                      field(
                        'commercialUse',
                        'Commercial use',
                        'Shown only for commercial vehicles to illustrate an additional business-use question.'
                      )}
                  </div>
                </>
              )}
              {step === 1 && (
                <>
                  <fieldset>
                    <legend className="font-semibold">
                      Ownership type (required)
                    </legend>
                    <div className="mt-2 flex flex-wrap gap-x-5">
                      {(['individual', 'business'] as const).map((owner) => (
                        <label className={styles.choice} key={owner}>
                          <input
                            type="radio"
                            name="ownership"
                            value={owner}
                            checked={data.ownership === owner}
                            onChange={() => update('ownership', owner)}
                            required
                          />
                          {owner === 'individual' ? 'Individual' : 'Business'}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  {data.ownership === 'individual' ? (
                    field(
                      'ownerName',
                      'Owner name',
                      'Identifies the fictional owner in the review summary; do not enter a real person’s information.'
                    )
                  ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {field(
                        'businessName',
                        'Business name',
                        'Identifies the fictional organization receiving the vehicle.'
                      )}
                      {field(
                        'businessReference',
                        'Business reference',
                        'Any fictional reference is accepted; no business registry is checked.'
                      )}
                    </div>
                  )}
                  <div>
                    <label className={styles.choice}>
                      <input
                        id="ddr-eligibility"
                        type="checkbox"
                        checked={data.eligibility}
                        onChange={(e) =>
                          update('eligibility', e.target.checked)
                        }
                        required
                        aria-invalid={!!errors.eligibility}
                        aria-describedby={`ddr-eligibility-help${
                          errors.eligibility ? ' ddr-eligibility-error' : ''
                        }`}
                      />
                      I confirm this record uses fictional information
                      (required)
                    </label>
                    <p
                      id="ddr-eligibility-help"
                      className="text-xs text-zinc-600 dark:text-zinc-300"
                    >
                      This acknowledgement illustrates an eligibility gate; it
                      does not verify ownership or legal eligibility.
                    </p>
                    {errors.eligibility && (
                      <p id="ddr-eligibility-error" className={styles.error}>
                        {errors.eligibility}
                      </p>
                    )}
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <RegistrationReview data={data} onEdit={goTo} />
                  <div>
                    <label className={styles.choice}>
                      <input
                        id="ddr-confirmation"
                        type="checkbox"
                        checked={confirmed}
                        onChange={(e) => setConfirmed(e.target.checked)}
                        required
                        aria-invalid={!!errors.confirmation}
                        aria-describedby={
                          errors.confirmation
                            ? 'ddr-confirmation-error'
                            : undefined
                        }
                      />
                      I have reviewed this demonstration record (required)
                    </label>
                    {errors.confirmation && (
                      <p id="ddr-confirmation-error" className={styles.error}>
                        {errors.confirmation}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    Simulated submission only. No data leaves this workflow, and
                    no record is created.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {step > 0 && (
                <button
                  type="button"
                  className={styles.secondary}
                  onClick={() => goTo(step - 1)}
                >
                  Back
                </button>
              )}
              <button type="submit" className={styles.primary}>
                {step === 2 ? 'Simulate submission' : 'Continue'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
