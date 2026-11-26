import type { Illustration } from './processDomains'

// Synthetic examples only: these are specifications to discuss, not production rules.
export const topicArtifacts: Record<string, Illustration> = {
  'as-is-and-to-be-process-analysis': {
    kind: 'flow',
    caption: 'AS-IS / TO-BE · illustrative mortgage intake',
    steps: [
      [
        'AS-IS · intake',
        'An officer verifies evidence and marks the application ready.',
      ],
      [
        'AS-IS · handoff',
        'A second team rekeys fields into servicing and resolves discrepancies.',
      ],
      [
        'TO-BE · transfer',
        'Validated fields transfer with their source and application identifier.',
      ],
      [
        'TO-BE · exception',
        'Rejected fields remain visible in a named reconciliation queue.',
      ],
    ],
  },
  'gap-analysis-and-impact-assessment': {
    kind: 'table',
    caption: 'Gap analysis · illustrative insurance evidence intake',
    headers: ['Current state', 'Target state', 'Impact / owner'],
    rows: [
      [
        'All evidence requested by mail',
        'Digital upload for eligible categories',
        'Intake: update instructions and training',
      ],
      [
        'Originals required for one category',
        'Explicit exception route',
        'Policy: confirm evidence retention rules',
      ],
      [
        'Upload and case unlinked',
        'Evidence linked to a verified claim',
        'Engineering: implement mapping and reconciliation',
      ],
    ],
  },
  'stakeholder-engagement-and-requirements-elicitation': {
    kind: 'table',
    caption: 'Stakeholder map · illustrative claims intake',
    headers: ['Role', 'Need / authority', 'Engagement'],
    rows: [
      [
        'Claimant',
        'Understand evidence and next steps',
        'Task walkthrough and accessible participation',
      ],
      [
        'Adjuster',
        'Assess completeness; request clarification',
        'Observe case review and exceptions',
      ],
      [
        'Policy owner',
        'Approve evidence rules',
        'Review disputed conditions and record decisions',
      ],
      [
        'Engineering',
        'Assess data and integration constraints',
        'Contract and failure-path review',
      ],
    ],
  },
  'business-rules-and-decision-logic': {
    kind: 'table',
    caption: 'Decision table · synthetic lending rules, not credit policy',
    headers: [
      'Evidence complete?',
      'Evidence consistent?',
      'Illustrative route',
    ],
    rows: [
      [
        'No',
        'Not evaluated',
        'Request missing information; retain the application',
      ],
      ['Yes', 'No', 'Specialist review; record the conflicting evidence'],
      ['Yes', 'Yes', 'Proceed to underwriting; no automatic credit decision'],
    ],
  },
  'requirements-documentation-and-traceability': {
    kind: 'table',
    caption: 'Requirements traceability · illustrative account opening',
    headers: ['Requirement', 'Implementation evidence', 'Acceptance evidence'],
    rows: [
      [
        'BR-01 · verify identity before activation',
        'SYS-04 · verification response gates activation',
        'UAT-07 · unverified account remains pending',
      ],
      [
        'BR-02 · allow correction',
        'UX-03 · retain draft after rejection',
        'UAT-08 · corrected evidence can be resubmitted',
      ],
      [
        'BR-03 · explain next action',
        'UX-05 · pending status names the next actor',
        'UAT-09 · applicant can identify the next step',
      ],
    ],
  },
  'system-context-and-architecture-modelling': {
    kind: 'flow',
    caption:
      'System context · illustrative account service; steps describe exchanges',
    steps: [
      [
        'Customer → portal',
        'Requests account details within an authenticated session.',
      ],
      [
        'Portal → identity service',
        'Validates session and permitted scope; identity owns the response.',
      ],
      [
        'Portal → account service',
        'Retrieves authorized accounts; the service enforces resource access.',
      ],
      [
        'Account service → notifications',
        'Emits confirmed changes; failed delivery does not repeat the change.',
      ],
    ],
  },
  'data-integration-and-mapping': {
    kind: 'table',
    caption: 'Data mapping · synthetic policy migration',
    headers: ['Source', 'Target / transformation', 'Validation / exception'],
    rows: [
      [
        'policy_no · string',
        'policyId · preserve leading zeroes',
        'Reject missing or duplicate identifiers',
      ],
      [
        'status A / L',
        'active / lapsed',
        'Unknown code → review, never default to active',
      ],
      [
        'effective_date · calendar date',
        'effectiveDate · ISO date, no time conversion',
        'Reject invalid dates; retain source evidence',
      ],
    ],
  },
  'rest-apis-and-system-interfaces': {
    kind: 'code',
    caption:
      'API contract sketch · synthetic payment request and status response',
    code: 'POST /payments\nIdempotency-Key: example-request-01\n\n{"amountMinor": 12500, "currency": "CAD"}\n\n202 Accepted\n{"reference": "example-payment-01", "status": "processing"}\n\nGET /payments/example-payment-01\n// After a timeout, query this reference before deciding to retry.',
  },
  'business-capability-mapping': {
    kind: 'table',
    caption: 'Capability map · illustrative insurance service',
    headers: [
      'Capability',
      'Observed constraint to investigate',
      'Supporting change',
    ],
    rows: [
      [
        'Evidence intake',
        'Repeated requests for the same document',
        'Link evidence to a verified claim',
      ],
      [
        'Adjudication',
        'Exceptions lack clear routing',
        'Define decision authority and escalation',
      ],
      [
        'Customer communication',
        'Status does not identify next action',
        'Connect service states to meaningful updates',
      ],
    ],
  },
  'product-roadmap-development': {
    kind: 'table',
    caption:
      'Outcome roadmap · illustrative lending service; horizons are not promised dates',
    headers: ['Horizon', 'Outcome', 'Dependency / decision gate'],
    rows: [
      [
        'Now',
        'Applicants can identify application status',
        'Agree authoritative states and owners',
      ],
      [
        'Next',
        'Applicants can supply missing evidence',
        'Verify intake and evidence association',
      ],
      [
        'Later',
        'Timely document reminders',
        'Evaluate reliable triggers and contact preferences',
      ],
    ],
  },
  'feature-prioritization-and-value-assessment': {
    kind: 'table',
    caption:
      'Prioritization matrix · illustrative claims backlog; qualitative assessment',
    headers: ['Candidate', 'Value / uncertainty', 'Proposed decision'],
    rows: [
      [
        'Repair failed uploads',
        'Blocks task completion; failure cause needs confirmation',
        'Investigate first; estimate a focused fix',
      ],
      [
        'Clarify claim status',
        'May reduce repeat contact; evidence from support needed',
        'Validate wording and ownership with users',
      ],
      [
        'Add management dashboard',
        'Indirect claimant value; reporting need unverified',
        'Defer pending a specific decision use case',
      ],
    ],
  },
  'backlog-management-and-refinement': {
    kind: 'table',
    caption: 'Backlog slices · illustrative address change',
    headers: ['Item', 'Readiness', 'Next action'],
    rows: [
      [
        'Validate a draft address',
        'Ready: allowed format and errors agreed',
        'Implement with retained input',
      ],
      [
        'Confirm the chosen address',
        'Refine: effective-date rule unresolved',
        'Get policy-owner decision',
      ],
      [
        'Notify downstream services',
        'Blocked: contract not agreed',
        'Confirm acknowledgement and retry rules',
      ],
    ],
  },
  'epics-features-and-user-stories': {
    kind: 'flow',
    caption: 'Story map · illustrative evidence management',
    steps: [
      [
        'Epic · manage claim evidence',
        'Outcome: claimants can supply the evidence needed for review.',
      ],
      [
        'Feature · save incomplete work',
        'Allow a claimant to return without repeating valid entries.',
      ],
      [
        'Story · save a draft',
        'As a claimant, I can save an incomplete request and resume it.',
      ],
      [
        'Acceptance',
        'Saved values return; incomplete evidence remains clearly marked; a draft is not a submitted claim.',
      ],
    ],
  },
  'acceptance-criteria-and-definition-of-done': {
    kind: 'checklist',
    caption: 'Story acceptance and shared completion · synthetic transfer',
    items: [
      'Given an amount above available funds, submission is rejected and both balances remain unchanged.',
      'Given a pending request, repeated activation cannot create a second transfer.',
      'Given an uncertain response, show a status-check route rather than assuming failure.',
      'Shared completion: review keyboard recovery, accessible errors and recorded test evidence.',
    ],
  },
  'business-value-and-benefits-realization': {
    kind: 'table',
    caption:
      'Benefits register · illustrative modernization; no measured outcomes implied',
    headers: ['Expected benefit', 'Evidence needed', 'Accountable owner'],
    rows: [
      [
        'Less rekeying effort',
        'Comparable case handling effort before and after',
        'Operations lead',
      ],
      [
        'Fewer correction loops',
        'Corrections per accepted case, segmented by type',
        'Service owner',
      ],
      [
        'Released capacity',
        'Observed use of staff time; separate from cash savings',
        'Business sponsor',
      ],
    ],
  },
  'customer-journey-mapping': {
    kind: 'table',
    caption: 'Journey map · illustrative permit application',
    headers: ['Stage', 'Customer need', 'Service question'],
    rows: [
      [
        'Prepare',
        'Know which evidence is required',
        'Can requirements be understood before starting?',
      ],
      [
        'Submit',
        'Know the request was accepted',
        'Is there a reference and a clear receipt?',
      ],
      [
        'Wait',
        'Know who acts next',
        'Does status explain responsibility and follow-up?',
      ],
      [
        'Respond',
        'Correct only what is missing',
        'Can valid information be retained?',
      ],
    ],
  },
  'service-blueprinting': {
    kind: 'table',
    caption: 'Service blueprint · illustrative evidence review',
    headers: ['Layer', 'Submit evidence', 'Resolve missing information'],
    rows: [
      [
        'Customer action',
        'Uploads evidence and submits',
        'Supplies the requested detail',
      ],
      [
        'Frontstage',
        'Receipt with request reference',
        'Specific request with a return route',
      ],
      [
        'Backstage',
        'Verify association and route to review',
        'Keep valid evidence and reopen the task',
      ],
      [
        'Dependency / owner',
        'Evidence store / intake',
        'Review rules / reviewer',
      ],
    ],
  },
  'foundations-and-design-tokens': {
    kind: 'code',
    caption: 'Token structure · illustrative semantic alias',
    code: '{\n  "colour": {\n    "blue": { "700": { "$type": "color", "$value": "#1d4ed8" } },\n    "action": {\n      "primary": { "$type": "color", "$value": "{colour.blue.700}" }\n    }\n  }\n}\n// Component usage references the action role, not the palette slot.',
  },
  'accessible-forms-and-error-handling': {
    kind: 'checklist',
    caption: 'Evaluation checklist · illustrative registration error',
    items: [
      'The field has a visible label and a programmatically associated instruction.',
      'Invalid submission identifies the error in text and focuses a linked summary.',
      'The summary link reaches the correct field without discarding other entries.',
      'The correction clears the obsolete error and the final review shows the corrected value.',
    ],
  },
  'intelligent-workflow-automation': {
    kind: 'flow',
    caption: 'AI-assisted document workflow · illustrative mortgage evidence',
    steps: [
      [
        'Receive',
        'Accept approved synthetic evidence; record a document identifier.',
      ],
      [
        'Propose',
        'Extract candidate fields with source references; do not update the authoritative record.',
      ],
      ['Validate', 'Apply deterministic completeness and consistency checks.'],
      [
        'Review',
        'A specialist accepts, corrects or rejects proposals; uncertain cases remain uncommitted.',
      ],
      [
        'Record',
        'Commit the approved values once and retain decision provenance.',
      ],
    ],
  },
  'ai-model-evaluation-and-validation': {
    kind: 'table',
    caption: 'Evaluation cases · synthetic document extraction',
    headers: ['Case', 'Expected behaviour', 'Failure to flag'],
    rows: [
      [
        'Unreadable date',
        'Surface uncertainty and request review',
        'Invented precise date',
      ],
      [
        'Conflicting totals',
        'Show both sources; do not select silently',
        'Unsupported reconciliation',
      ],
      [
        'Instructions inside a document',
        'Treat as untrusted document content',
        'Changing the task or taking an unauthorized action',
      ],
    ],
  },
  'authentication-and-authorization-concepts': {
    kind: 'table',
    caption:
      'Access matrix · illustrative plan changes; enforcement belongs on the server',
    headers: ['Role', 'Prepare change', 'Approve change'],
    rows: [
      ['Administrator', 'Allowed for assigned plans', 'Denied'],
      [
        'Reviewer',
        'According to assigned scope',
        'Allowed within delegated authority',
      ],
      [
        'Expired session',
        'Reauthenticate; retain safe draft state',
        'Denied until identity and authority are verified',
      ],
    ],
  },
  'integration-validation-and-error-handling': {
    kind: 'table',
    caption: 'Integration validation · illustrative document upload',
    headers: ['Injected condition', 'Expected state', 'Validation evidence'],
    rows: [
      [
        'Acknowledgement lost',
        'Outcome uncertain; query original reference',
        'One stored document, one case association',
      ],
      [
        'Unsupported file',
        'Rejected with correction route',
        'No accepted association; valid inputs retained',
      ],
      [
        'Repeat request',
        'Return or reconcile original result',
        'No duplicate evidence record',
      ],
    ],
  },
  'release-readiness-and-validation': {
    kind: 'checklist',
    caption: 'Release gate · illustrative account update',
    items: [
      'Acceptance evidence covers the update and downstream notification paths.',
      'Blocking defects are resolved; accountable owners record accepted limitations.',
      'Support can identify an uncertain update and find its correlation reference.',
      'A named owner can stop rollout and execute a rehearsed recovery plan.',
      'Post-release verification checks authoritative records and customer-visible state.',
    ],
  },
}
