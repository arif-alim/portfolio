export const processes = [
  {
    name: 'UI/UX Design',
    stages: [
      {
        title: 'Frame the Problem',
        description:
          'I clarify the user problem, business goals, requirements, and constraints with product and engineering partners. Reviewing the current experience and available evidence helps separate what we know from assumptions that need investigation.',
        activities:
          'Problem framing, current-state review, requirements, success measures.',
      },
      {
        title: 'Understand Users & Workflows',
        description:
          'I investigate how people complete tasks and where roles, permissions, or business rules create friction. Research and journey mapping help identify the workflows and exceptions the product needs to support.',
        activities:
          'User research, journey mapping, task flows, prioritised opportunities.',
      },
      {
        title: 'Structure the Experience',
        description:
          'I explore ways to organise information and support key tasks through sketches and wireframes. With engineering input, I work through navigation, forms, interactions, and the states beyond the happy path.',
        activities:
          'Information architecture, wireframes, interaction flows, state definitions.',
      },
      {
        title: 'Prototype & Validate',
        description:
          'I build prototypes at the fidelity needed to investigate specific questions and test realistic tasks with representative users. Findings guide revisions to flows, content, and interactions before the team commits to detail.',
        activities:
          'Prototyping, usability testing, design revisions, decision records.',
      },
      {
        title: 'Design & Deliver',
        description:
          'I resolve visual hierarchy, responsive behaviour, and component states using the design system where appropriate. Accessibility specifications, engineering collaboration, and Design QA help carry the design intent into implementation.',
        activities:
          'UI design, component variants, accessibility annotations, Design QA.',
      },
      {
        title: 'Measure & Iterate',
        description:
          'I review available product data, support feedback, and follow-up research against the original goals. I work with the team to distinguish usability issues from operational or technical problems and prioritise improvements.',
        activities:
          'Outcome review, user feedback, iteration planning, updated patterns.',
      },
    ],
  },
  {
    name: 'Service Design',
    stages: [
      {
        title: 'Define the Service',
        description:
          'I clarify the need the service addresses, who depends on it, and where it begins and ends. Mapping stakeholders, channels, policies, and operational constraints establishes a scope beyond the interface.',
        activities:
          'Service scope, stakeholder and ecosystem maps, constraints, research planning.',
      },
      {
        title: 'Research the Experience',
        description:
          'I investigate how customers access the service and how employees and frontline staff deliver it. Interviews and contextual inquiry reveal workarounds, repeated requests, handoff problems, and support needs.',
        activities:
          'Customer and employee research, observation, channel and workflow analysis.',
      },
      {
        title: 'Map the Current State',
        description:
          'I connect customer journeys with the frontstage interactions and backstage work that support them. Service blueprints make responsibilities, policy rules, systems, dependencies, and service gaps visible across teams.',
        activities:
          'Journey maps, service blueprints, handoff analysis, ownership gaps.',
      },
      {
        title: 'Co-design the Future State',
        description:
          'I bring customers, frontline staff, and relevant partners together to explore service concepts. We consider changes to people, policy, process, operations, and technology, then prioritise a future state with explicit tradeoffs.',
        activities:
          'Co-design workshops, service concepts, future-state blueprints, priorities.',
      },
      {
        title: 'Prototype the Service',
        description:
          'I test service concepts through walkthroughs, role-play, scripts, or limited pilots, depending on the question. Alongside the customer experience, I assess staffing, training, capacity, exceptions, and system dependencies.',
        activities:
          'Service prototypes, pilot findings, operational feasibility, revised procedures.',
      },
      {
        title: 'Deliver & Improve',
        description:
          'I work with service owners to turn the future state into a phased roadmap with clear responsibilities and measures. Customer and employee feedback, together with relevant service data, guide continued improvement.',
        activities:
          'Implementation roadmaps, ownership, service measurement, improvement backlog.',
      },
    ],
  },
  {
    name: 'Accessibility',
    stages: [
      {
        title: 'Define Accessibility Needs',
        description:
          'I identify potential barriers during discovery and consider different access needs and assistive technologies. I agree a technical target, such as WCAG 2.1 AA, while separately identifying applicable AODA requirements and organisational standards.',
        activities:
          'Inclusive research planning, accessibility requirements, acceptance criteria.',
      },
      {
        title: 'Design Inclusively',
        description:
          'I design content, navigation, and forms around understandable tasks, keyboard use, and error recovery. Early decisions address contrast, reading order, focus, zoom, and responsive behaviour without relying on colour alone.',
        activities:
          'Content hierarchy, accessible forms, focus sequences, responsive layouts.',
      },
      {
        title: 'Specify Accessible Behaviour',
        description:
          'I review design-system components and identify missing states or interaction guidance. Annotations connect visual designs with semantic structure, accessible names, keyboard behaviour, validation messages, and screen-reader announcements.',
        activities:
          'Component states, semantic specifications, focus management, design-system guidance.',
      },
      {
        title: 'Validate Implementation',
        description:
          'I use prototype reviews to investigate clarity and interaction, recognising that visual prototypes cannot establish accessibility conformance. I collaborate with developers on coded components and journeys to review focus transitions, form errors, and dynamic content early.',
        activities:
          'Prototype reviews, coded interaction checks, implementation feedback, early fixes.',
      },
      {
        title: 'Test the Experience',
        description:
          'I combine automated checks with manual keyboard, screen-reader, contrast, zoom, and responsive testing. I assess complete tasks across relevant browsers and assistive technologies, involving people with disabilities where possible.',
        activities:
          'Manual and automated testing, task validation, Design QA, prioritised findings.',
      },
      {
        title: 'Remediate & Improve',
        description:
          'I work with design and engineering to prioritise barriers, verify fixes, and retest affected journeys. Findings feed back into components, guidance, and regression checks so accessibility remains part of ongoing delivery.',
        activities:
          'Remediation, retesting, regression coverage, updated component guidance.',
      },
    ],
  },
  {
    name: 'Frontend Development',
    stages: [
      {
        title: 'Clarify Intent & Constraints',
        description:
          'I review requirements, Figma designs, and design-system specifications to understand the intended experience and its behaviour. I resolve missing states, responsive rules, data dependencies, and feasibility questions with the team.',
        activities:
          'Design review, technical feasibility, acceptance criteria, implementation questions.',
      },
      {
        title: 'Plan Components',
        description:
          'I break the interface into focused, reusable components and decide where state and responsibilities belong. For React work, I define component interfaces and data shapes in TypeScript or JavaScript, keeping the architecture proportional to the problem.',
        activities:
          'Component architecture, data contracts, state ownership, implementation planning.',
      },
      {
        title: 'Build the Interface',
        description:
          'I implement layouts, interactions, and component states using the established design system. Semantic HTML, keyboard support, focus handling, and responsive behaviour are built in, with Storybook used where it supports component validation.',
        activities:
          'React components, responsive styling, accessible interactions, component examples.',
      },
      {
        title: 'Connect Data & Behaviour',
        description:
          'I connect REST APIs or other existing data sources where the product requires them. Loading, empty, error, success, validation, and permission states make the interface understandable when conditions change or requests fail.',
        activities:
          'API integration, application state, validation, recovery paths.',
      },
      {
        title: 'Test & Optimize',
        description:
          'I test important interactions and user journeys, then compare the implementation with the design intent. Accessibility reviews, cross-browser checks, responsive testing, and performance measurements guide focused fixes.',
        activities:
          'Component and integration tests, browser validation, performance review, Design QA.',
      },
      {
        title: 'Release & Iterate',
        description:
          'I collaborate with engineering and QA on release readiness and verify key journeys in the target environment. Reported issues and observed behaviour guide interface improvements and updates to shared components.',
        activities:
          'Deployment collaboration, release verification, issue triage, component updates.',
      },
    ],
  },
]
