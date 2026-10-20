import { useEffect, useRef, type ReactNode } from 'react'
import type { DemoErrors } from '@/data/manulifeDemo'
import styles from './Manulife.module.css'
export function ManulifeFormField({
  name,
  label,
  value,
  onChange,
  error,
  help,
  type = 'text',
  disabled = false,
}: {
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  help?: string
  type?: string
  disabled?: boolean
}) {
  const id = `manulife-${name}`
  return (
    <div>
      <label className="font-semibold" htmlFor={id}>
        {label} (required)
      </label>
      {help && (
        <p
          id={`${id}-help`}
          className="mt-1 text-xs text-zinc-600 dark:text-zinc-300"
        >
          {help}
        </p>
      )}
      <input
        id={id}
        type={type}
        className={styles.input}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={120}
        disabled={disabled}
        autoComplete="off"
        aria-invalid={!!error}
        aria-describedby={
          [help && `${id}-help`, error && `${id}-error`]
            .filter(Boolean)
            .join(' ') || undefined
        }
      />
      {error && (
        <p id={`${id}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  )
}
export function DemoErrorSummary({ errors }: { errors: DemoErrors }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (Object.keys(errors).length) ref.current?.focus()
  }, [errors])
  if (!Object.keys(errors).length) return null
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="group"
      aria-label="Check the information below"
      className="mb-4 space-y-2 rounded-lg border border-red-700 p-4 dark:border-red-300"
    >
      <p className="font-semibold">Check the information below</p>
      <ul className="list-disc space-y-1 pl-5">
        {Object.entries(errors).map(([name, message]) => (
          <li key={name}>
            <a
              href={`#manulife-${name}`}
              className="underline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(`manulife-${name}`)?.focus()
              }}
            >
              {message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export function DemoSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </section>
  )
}
