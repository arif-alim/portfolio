export const processDisciplines = [
  {
    id: 'product-design',
    name: 'Product Design',
    topics: [
      {
        id: 'frame-the-problem',
        name: 'Frame the problem',
        decision:
          'On Manulife’s Plan Administrator platform, I found that search asked for several inputs and still returned inconsistent results. I gave administrators one place to start and kept filters available for common names or broad results.',
        artifact:
          'The comparison shows what an administrator needs to know at each point in the search.',
        check:
          'I refined the portal through clickable prototypes and usability feedback. The task I’d use to compare the two flows is finding a member with only a name, then verifying the policy before opening the record.',
        example: [
          ['Earlier flow', 'Supply multiple fields before searching'],
          [
            'Redesign',
            'Search by what you know, then narrow by location, class or plan',
          ],
          ['Verification', 'Check the policy and member details before acting'],
        ],
        reference: ['/portfolio/manulife?view=process', 'Manulife case study'],
        exampleLabel: 'Workflow sketch based on the Manulife case study',
      },
      {
        id: 'map-the-workflow',
        name: 'Map the workflow',
        decision:
          'I clarified the relationship between client, policy, member and plan. A flat list would be quick to scan, but it could hide which policy an action would affect.',
        artifact:
          'I designed coverage summaries with member information and administrative actions in the same view. This map shows the checkpoints I wanted the interface to preserve.',
        check:
          'I used design reviews and developer handoff to clarify the hierarchy across screens. I’d walk through a member with multiple policies and ask which plan would change before confirming.',
        example: [
          ['Client and policy', 'Set the context for the search'],
          ['Member and plan', 'Verify the record and coverage'],
          ['Action', 'Open the update with that context still visible'],
        ],
        exampleLabel: 'Workflow sketch based on the Manulife case study',
      },
      {
        id: 'prototype-and-test',
        name: 'Prototype and test',
        decision:
          'I choose prototype fidelity based on the question. For parental leave, the key uncertainty was whether someone could tell which dates applied and fix an incomplete request.',
        artifact:
          'This scenario uses the fictional Plan Administration demo. It brings a conditional field, an error and a change of role into one task.',
        check:
          'I’d run the task with an incomplete date, check that the administrator can recover without losing their entries, and verify that approval is required before the record changes.',
        example: [
          ['Start', 'Choose parental leave and omit the return date'],
          ['Recover', 'Follow the error to the date field and submit again'],
          ['Verify', 'Switch to the reviewer and approve the pending change'],
        ],
        reference: [
          '/portfolio/manulife?view=demos&area=plan',
          'Plan Administration demo',
        ],
        proposedCheck: true,
      },
      {
        id: 'measure-the-workflow',
        name: 'Measure the workflow',
        decision:
          'I’d define success at the task boundary. A click on Submit measures intent, while a confirmed submission tells me the service actually accepted the request.',
        artifact:
          'This event plan distinguishes attempts, recovery and completion for a fictional permit application.',
        check:
          'I’d run one successful submission, one validation failure and one retry in a test environment. Then I’d check that a retry can’t inflate completions and that the payload contains no form contents.',
        example: [
          ['Start', 'Emit once when the applicant begins'],
          ['Recover', 'Record a validation category and attempt count'],
          ['Complete', 'Count a confirmed submission once per request'],
        ],
        reference: [
          'https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate',
          'GOV.UK completion rate guidance',
        ],
        proposedCheck: true,
      },
      {
        id: 'review-ai-suggestions',
        name: 'Review AI suggestions',
        decision:
          'For an emerging AI-assisted workflow, I’d let an assistant draft a case summary while leaving the decision to file it with the reviewer. Speed matters, but a plausible mistake can travel into the record.',
        artifact:
          'This review scenario gives a reviewer the draft, its source and a way to edit or discard it before filing.',
        check:
          'I’d seed a wrong date and a missing source. I’d check whether reviewers catch both, understand what was filed, and can correct the record through the normal amendment path.',
        example: [
          ['Inspect', 'Show the source beside the suggested date'],
          ['Decide', 'Edit or discard the draft before filing'],
          [
            'Recover',
            'Keep the original record and show the amendment history',
          ],
        ],
        reference: [
          'https://microsoft.design/articles/putting-the-user-back-into-ai-evaluation/',
          'Microsoft Design on evaluating AI, 2026',
        ],
        proposedCheck: true,
      },
    ],
  },
  {
    id: 'service-design',
    name: 'Service Design',
    topics: [
      {
        id: 'map-the-journey',
        name: 'Map the journey',
        decision:
          'I map the journey around what a person is trying to get done. A screen-by-screen map would miss the wait between sending a request and hearing what happens next.',
        artifact:
          'The fictional journey below follows a request from preparation to response. Select a stage to compare the person’s task with what the service shows.',
        check:
          'I’d walk a participant through a submitted request and ask what they expect next, when they would follow up, and which information they would need to have ready.',
        demo: 'journey',
        proposedCheck: true,
      },
      {
        id: 'blueprint-the-service',
        name: 'Blueprint the service',
        decision:
          'I separate what someone sees from the work behind it. That helps a team decide whether a poor status message needs clearer wording or a change in how work gets routed.',
        artifact:
          'This excerpt from the fictional CBSA portfolio demonstration lines up the user action, frontstage message, backstage task and dependency.',
        check:
          'I’d start at Review and ask the team to trace the message to the queue and its owner. If a dependency fails, I’d check who updates the customer and what they can say.',
        demo: 'blueprint',
        proposedCheck: true,
      },
      {
        id: 'improve-handoffs',
        name: 'Improve handoffs',
        decision:
          'I make the next owner explicit. Routing every request to review would simplify intake, but incomplete requests would land with reviewers who can’t act on them.',
        artifact:
          'Change the completeness of the fictional request to see the customer message and backstage route change together.',
        check:
          'I’d try both branches with a requester and a reviewer. Each should know who acts next and what evidence moves the request forward.',
        demo: 'handoff',
        proposedCheck: true,
      },
      {
        id: 'design-assisted-channels',
        name: 'Design assisted channels',
        decision:
          'I’d let people continue a request with help when the online route stalls. A callback costs staff time, so I’d reserve it for barriers a clearer online prompt can’t resolve.',
        artifact:
          'This handoff sketch follows someone who starts a permit application online and finishes it with phone support.',
        check:
          'I’d test a caller who has lost the reference number. I’d check that staff can verify identity, find the right draft and continue without asking the caller to repeat the entire application.',
        example: [
          ['Online', 'Offer a reference number and a way to request support'],
          [
            'Phone',
            'Verify identity, recover the draft and record the agreed next action',
          ],
          ['Return online', 'Show the updated status and who acts next'],
        ],
        reference: [
          'https://www.gov.uk/service-manual/helping-people-to-use-your-service/assisted-digital-support-introduction',
          'GOV.UK assisted digital guidance',
        ],
        proposedCheck: true,
      },
      {
        id: 'own-and-pilot-exceptions',
        name: 'Own and pilot exceptions',
        decision:
          'I’d pilot one delay scenario before scaling a new queue rule. Giving every delay the same escalation would create noise, while leaving delays unassigned makes them easy to miss.',
        artifact:
          'This pilot card names an owner, an escalation trigger and the update a customer would see while waiting.',
        check:
          'I’d compare time to ownership and repeat contacts with the previous workflow, then review unresolved cases with staff before extending the pilot.',
        example: [
          [
            'Waiting on a specialist',
            'Intake remains the named owner until the specialist accepts',
          ],
          [
            'Customer update',
            'Your request is queued. We’ll update you by Friday',
          ],
          [
            'Escalation',
            'Missed update goes to the shift lead, who assigns an owner and contacts the customer',
          ],
        ],
        reference: [
          'https://services.blog.gov.uk/2025/03/19/developing-service-patterns-reusable-designs-for-building-government-services/',
          'GOV.UK teams on service patterns, 2025',
        ],
        proposedCheck: true,
      },
    ],
  },
  {
    id: 'design-systems',
    name: 'Design Systems',
    topics: [
      {
        id: 'tokens-and-themes',
        name: 'Tokens and themes',
        decision:
          'I use a semantic alias when a colour has a role that should survive palette changes. A raw colour is simpler to apply, but it hides what should change together when a theme evolves.',
        artifact:
          'I built this browser explorer to trace primary and secondary action backgrounds from foundation value to React variant. The sample uses one mode.',
        check:
          'I’d resolve each alias in every supported theme, compare foreground contrast in context, and check that a primary-action change leaves the secondary action alone.',
        demo: 'tokens',
        reference: [
          'https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/',
          'Design Tokens Format Module, 2025.10',
        ],
        proposedCheck: true,
      },
      {
        id: 'components-and-states',
        name: 'Components and states',
        decision:
          'I keep a save action in place while it runs. Replacing it with a spinner would make the pending state obvious visually, but could lose the accessible name and the keyboard focus.',
        artifact:
          'I built this reading-list state explorer to put the rendered control beside its behaviour notes.',
        check:
          'I check focus visibility, the 44 × 44 CSS pixel example target, and feedback independently. In Loading, try activating again and verify the name stays stable while the action is guarded.',
        demo: 'save',
      },
      {
        id: 'figma-to-react',
        name: 'Figma to React',
        decision:
          'I align design properties with React props so both sides can review the same choices. I keep visual choices like variant separate from behaviour like loading or disabled.',
        artifact:
          'Select a node to see the property, token, React or contract example. The browser walkthrough is implemented here; the Figma integration is an architectural exploration.',
        check:
          'I’d compare a primary loading button across spec and render, then check that any invalid property combination is caught before handoff.',
        demo: 'architecture',
        reference: [
          '/portfolio/design-systems',
          'Explore the full architecture',
        ],
        proposedCheck: true,
      },
      {
        id: 'ai-readable-contracts',
        name: 'AI-readable contracts',
        decision:
          'I’d give a generator a versioned set of supported options. That makes output easier to validate than a prose-only prompt, while a person still needs to check whether the result fits the task.',
        artifact:
          'The illustrative Button contract records variants, tokens, supported states and accessibility expectations.',
        check:
          'I’d feed it an unknown variant and a missing label, verify both are rejected, and render an accepted proposal to check focus, contrast and the loading announcement.',
        demo: 'contract',
        proposedCheck: true,
      },
      {
        id: 'govern-contributions',
        name: 'Govern contributions',
        decision:
          'I’d keep a new pattern local until there’s evidence it solves a shared problem. Promoting it too soon makes the library harder to maintain; waiting too long leaves teams rebuilding it.',
        artifact:
          'This contribution brief makes the decision to accept, pilot or decline a proposed status badge reviewable.',
        check:
          'I’d ask two teams to try it with different statuses and test whether the text and appearance still communicate the same meaning. I’d also agree who maintains the guidance.',
        example: [
          ['Evidence', 'Show recurring status needs across two products'],
          ['Pilot', 'Test text, contrast and empty or unknown status'],
          ['Adopt', 'Assign an owner and publish examples and limits'],
        ],
        reference: [
          'https://design-system.service.gov.uk/community/contribution-criteria/',
          'GOV.UK contribution criteria',
        ],
        proposedCheck: true,
      },
      {
        id: 'release-and-migrate',
        name: 'Release and migrate',
        decision:
          'I’d treat a token rename as a migration. An alias buys teams time to upgrade, while a dated removal keeps the compatibility layer from becoming permanent.',
        artifact:
          'This release note shows the steps for renaming a fictional focus token across themes.',
        check:
          'I’d compare the resolved value in both themes, run the old and new names through a sample app, and check consumer usage before removing the alias.',
        example: [
          [
            'Introduce',
            'Publish the new semantic name and retain the old alias',
          ],
          [
            'Migrate',
            'Update consuming components with a before-and-after example',
          ],
          [
            'Retire',
            'Remove the alias in a breaking release after checking usage',
          ],
        ],
        reference: [
          'https://frontend.design-system.service.gov.uk/v5/changes-to-govuk-frontend-v5/',
          'GOV.UK Frontend migration notes',
        ],
        proposedCheck: true,
      },
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    topics: [
      {
        id: 'keyboard-and-focus',
        name: 'Keyboard and focus',
        decision:
          'I design where focus goes when an overlay opens or closes. An overlay can keep the task in context, but it breaks the workflow if the user can’t find their place again.',
        artifact:
          'This keyboard scenario uses an original example of a filter dialog that opens from a results list.',
        check:
          'I’d open it with Enter, check initial focus and the Tab loop, dismiss it with Escape, then verify focus returns to the filter button.',
        example: [
          ['Open', 'Move focus into the dialog'],
          [
            'Navigate',
            'Reach each control in the dialog with Tab and Shift+Tab',
          ],
          ['Close', 'Return to the filter button'],
        ],
        reference: [
          'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
          'WAI modal dialog pattern',
        ],
        proposedCheck: true,
      },
      {
        id: 'screen-reader-behaviour',
        name: 'Screen reader behaviour',
        decision:
          'I keep the search field’s name stable while results change. Moving focus to each update would make the change apparent but interrupt someone who is still typing.',
        artifact:
          'This announcement example separates the field name, the status message and the list that follows it.',
        check:
          'I’d type, clear and repeat a query with a screen reader. I’d listen for one useful result count after each completed search and check that focus stays in the field.',
        example: [
          ['Name', 'Search applications'],
          ['Status', '3 matching applications'],
          ['Next stop', 'The results heading and list remain in reading order'],
        ],
        reference: [
          'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html',
          'WCAG status messages',
        ],
        proposedCheck: true,
      },
      {
        id: 'validation-and-recovery',
        name: 'Validation and recovery',
        decision:
          'I design errors for the moment when someone is ready to submit. Inline errors identify a field, while a summary gives keyboard users a quick route to every correction.',
        artifact:
          'The ServiceOntario registration prototype combines a summary, field-level messages and retained entries. The scenario below isolates one correction.',
        check:
          'I check that submitting an incomplete form focuses the summary, that its link reaches the field, and that correcting it leaves other entries in place.',
        example: [
          ['Submit', 'Leave a required field blank'],
          ['Follow', 'Activate the summary link to reach the field'],
          [
            'Correct',
            'Enter the value and review the previously entered information',
          ],
        ],
        reference: [
          '/portfolio/service-ontario',
          'ServiceOntario case study and demo',
        ],
      },
      {
        id: 'reflow-and-targets',
        name: 'Reflow, zoom and touch targets',
        decision:
          'I’d keep a form’s reading order and controls usable when the layout narrows. Stacking secondary actions gives up some compactness but avoids squeezing their targets.',
        artifact:
          'This check card covers a confirmation screen with a long address and adjacent actions.',
        check:
          'I’d test at 320 CSS pixels and at 200% text resize, then check targets against WCAG 2.2 AA’s 24 × 24 CSS pixel minimum or a permitted exception.',
        example: [
          [
            'Reflow',
            'Read the address and confirmation without horizontal scrolling',
          ],
          ['Resize', 'Keep labels and errors fully visible'],
          ['Targets', 'Measure the clickable area and spacing of both actions'],
        ],
        reference: [
          'https://www.w3.org/TR/WCAG22/',
          'WCAG 2.2 reflow, resize text and target size',
        ],
        proposedCheck: true,
      },
      {
        id: 'combine-accessibility-checks',
        name: 'Combine accessibility checks',
        decision:
          'I’d automate checks for detectable regressions and use manual testing for behaviour. A labelled control can still send focus somewhere unexpected or announce too much.',
        artifact:
          'This test matrix uses a fictional results filter that updates the count and keeps the filter active.',
        check:
          'I’d run all three checks on the same build and record the browser, assistive technology and result so the team can reproduce a failure.',
        example: [
          ['Automated', 'Check the rendered control for a programmatic name'],
          ['Keyboard', 'Apply and clear the filter without losing focus'],
          [
            'Assistive technology',
            'Confirm the result count is announced once and the list is reachable',
          ],
        ],
        reference: [
          'https://accessibility.blog.gov.uk/2025/02/28/unlocking-accessibility-key-misconceptions-common-issues-and-tools-used-by-accessibility-specialists/',
          'GOV.UK accessibility specialists on testing, 2025',
        ],
        proposedCheck: true,
      },
    ],
  },
  {
    id: 'frontend-qa',
    name: 'Frontend & QA',
    topics: [
      {
        id: 'feasibility-and-co-design',
        name: 'Feasibility and co-design',
        decision:
          'I bring engineering into the design when an interaction depends on data the platform may not return. For a slow account search, the trade-off is early partial feedback versus presenting a complete result set.',
        artifact:
          'This spike compares progressive results with waiting for the full response.',
        check:
          'I’d simulate slow responses and rapid query changes. We’d choose the approach based on whether a stale result can appear actionable and how reliably the API identifies partial results.',
        example: [
          [
            'Progressive',
            'Show partial results with an explicit loading state',
          ],
          [
            'Complete',
            'Wait for the full result set and keep the query editable',
          ],
          [
            'Decision point',
            'Check what the API can cancel and how it marks completeness',
          ],
        ],
        proposedCheck: true,
      },
      {
        id: 'implementation-handoff',
        name: 'Implementation handoff',
        decision:
          'I specify what stays stable while an action is pending. A loading flag should guard activation and preserve the control’s accessible name and focus.',
        artifact:
          'This React example lets a reviewer change variant, size, disabled and loading states. The activation count makes repeated clicks easy to spot.',
        check:
          'I check that Enter and Space still activate a ready button, that loading keeps focus and the name stable, and that repeated input leaves the count unchanged.',
        demo: 'button',
      },
      {
        id: 'build-review-and-sign-off',
        name: 'Build review and sign-off',
        decision:
          'I review the build around a complete task, with special attention to the states a static design can miss. Sign-off needs a reproducible record of what worked and what still needs attention.',
        artifact:
          'This portfolio uses browser checks at mobile, tablet and desktop widths in both themes. The review card translates that coverage into a registration task.',
        check:
          'I check overflow and visible focus, then follow the form from an invalid attempt through correction to completion. I record the build and the conditions needed to reproduce any issue.',
        example: [
          [
            'Layout',
            'Read the form and actions at 390, 768 and 1280 CSS pixels',
          ],
          [
            'Recovery',
            'Follow the error link, correct the field and retain other entries',
          ],
          [
            'Completion',
            'Verify the review screen reflects the corrected values',
          ],
        ],
        exampleLabel: 'Portfolio QA scenario',
      },
      {
        id: 'specify-data-states',
        name: 'Specify loading, empty and recovery',
        decision:
          'I’d give loading, empty results and failure distinct treatments. The same blank panel could mean the user should wait, change the query or retry.',
        artifact:
          'This state spec shows what a fictional application list says and what action is available as requests resolve.',
        check:
          'I’d delay the request, return no matches and force a failure. I’d check that retry keeps the filters and that a late response from an older query can’t replace newer results.',
        example: [
          [
            'Loading',
            'Keep the query visible and show that results are loading',
          ],
          ['Empty', 'Explain there are no matches and offer Clear filters'],
          ['Failure', 'Keep the query and offer Retry'],
        ],
        proposedCheck: true,
      },
      {
        id: 'layer-regression-tests',
        name: 'Layer regression tests',
        decision:
          'I’d test rules close to the component, compare screenshots for layout drift and reserve end-to-end checks for the important journeys. That keeps failures easier to diagnose.',
        artifact:
          'This test plan uses a transfer form with validation, a review screen and a simulated receipt.',
        check:
          'I’d verify each test fails for its intended regression: an invalid amount accepted, a clipped review total, or a confirmation that fails to update sample balances.',
        example: [
          ['Component', 'Reject zero and amounts above the balance'],
          [
            'Visual',
            'Compare review layout at a narrow viewport in a stable test environment',
          ],
          [
            'End to end',
            'Enter, review and confirm, then verify both balances',
          ],
        ],
        reference: [
          'https://playwright.dev/docs/test-snapshots',
          'Playwright visual comparisons',
        ],
        proposedCheck: true,
      },
      {
        id: 'review-responsive-performance',
        name: 'Review responsive performance',
        decision:
          'I’d prioritise the form and the feedback needed to complete it. Loading optional history early can make the next step feel faster, but it competes with the current task on a slow connection.',
        artifact:
          'This review plan separates the initial render, the first interaction and the evidence I’d collect after release.',
        check:
          'I’d compare cold loads and first interactions under the same network and device conditions, then use field data by device class to see whether the improvement reaches visitors.',
        proposedCheck: true,
        example: [
          [
            'Initial render',
            'Show the form and reserve space for its feedback. Defer account history.',
          ],
          [
            'First interaction',
            'Trace typing and review on a throttled mobile profile. Check for delayed paint or layout shift.',
          ],
          [
            'Field review',
            'Compare mobile and desktop LCP and INP by route. Check that completion and error recovery remain stable.',
          ],
        ],
        reference: [
          'https://web.dev/case-studies/monrif-cwv',
          'Monrif performance case study, 2025',
        ],
      },
    ],
  },
]
