import type { FieldName } from '@/data/dealershipRegistration'
import styles from './Registration.module.css'
interface Props {
  name: FieldName
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  help?: string
  inputMode?: 'text' | 'numeric'
}
export function RegistrationField({
  name,
  label,
  value,
  onChange,
  error,
  help,
  inputMode = 'text',
}: Props) {
  const id = `ddr-${name}`
  return (
    <div>
      <label htmlFor={id} className="block font-semibold">
        {label} <span className="text-xs font-normal">(required)</span>
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
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        maxLength={120}
        inputMode={inputMode}
        autoComplete="off"
        aria-invalid={!!error}
        aria-describedby={
          [help && `${id}-help`, error && `${id}-error`]
            .filter(Boolean)
            .join(' ') || undefined
        }
        className={styles.input}
      />
      {error && (
        <p id={`${id}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  )
}
