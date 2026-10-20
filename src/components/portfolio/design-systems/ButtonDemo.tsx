import { useState, type ReactNode, type CSSProperties } from 'react'
import type { Variant, ButtonSize } from '@/data/designSystems'
import { implementationExample } from '@/data/designSystems'
import { CodeBlock } from './CodeBlock'
import styles from './DesignSystems.module.css'
export type ButtonProps = {
  variant?: Variant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  children: ReactNode
  onClick?: () => void
}
export function DemoButton({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={styles.button}
      data-size={size}
      disabled={disabled}
      aria-busy={loading}
      style={
        {
          '--button-background': `var(--color-action-${variant})`,
        } as CSSProperties
      }
      onClick={() => {
        if (!loading) onClick?.()
      }}
    >
      {loading && <span aria-hidden="true">… </span>}
      {children}
    </button>
  )
}
export function ButtonDemo() {
  const [variant, setVariant] = useState<Variant>('primary')
  const [size, setSize] = useState<ButtonSize>('medium')
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  return (
    <div className="my-5 grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="min-w-0">
        <h3 className="font-semibold">Figma specification · sample</h3>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="min-w-0">
            <dt className="font-semibold">Component / properties</dt>
            <dd>
              Button · Variant=Primary|Secondary · Size=Small|Medium|Large ·
              Label=text · Disabled=boolean · Loading=boolean
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="font-semibold">States</dt>
            <dd>
              Default, hover, focus-visible, disabled and loading. State
              precedence: disabled → loading → interactive.
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="font-semibold">Token references</dt>
            <dd>
              button.{'{variant}'}.background → color.action.{'{variant}'};
              white foreground; color.focus.ring. Minimum 44px target.
            </dd>
          </div>
        </dl>
        <CodeBlock
          code={implementationExample}
          label="React implementation · TypeScript contract"
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold">
          Rendered component · local demonstration
        </h3>
        <fieldset className="mt-3 space-y-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <legend className="px-2 text-xs">Button controls</legend>
          <label className="block">
            Variant
            <select
              aria-label="Variant"
              className={styles.select}
              value={variant}
              onChange={(e) => setVariant(e.target.value as Variant)}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
            </select>
          </label>
          <label className="block">
            Size
            <select
              aria-label="Size"
              className={styles.select}
              value={size}
              onChange={(e) => setSize(e.target.value as ButtonSize)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <div className="flex flex-wrap gap-5">
            <label>
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />{' '}
              Disabled
            </label>
            <label>
              <input
                type="checkbox"
                checked={loading}
                onChange={(e) => setLoading(e.target.checked)}
              />{' '}
              Loading
            </label>
          </div>
          <div className="flex min-h-[100px] items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <DemoButton
              variant={variant}
              size={size}
              disabled={disabled}
              loading={loading}
              onClick={() => setCount((c) => c + 1)}
            >
              Save changes
            </DemoButton>
          </div>
          <p role="status" className="text-xs">
            {loading ? 'Loading: repeated activation is blocked. ' : ''}
            Successful activations: {count}
          </p>
        </fieldset>
        <p className="mt-3 text-xs">
          Native Enter/Space activation, visible focus and aria-busy. Loading
          retains focus and the accessible name. This preview does not save data
          or simulate a network request.
        </p>
      </div>
    </div>
  )
}
