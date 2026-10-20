export type Variant = 'primary' | 'secondary'
export type ButtonSize = 'small' | 'medium' | 'large'
export const tokenFlows = [
  {
    id: 'primary',
    label: 'Primary action',
    nodes: [
      'color.blue.600',
      'color.action.primary',
      'button.primary.background',
      'Button variant="primary"',
    ],
    value: '#2563eb',
  },
  {
    id: 'secondary',
    label: 'Secondary action',
    nodes: [
      'color.slate.700',
      'color.action.secondary',
      'button.secondary.background',
      'Button variant="secondary"',
    ],
    value: '#334155',
  },
] as const
export const layers = [
  'Foundation token',
  'Semantic token',
  'Component token',
  'React component',
]
export const buttonContract = {
  identity: 'demo.button',
  version: '0.1.0-concept',
  variants: ['primary', 'secondary'],
  sizes: ['small', 'medium', 'large'],
  tokens: {
    primary: 'color.action.primary',
    secondary: 'color.action.secondary',
    focus: 'color.focus.ring',
  },
  states: ['default', 'hover', 'focus-visible', 'disabled', 'loading'],
  accessibility: {
    element: 'button',
    accessibleName: 'required',
    keyboard: ['Enter', 'Space'],
    loading: 'aria-busy; retain accessible name; block repeated activation',
    focus: 'visible ring',
    contrast: 'validate every resolved foreground/background pair',
  },
  usage: {
    primary: 'One principal action per task',
    secondary: 'Supporting actions',
    navigation: 'Use a link for navigation',
    forbidden: [
      'unapproved token overrides',
      'icon-only without an accessible name',
    ],
  },
}
export const implementationExample = `type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
}
// Native button, type="button", aria-busy={loading}.
// Keep loading focusable; guard repeated activation.
// CSS: background: var(--button-background);
// Alias: --button-background: var(--color-action-primary);
// Hover + focus-visible + disabled styles are required.`
export const inspectionSteps = [
  [
    'Inspect',
    'Walk component sets, components, instances and their layers. Record node IDs, main-component references, variant properties, overrides and bound variables.',
  ],
  [
    'Resolve',
    'Index local collections by variable ID and mode. Follow aliases recursively with a visited set; report cycles and missing references. Preserve the full chain instead of flattening away semantic meaning.',
  ],
  [
    'Map dependencies',
    'Record each component/layer → variable edge with collection, library key and mode. External aliases require access to the source library; report unavailable references as unresolved, never guess their values.',
  ],
  [
    'Export',
    'Emit a versioned token graph and component-property manifest. Keep foundation, semantic and component-specific namespaces distinct, and retain source provenance for review.',
  ],
  [
    'Validate',
    'Proposed checks flag broken aliases, mode gaps, unsupported variants and raw values bypassing semantic tokens. Contrast checks use resolved color pairs; keyboard and interaction checks run against rendered components.',
  ],
]
