import { useState } from 'react'
import {
  emptyChange,
  validateChange,
  type DemoMember,
  type ApprovalRequest,
  type ChangeDraft,
  type DemoErrors,
} from '@/data/manulifeDemo'
import {
  DemoErrorSummary,
  DemoSection,
  ManulifeFormField,
} from './ManulifeFormField'
import styles from './Manulife.module.css'
export function ManulifeMembers({
  members,
  requests,
  editable,
  onRequest,
}: {
  members: DemoMember[]
  requests: ApprovalRequest[]
  editable: boolean
  onRequest: (memberId: string, change: ChangeDraft) => void
}) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [selected, setSelected] = useState<string | null>(null)
  const [draft, setDraft] = useState<ChangeDraft>({ ...emptyChange })
  const [errors, setErrors] = useState<DemoErrors>({})
  const visible = members.filter(
    (member) =>
      `${member.name} ${member.id} ${member.location}`
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (status === 'all' || member.status === status)
  )
  const member = members.find((item) => item.id === selected)
  return (
    <DemoSection title="Member management">
      <p className="text-xs text-zinc-600 dark:text-zinc-300">
        Fictional people and identifiers only. Search by name, member ID or
        location; filter by current status.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="manulife-search" className="font-semibold">
            Search members
          </label>
          <input
            id="manulife-search"
            className={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
          />
        </div>
        <div>
          <label htmlFor="manulife-filter" className="font-semibold">
            Filter by member status
          </label>
          <select
            id="manulife-filter"
            className={styles.input}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All statuses</option>
            {['Active', 'Parental leave', 'Terminated'].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
      <p role="status" className="text-xs">
        {visible.length} matching member{visible.length === 1 ? '' : 's'}
      </p>
      <div
        tabIndex={0}
        role="region"
        aria-label="Sample members table, scroll horizontally on small screens"
        className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700"
      >
        <table className="w-full text-left text-xs">
          <caption className="sr-only">
            Sample member records and status-change actions
          </caption>
          <thead className="bg-zinc-50 dark:bg-zinc-800">
            <tr>
              {['Member', 'Location', 'Current status', 'Action'].map(
                (label) => (
                  <th key={label} scope="col" className="p-3">
                    {label}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {visible.map((item) => {
              const pending = requests.some(
                (request) =>
                  request.memberId === item.id && request.status === 'Pending'
              )
              return (
                <tr
                  key={item.id}
                  className="border-t border-zinc-200 dark:border-zinc-700"
                >
                  <th scope="row" className="p-3 font-medium">
                    {item.name}
                    <span className="mt-1 block text-zinc-600 dark:text-zinc-300">
                      {item.id}
                    </span>
                  </th>
                  <td className="p-3">{item.location}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">
                    {editable && !pending ? (
                      <button
                        type="button"
                        className={styles.secondary}
                        aria-label={`Request status change for ${item.name}`}
                        onClick={() => {
                          setSelected(item.id)
                          setDraft({ ...emptyChange })
                          setErrors({})
                          requestAnimationFrame(() =>
                            document
                              .getElementById('manulife-request-heading')
                              ?.focus()
                          )
                        }}
                      >
                        Request change
                      </button>
                    ) : pending ? (
                      'Awaiting approval'
                    ) : (
                      'Read only'
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {!visible.length && (
          <p className="p-4 text-sm">
            No members match. Clear the search or choose All statuses.
          </p>
        )}
      </div>
      {member && editable && (
        <form
          noValidate
          aria-label={`Status change for ${member.name}`}
          className="space-y-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
          onSubmit={(e) => {
            e.preventDefault()
            const next = validateChange(draft)
            setErrors(next)
            if (!Object.keys(next).length) {
              onRequest(member.id, draft)
              setSelected(null)
              requestAnimationFrame(() =>
                document.getElementById('manulife-demo-message')?.focus()
              )
            }
          }}
        >
          <h4
            id="manulife-request-heading"
            tabIndex={-1}
            className="font-semibold"
          >
            Request a status change · {member.name}
          </h4>
          <p className="text-xs">
            Current status: {member.status}. All displayed fields are required.
            The member’s status changes only after approval.
          </p>
          <DemoErrorSummary errors={errors} />
          <div>
            <label htmlFor="manulife-change-type" className="font-semibold">
              Change type (required)
            </label>
            <select
              id="manulife-change-type"
              className={styles.input}
              value={draft.type}
              onChange={(e) => {
                setDraft((d) => ({
                  ...d,
                  type: e.target.value as ChangeDraft['type'],
                }))
                setErrors({})
              }}
            >
              <option value="termination">Member termination</option>
              <option value="parental">Parental leave</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ManulifeFormField
              name="effective"
              label="Effective date"
              type="date"
              value={draft.effective}
              error={errors.effective}
              onChange={(effective) => setDraft((d) => ({ ...d, effective }))}
            />
            {draft.type === 'parental' && (
              <ManulifeFormField
                name="returnDate"
                label="Expected return date"
                type="date"
                help="Demonstration rule: on or after the effective date."
                value={draft.returnDate}
                error={errors.returnDate}
                onChange={(returnDate) =>
                  setDraft((d) => ({ ...d, returnDate }))
                }
              />
            )}
          </div>
          <ManulifeFormField
            name="reason"
            label="Reason for review"
            value={draft.reason}
            help="Use a fictional explanation; do not enter medical or personal information."
            error={errors.reason}
            onChange={(reason) => setDraft((d) => ({ ...d, reason }))}
          />
          <div className="rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800">
            <strong>Request preview</strong>
            <p>
              {member.name} ·{' '}
              {draft.type === 'parental'
                ? 'Parental leave'
                : 'Member termination'}{' '}
              · {draft.effective || 'effective date needed'}
              {draft.type === 'parental'
                ? ` → ${draft.returnDate || 'return date needed'}`
                : ''}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="submit" className={styles.primary}>
              Send for approval
            </button>
            <button
              type="button"
              className={styles.secondary}
              onClick={() => {
                setSelected(null)
                requestAnimationFrame(() =>
                  document.getElementById('manulife-demo-message')?.focus()
                )
              }}
            >
              Cancel request
            </button>
          </div>
        </form>
      )}
    </DemoSection>
  )
}
