/** Entirely fictional portfolio example. No CBSA processes, data or schemas. */
export const blueprintStages = [
  {
    id: 'prepare',
    title: 'Prepare',
    user: 'Read what the fictional information service needs.',
    frontstage: 'Show a short preparation checklist.',
    backstage: 'Maintain guidance for the example service.',
    dependency: 'Example guidance catalogue',
    decision: 'Ready to describe the request?',
  },
  {
    id: 'request',
    title: 'Request',
    user: 'Describe the information needed using a sample request.',
    frontstage: 'Show a request summary and required details.',
    backstage: 'Check whether the sample description is complete.',
    dependency: 'Local completeness check',
    decision: 'Are the sample details complete?',
  },
  {
    id: 'review',
    title: 'Review',
    user: 'Check the request status and next action.',
    frontstage:
      'Explain whether more information is needed or review can begin.',
    backstage: 'Route a complete sample to a fictional review queue.',
    dependency: 'Mock review queue',
    decision: 'Request more detail or continue?',
  },
  {
    id: 'response',
    title: 'Response',
    user: 'Read the example response and next steps.',
    frontstage: 'Present a fictional completion message.',
    backstage: 'Mark the sample request as complete in memory.',
    dependency: 'Example response template',
    decision: 'Is the next action clear?',
  },
] as const

export const blueprintDecisions = [
  [
    'Separate service layers',
    'User actions, frontstage interactions and backstage work stay aligned at each stage.',
  ],
  [
    'Make dependencies visible',
    'Each stage names the fictional supporting dependency, making handoffs easier to discuss.',
  ],
  [
    'Expose the decision point',
    'Changing completeness shows how one decision affects both the visible message and backstage routing.',
  ],
] as const
