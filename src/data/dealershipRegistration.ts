export type Category = 'new' | 'used' | 'commercial'
export type Ownership = 'individual' | 'business'
export interface Registration {
  category: Category
  vin: string
  year: string
  make: string
  model: string
  previousRegistration: string
  commercialUse: string
  ownership: Ownership
  ownerName: string
  businessName: string
  businessReference: string
  eligibility: boolean
}
export type FieldName = keyof Registration
export type Errors = Partial<Record<FieldName | 'confirmation', string>>
export const categories: { value: Category; label: string }[] = [
  { value: 'new', label: 'New vehicle' },
  { value: 'used', label: 'Used vehicle' },
  { value: 'commercial', label: 'Commercial vehicle' },
]
export const emptyRegistration: Registration = {
  category: 'new',
  vin: '',
  year: '',
  make: '',
  model: '',
  previousRegistration: '',
  commercialUse: '',
  ownership: 'individual',
  ownerName: '',
  businessName: '',
  businessReference: '',
  eligibility: false,
}
export const sampleRegistration: Registration = {
  category: 'new',
  vin: 'TEST1234567890123',
  year: '2025',
  make: 'Example Motors',
  model: 'Sample Sedan',
  previousRegistration: 'DEMO-PR-100',
  commercialUse: 'Sample delivery service',
  ownership: 'individual',
  ownerName: 'Alex Example',
  businessName: 'Example Dealership Ltd.',
  businessReference: 'DEMO-BIZ-100',
  eligibility: true,
}
export const steps = [
  'Registration details',
  'Ownership and eligibility',
  'Review and confirmation',
]
export function validateRegistration(
  data: Registration,
  step: number,
  confirmed = false
): Errors {
  const errors: Errors = {}
  const required = (key: FieldName, message: string) => {
    if (!String(data[key]).trim()) errors[key] = message
  }
  if (step === 0) {
    if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(data.vin.trim().toUpperCase()))
      errors.vin =
        'Enter 17 letters or digits, excluding I, O and Q. Use the fictional sample if needed.'
    if (
      !/^\d{4}$/.test(data.year) ||
      Number(data.year) < 1900 ||
      Number(data.year) > 2030
    )
      errors.year =
        'Enter a four-digit year between 1900 and 2030 for this demonstration.'
    required('make', 'Enter a fictional vehicle make.')
    required('model', 'Enter a fictional vehicle model.')
    if (data.category === 'used')
      required(
        'previousRegistration',
        'Enter a fictional previous registration reference.'
      )
    if (data.category === 'commercial')
      required('commercialUse', 'Describe a fictional commercial use.')
  }
  if (step === 1) {
    if (data.ownership === 'individual')
      required('ownerName', 'Enter a fictional owner name.')
    else {
      required('businessName', 'Enter a fictional business name.')
      required('businessReference', 'Enter a fictional business reference.')
    }
    if (!data.eligibility)
      errors.eligibility =
        'Confirm that this is a fictional demonstration record to continue.'
  }
  if (step === 2 && !confirmed)
    errors.confirmation =
      'Confirm that you have reviewed the demonstration record.'
  return errors
}
export const designDecisions = [
  [
    'Progressive Disclosure',
    'Category and ownership choices reveal only the questions relevant to this record.',
  ],
  [
    'Error Prevention',
    'Instructions precede input; inline errors and a linked summary explain how to recover.',
  ],
  [
    'User Control',
    'Back and edit actions preserve entered values so corrections do not require starting again.',
  ],
  [
    'Visibility of System Status',
    'Named steps, validation feedback and an explicit simulation result show what happens next.',
  ],
  [
    'Accessibility',
    'Native controls, associated help, visible focus and focused step headings support keyboard and assistive technology use.',
  ],
]
