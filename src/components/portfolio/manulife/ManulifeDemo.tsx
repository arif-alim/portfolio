import { DesignDecisionPanel, IllustrativeLabel } from '../case-study'
import { useRef, useState } from 'react'
import {
  roles,
  initialPlan,
  initialMembers,
  demoDecisions,
  type DemoRole,
  type PlanSettings,
  type DemoMember,
  type ApprovalRequest,
  type ChangeDraft,
} from '@/data/manulifeDemo'
import { ManulifePlan } from './ManulifePlan'
import { ManulifeMembers } from './ManulifeMembers'
import { ManulifeApprovals } from './ManulifeApprovals'
import styles from './Manulife.module.css'
const modules = [
  'Plan configuration',
  'Member management',
  'Approvals',
] as const
export function ManulifeDemo() {
  const [role, setRole] = useState<DemoRole>('administrator')
  const [module, setModule] =
    useState<(typeof modules)[number]>('Plan configuration')
  const [plan, setPlan] = useState<PlanSettings>({ ...initialPlan })
  const [members, setMembers] = useState<DemoMember[]>(
    initialMembers.map((member) => ({ ...member }))
  )
  const [requests, setRequests] = useState<ApprovalRequest[]>([])
  const [message, setMessage] = useState(
    'Ready. All changes stay in this local demonstration.'
  )
  const [resetVersion, setResetVersion] = useState(0)
  const requestId = useRef(1)
  function request(memberId: string, change: ChangeDraft) {
    if (
      role !== 'administrator' ||
      requests.some(
        (item) => item.memberId === memberId && item.status === 'Pending'
      )
    )
      return
    const id = requestId.current++
    setRequests((current) => [
      ...current,
      {
        ...change,
        returnDate: change.type === 'parental' ? change.returnDate : '',
        memberId,
        id,
        status: 'Pending',
      },
    ])
    setMessage(
      `Request ${id} is pending. The member record is unchanged. Choose Approvals and switch to Benefits approver to review it.`
    )
  }
  function decide(id: number, decision: 'Approved' | 'Declined') {
    const item = requests.find((request) => request.id === id)
    if (role !== 'approver' || !item || item.status !== 'Pending') return
    setRequests((current) =>
      current.map((request) =>
        request.id === id ? { ...request, status: decision } : request
      )
    )
    if (decision === 'Approved')
      setMembers((current) =>
        current.map((member) =>
          member.id === item.memberId
            ? {
                ...member,
                status:
                  item.type === 'parental' ? 'Parental leave' : 'Terminated',
              }
            : member
        )
      )
    setMessage(
      `Request ${id} ${decision.toLowerCase()}. ${
        decision === 'Approved'
          ? 'The sample member status is updated locally.'
          : 'The sample member record is unchanged.'
      }`
    )
    requestAnimationFrame(() =>
      document.getElementById('manulife-demo-message')?.focus()
    )
  }
  function reset() {
    setPlan({ ...initialPlan })
    setMembers(initialMembers.map((member) => ({ ...member })))
    setRequests([])
    setRole('administrator')
    setModule('Plan configuration')
    requestId.current = 1
    setResetVersion((v) => v + 1)
    setMessage('Demonstration reset. All sample records are restored.')
  }
  return (
    <section
      className={`${styles.root} space-y-6`}
      aria-labelledby="manulife-demo-title"
    >
      <header className="max-w-3xl space-y-3">
        <IllustrativeLabel />
        <h2 id="manulife-demo-title" className="text-xl font-semibold">
          Plan administration · interactive demonstration
        </h2>
        <p>
          Configure a fictional plan, find a member and review a status-change
          request through different roles.
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-300">
          A local exploration informed by the project’s design principles, not a
          reproduction of Manulife’s production application, policies or
          permissions. All records and validation rules are illustrative. No
          backend, authentication, storage or real submission; values reset when
          this tab closes or the page reloads.
        </p>
      </header>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="min-w-0 space-y-5 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700 sm:p-5">
          <div className="grid grid-cols-1 items-end gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <label htmlFor="manulife-role" className="font-semibold">
                Simulated role
              </label>
              <select
                id="manulife-role"
                className={styles.input}
                value={role}
                onChange={(e) => {
                  setRole(e.target.value as DemoRole)
                  setMessage(
                    `Role switched to ${
                      roles.find((item) => item.value === e.target.value)?.label
                    }.`
                  )
                }}
              >
                {roles.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <button type="button" className={styles.secondary} onClick={reset}>
              Reset demo
            </button>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            {roles.find((item) => item.value === role)?.description}
          </p>
          <nav
            aria-label="Demonstration modules"
            className="flex flex-wrap gap-2"
          >
            {modules.map((name) => (
              <button
                type="button"
                key={name}
                className={`${styles.secondary} text-xs ${
                  module === name
                    ? 'bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100'
                    : ''
                }`}
                aria-pressed={module === name}
                onClick={() => {
                  setModule(name)
                  requestAnimationFrame(() =>
                    document.getElementById('manulife-module-content')?.focus()
                  )
                }}
              >
                {name}
                {name === 'Approvals'
                  ? ` (${
                      requests.filter((item) => item.status === 'Pending')
                        .length
                    })`
                  : ''}
              </button>
            ))}
          </nav>
          <p
            id="manulife-demo-message"
            role="status"
            tabIndex={-1}
            className="rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800"
          >
            {message}
          </p>
          <div
            id="manulife-module-content"
            tabIndex={-1}
            key={`${resetVersion}-${module}-${role}`}
          >
            {module === 'Plan configuration' && (
              <ManulifePlan
                plan={plan}
                editable={role === 'administrator'}
                onSave={(next) => {
                  if (role === 'administrator') {
                    setPlan(next)
                    setMessage(
                      'Sample plan configuration saved locally. No production plan has changed.'
                    )
                  }
                }}
              />
            )}
            {module === 'Member management' && (
              <ManulifeMembers
                members={members}
                requests={requests}
                editable={role === 'administrator'}
                onRequest={request}
              />
            )}
            {module === 'Approvals' && (
              <ManulifeApprovals
                requests={requests}
                members={members}
                canApprove={role === 'approver'}
                onDecision={decide}
              />
            )}
          </div>
        </div>
        <DesignDecisionPanel
          id="manulife-demo-decisions"
          decisions={demoDecisions}
        />
      </div>
    </section>
  )
}
