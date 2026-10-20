import type { ApprovalRequest, DemoMember } from '@/data/manulifeDemo'
import { DemoSection } from './ManulifeFormField'
import styles from './Manulife.module.css'
export function ManulifeApprovals({
  requests,
  members,
  canApprove,
  onDecision,
}: {
  requests: ApprovalRequest[]
  members: DemoMember[]
  canApprove: boolean
  onDecision: (id: number, decision: 'Approved' | 'Declined') => void
}) {
  return (
    <DemoSection title="Approvals">
      <p className="text-xs text-zinc-600 dark:text-zinc-300">
        Review the proposed change before making a decision.{' '}
        {canApprove
          ? 'Approval updates the local sample member record immediately; there is no scheduling service.'
          : 'Choose Benefits approver to make a decision. Administrators and viewers can inspect requests.'}
      </p>
      {!requests.length ? (
        <p className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          No requests yet. As Plan administrator, open Member management and
          send a status change for approval.
        </p>
      ) : (
        <ol className="space-y-4">
          {requests.map((request) => (
            <li
              key={request.id}
              className="space-y-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
            >
              <h4 className="font-semibold">
                Request {request.id} ·{' '}
                {members.find((member) => member.id === request.memberId)?.name}
              </h4>
              <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-zinc-600 dark:text-zinc-300">
                    Proposed change
                  </dt>
                  <dd>
                    {request.type === 'parental'
                      ? 'Parental leave'
                      : 'Member termination'}
                  </dd>
                </div>
                <div>
                  <dt className="text-zinc-600 dark:text-zinc-300">
                    Decision status
                  </dt>
                  <dd className="font-semibold">{request.status}</dd>
                </div>
                <div>
                  <dt className="text-zinc-600 dark:text-zinc-300">
                    Effective date
                  </dt>
                  <dd>{request.effective}</dd>
                </div>
                {request.type === 'parental' && (
                  <div>
                    <dt className="text-zinc-600 dark:text-zinc-300">
                      Expected return
                    </dt>
                    <dd>{request.returnDate}</dd>
                  </div>
                )}
                <div className="sm:col-span-2">
                  <dt className="text-zinc-600 dark:text-zinc-300">
                    Reason for review
                  </dt>
                  <dd className="break-words">{request.reason}</dd>
                </div>
              </dl>
              {request.status === 'Pending' && canApprove && (
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={styles.primary}
                    onClick={() => onDecision(request.id, 'Approved')}
                  >
                    Approve request {request.id}
                  </button>
                  <button
                    type="button"
                    className={styles.secondary}
                    onClick={() => onDecision(request.id, 'Declined')}
                  >
                    Decline request {request.id}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ol>
      )}
    </DemoSection>
  )
}
