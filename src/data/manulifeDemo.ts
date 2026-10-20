import type { DesignDecision } from '@/components/portfolio/case-study/types'

export type DemoRole = 'administrator' | 'approver' | 'viewer'
export interface PlanSettings {
  name: string
  coverage: 'standard' | 'extended'
  dependents: boolean
  dependentLimit: string
}
export interface DemoMember {
  id: string
  name: string
  location: string
  status: 'Active' | 'Parental leave' | 'Terminated'
}
export interface ChangeDraft {
  type: 'termination' | 'parental'
  effective: string
  returnDate: string
  reason: string
}
export interface ApprovalRequest extends ChangeDraft {
  id: number
  memberId: string
  status: 'Pending' | 'Approved' | 'Declined'
}
export type DemoErrors = Record<string, string>
export const roles: { value: DemoRole; label: string; description: string }[] =
  [
    {
      value: 'administrator',
      label: 'Plan administrator',
      description:
        'Edit sample plan settings and request member status changes. Approval is a separate role.',
    },
    {
      value: 'approver',
      label: 'Benefits approver',
      description:
        'Read plan and member details; approve or decline pending sample requests.',
    },
    {
      value: 'viewer',
      label: 'Read-only viewer',
      description:
        'Inspect sample settings, members and requests without changing them.',
    },
  ]
export const initialPlan: PlanSettings = {
  name: 'Example employer plan',
  coverage: 'standard',
  dependents: false,
  dependentLimit: '',
}
export const initialMembers: DemoMember[] = [
  {
    id: 'DEMO-101',
    name: 'Alex Example',
    location: 'Toronto',
    status: 'Active',
  },
  {
    id: 'DEMO-102',
    name: 'Robin Sample',
    location: 'Ottawa',
    status: 'Active',
  },
  {
    id: 'DEMO-103',
    name: 'Casey Fiction',
    location: 'Toronto',
    status: 'Parental leave',
  },
]
export const emptyChange: ChangeDraft = {
  type: 'termination',
  effective: '',
  returnDate: '',
  reason: '',
}
export function validatePlan(plan: PlanSettings): DemoErrors {
  const errors: DemoErrors = {}
  if (!plan.name.trim()) errors.name = 'Enter a fictional plan name.'
  if (plan.dependents && !/^[1-8]$/.test(plan.dependentLimit))
    errors.dependentLimit =
      'Enter a whole number from 1 to 8 for this sample plan.'
  return errors
}
export function validateChange(change: ChangeDraft): DemoErrors {
  const errors: DemoErrors = {}
  const validDate = (value: string) =>
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value
  if (!validDate(change.effective))
    errors.effective = 'Enter a valid effective date.'
  if (
    change.type === 'parental' &&
    (!validDate(change.returnDate) || change.returnDate < change.effective)
  )
    errors.returnDate =
      'Enter a return date on or after the effective date for this demonstration.'
  if (!change.reason.trim())
    errors.reason = 'Enter a fictional reason for the reviewer.'
  return errors
}
export const demoDecisions: DesignDecision[] = [
  [
    'Task structure',
    'Plan configuration, member management and approvals keep related work together.',
  ],
  [
    'Conditional questions',
    'Dependent limits and leave-return dates appear only when relevant.',
  ],
  [
    'Clear responsibility',
    'Administrators request a change; approvers make a separate review decision. The role switch is illustrative, not authentication.',
  ],
  [
    'Reviewable changes',
    'Members retain their current status until a request is approved; declined requests leave the record unchanged.',
  ],
  [
    'Accessible recovery',
    'Labeled inputs, focused error summaries and preserved field values support correction without starting over.',
  ],
]
