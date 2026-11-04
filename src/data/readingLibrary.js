export const readingGroups = [
  {
    id: 'design-systems',
    name: 'Design Systems',
    description:
      'Component libraries, tokens and the practices that help teams adopt them.',
    articles: [
      {
        title: 'How to document your design system: best practices & tools',
        url: 'https://storybook.js.org/blog/how-to-document-your-design-system-best-practices-tools/',
        byline: 'Varun Vachhar',
        date: '2026-08-31',
        note: 'Use its documentation structure to decide which guidance belongs in a component story and which belongs in a shared reference.',
        tags: ['Documentation', 'Design QA'],
      },
      {
        title: 'How Decagon uses AI for design system saturation',
        url: 'https://www.figma.com/blog/how-decagon-uses-ai-for-design-system-saturation/',
        byline: 'Jenny Xie',
        date: '2026-07-10',
        note: 'Decagon’s account shows how to identify where teams bypass shared components and make the approved pattern easier to reuse.',
        tags: ['Adoption', 'Figma-to-code'],
      },
      {
        title: 'Storybook 10.3',
        url: 'https://storybook.js.org/blog/storybook-10-3/',
        byline: 'Michael Shilman',
        date: '2026-04-06',
        note: 'See how stories, documentation and focused component tests make a library easier for people and agents to use.',
        tags: ['Components', 'Design QA'],
      },
      {
        title: 'Build with more context and more control in Figma Make',
        url: 'https://www.figma.com/blog/introducing-make-kits-and-make-attachments/',
        byline: 'Ben Smit and Darragh Burke',
        date: '2026-04-02',
        note: 'Compare a reusable kit with one-off attachments when deciding how much design context a prototype needs.',
        tags: ['Figma-to-code', 'Prototyping'],
      },
      {
        title: 'Design Tokens Format Module 2025.10',
        url: 'https://www.designtokens.org/TR/2025.10/format/',
        byline: 'Design Tokens Community Group',
        date: '2025-10-28',
        note: 'Use the format’s rules for types and aliases to make token exchange between tools predictable.',
        tags: ['Tokens', 'Theming'],
        foundational: true,
      },
      {
        title: 'Storybook 10',
        url: 'https://storybook.js.org/blog/storybook-10/',
        byline: 'Michael Shilman',
        date: '2025-10-28',
        note: 'Check what an ESM-only release and a more strongly typed story format would change in a component library migration.',
        tags: ['Components', 'Migration'],
        foundational: true,
      },
    ],
  },
  {
    id: 'product-design',
    name: 'Product Design',
    description:
      'Interaction decisions, prototypes and ways to make the work easier to review.',
    articles: [
      {
        title: 'What are the principles of prototyping?',
        url: 'https://designnotes.blog.gov.uk/2026/09/29/what-are-the-principles-of-prototyping/',
        thumbnail: {
          src: '/images/reading/prototyping-principles.webp',
          source:
            'https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2026/09/PrototypingPoster.jpg',
          alt: 'A blue poster listing nine principles for prototyping.',
          credit:
            'Government Digital Service, © Crown copyright, Open Government Licence v3.0',
        },
        byline: 'Charlie Fountaine',
        date: '2026-09-29',
        note: 'Choose the smallest prototype that can answer the question, including an email or conversation when the risk sits outside the interface.',
        tags: ['Prototyping', 'Discovery'],
      },
      {
        title: 'Issue no.18: Show your work',
        url: 'https://www.figma.com/blog/show-your-work/',
        byline: 'Figma',
        date: '2026-09-09',
        note: 'Use the examples of sharing work in progress to consider what a reviewer needs to see before giving useful feedback.',
        tags: ['Design critique', 'Collaboration'],
      },
      {
        title: 'Designing GOV.UK Chat for the GOV.UK app',
        url: 'https://insidegovuk.blog.gov.uk/2026/08/19/designing-gov-uk-chat-for-the-gov-uk-app/',
        thumbnail: {
          src: '/images/reading/govuk-chat-design.webp',
          source:
            'https://insidegovuk.blog.gov.uk/wp-content/uploads/sites/24/2026/08/01_Redesigning-Chat_Header-Image.png',
          alt: 'A montage of GOV.UK Chat mobile screens, including conversation and feedback views.',
          credit:
            'Government Digital Service, © Crown copyright, Open Government Licence v3.0',
        },
        byline: 'Christine Wuerth and Monica Crusellas',
        date: '2026-08-19',
        note: 'See which interaction and transparency decisions the team revisited when moving a web chat experience into an app.',
        tags: ['Native mobile', 'Interaction design'],
      },
      {
        title:
          'Workflow lab: AI image tooling and interactive prototyping in Figma',
        url: 'https://www.figma.com/blog/workflow-lab-ai-image-tooling/',
        byline: 'Mallory Dean',
        date: '2026-02-27',
        note: 'Follow a workflow that moves from rough visual exploration to an interactive prototype people can actually try.',
        tags: ['Prototyping', 'Interaction design'],
      },
      {
        title:
          "Show don't tell: Embed Make prototypes everywhere you work in Figma",
        url: 'https://www.figma.com/blog/introducing-figma-make-embeds/',
        byline: 'Nikolas Klein',
        date: '2026-01-22',
        note: 'Put a working interaction beside the design conversation so reviewers can experience behaviour as well as inspect screens.',
        tags: ['Prototyping', 'Design critique'],
      },
      {
        title: '10 Usability Heuristics for User Interface Design',
        url: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
        thumbnail: {
          src: '/images/reading/usability-heuristics.webp',
          source:
            'https://media.nngroup.com/media/editor/2020/11/05/heuristic-example-1-rbg-73.png',
          alt: 'A person uses a mall directory with a You Are Here marker, illustrating visibility of system status.',
          credit: 'Nielsen Norman Group',
        },
        byline: 'Jakob Nielsen',
        date: '1994-04-24',
        note: 'Use the heuristics to turn critique into specific questions about status, consistency and error recovery.',
        tags: ['Interaction design', 'Design QA'],
        foundational: true,
      },
    ],
  },
  {
    id: 'service-design',
    name: 'Service Design',
    description:
      'Journeys, assisted channels and the backstage work that makes a service function.',
    articles: [
      {
        title: 'Designing services for people who’ve lost trust online',
        url: 'https://designnotes.blog.gov.uk/2026/06/23/designing-services-for-people-whove-lost-trust-online/',
        thumbnail: {
          src: '/images/reading/designing-for-trust.webp',
          source:
            'https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2026/06/message.jpg',
          alt: 'An illustrated warning message on a blue background.',
          credit:
            'Government Digital Service, © Crown copyright, Open Government Licence v3.0',
        },
        byline: 'Rachel Malic',
        date: '2026-06-23',
        note: 'Look at a payment journey from the perspective of someone who has learned to treat unexpected online instructions with suspicion.',
        tags: ['Trust', 'Service journeys'],
      },
      {
        title: 'Map your users’ and system’s journeys',
        url: 'https://digital.gov/guides/research-collaboration/user-needs/journeys',
        byline: 'Digital.gov',
        date: '2026-04-29',
        note: 'Use the distinction between a journey map and a blueprint to connect a visible problem to the team or system behind it.',
        tags: ['Service blueprints', 'Service journeys'],
      },
      {
        title:
          'When AI answers the question, what happens to the user journey?',
        url: 'https://designnotes.blog.gov.uk/2026/03/31/when-ai-answers-the-question-what-happens-to-the-user-journey/',
        byline: 'Mark Edwards',
        date: '2026-03-31',
        note: 'Revisit what people know at the start of a journey when an AI answer can precede their first visit to the service.',
        tags: ['Service journeys', 'AI discovery'],
      },
      {
        title: 'Assisted digital support: an introduction',
        url: 'https://www.gov.uk/service-manual/helping-people-to-use-your-service/assisted-digital-support-introduction',
        byline: 'Government Digital Service',
        date: '2025-12-18',
        note: 'Use the examples of support needs to decide when someone should be able to get help completing a digital task.',
        tags: ['Assisted channels', 'Inclusion'],
        updated: true,
      },
      {
        title:
          'Developing service patterns - reusable designs for building government services',
        url: 'https://services.blog.gov.uk/2025/03/19/developing-service-patterns-reusable-designs-for-building-government-services/',
        thumbnail: {
          src: '/images/reading/service-patterns.webp',
          source:
            'https://services.blog.gov.uk/wp-content/uploads/sites/231/2025/03/Apply-service-pattern-prototype.jpg',
          alt: 'A laptop displaying a prototype of the Apply service pattern.',
          credit: 'Services in government, CC BY 4.0',
        },
        byline: 'Martin Ford-Downes, Lindsay Stephens and Gareth Thomas',
        date: '2025-03-19',
        note: 'See how teams can document recurring service activities in a way that makes them reusable across departments.',
        tags: ['Service patterns', 'Handoffs'],
        foundational: true,
      },
      {
        title: 'Measuring completion rate',
        url: 'https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate',
        byline: 'Government Digital Service',
        date: '2021-02-19',
        note: 'Define the start, the end and the eligible attempts before comparing how many people complete a service.',
        tags: ['Service measurement', 'Analytics'],
        foundational: true,
        updated: true,
      },
    ],
  },
  {
    id: 'front-end',
    name: 'Front-end',
    description:
      'Browser capabilities, component implementation and performance trade-offs.',
    articles: [
      {
        title: 'New to the web platform in September',
        url: 'https://web.dev/blog/web-platform-09-2026',
        byline: 'Rachel Andrew',
        date: '2026-10-02',
        note: 'Use the September roundup to spot browser support changes worth checking before simplifying a fallback.',
        tags: ['CSS', 'Browser support'],
      },
      {
        title: 'Improving site performance by shipping more CSS',
        url: 'https://github.blog/engineering/architecture-optimization/improving-site-performance-by-shipping-more-css/',
        byline: 'Josh Black and Marie Lucca',
        date: '2026-09-25',
        note: 'See why separating critical styles from deferred CSS can make a page faster even when the total stylesheet payload grows.',
        tags: ['CSS', 'Performance'],
      },
      {
        title:
          "How Nuvemshop's image prioritization strategy led to a 68% improvement in LCP and 8.9% more conversions",
        url: 'https://web.dev/case-studies/nuvemshop',
        thumbnail: {
          src: '/images/reading/nuvemshop-performance.webp',
          source:
            'https://web.dev/static/case-studies/nuvemshop/image/thumbnail.png',
          alt: 'A chart illustration alongside a headline about Nuvemshop’s image prioritization and performance gains.',
          credit: 'Google (web.dev), CC BY 4.0',
        },
        byline:
          'Federico Iglesias, Jesus Biaggioni, Kaio Graco Cardamone, Lucas Demarchi and Mari Viana',
        date: '2026-06-24',
        note: 'Identify the likely largest image before raising its fetch priority, and check that competing images stay out of the critical path.',
        tags: ['Performance', 'Responsive design'],
      },
      {
        title: 'New to the web platform in April',
        url: 'https://web.dev/blog/web-platform-04-2026',
        byline: 'Rachel Andrew',
        date: '2026-04-24',
        note: 'Check where new colour and announcement features can be used before choosing a fallback.',
        tags: ['CSS', 'Browser support'],
      },
      {
        title: 'Interop 2026: Continuing to improve the web for developers',
        url: 'https://web.dev/blog/interop-2026',
        thumbnail: {
          src: '/images/reading/interop-2026.webp',
          source: 'https://web.dev/static/blog/interop-2026/image/hero.png',
          alt: 'The Interop 2026 headline on a blue grid background.',
          credit: 'Google (web.dev), CC BY 4.0',
        },
        byline: 'Rachel Andrew',
        date: '2026-02-12',
        note: 'Use the interop priorities to identify browser differences worth testing around dialogs, popovers and positioning.',
        tags: ['Browser support', 'Design QA'],
      },
      {
        title:
          'How Monrif improved engagement by 8.9% and reduced LCP by 17.9% with Speculation Rules prerender and back/forward cache',
        url: 'https://web.dev/case-studies/monrif-cwv',
        thumbnail: {
          src: '/images/reading/monrif-performance.webp',
          source:
            'https://web.dev/static/case-studies/monrif-cwv/image/thumbnail.png',
          alt: 'A chart illustration alongside a headline about Monrif’s performance and engagement gains.',
          credit: 'Google (web.dev), CC BY 4.0',
        },
        byline: 'Fabrizio Guerra and Gianni Onnis',
        date: '2025-12-09',
        note: 'Compare speculative loading and back-forward caching against field data before assuming they improve every navigation equally.',
        tags: ['Performance', 'Navigation'],
      },
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    description:
      'Keyboard, assistive technology and inclusive behaviour across web and mobile.',
    articles: [
      {
        title: 'Introducing the Accessible Components Library',
        url: 'https://tetralogical.com/blog/2026/10/14/accessible-components-library/',
        byline: 'Craig Abbott',
        date: '2026-10-14',
        note: 'Use the component examples to compare expected keyboard and assistive technology behaviour with what your implementation actually does.',
        tags: ['Components', 'Design QA'],
      },
      {
        title: 'Building accessibility into a canvas-based product',
        url: 'https://www.figma.com/blog/building-accessibility-into-a-canvas-based-product/',
        byline: 'David Winslow and Elynn Lee',
        date: '2026-07-01',
        note: 'Follow how a canvas-based editor exposes structure and interaction to assistive technology when the visual surface alone cannot.',
        tags: ['Keyboard', 'Screen readers'],
      },
      {
        title: 'Optimizing your 2026 accessibility roadmap',
        url: 'https://www.deque.com/blog/optimizing-your-2026-accessibility-roadmap/',
        byline: 'Matthew Luken',
        date: '2026-02-06',
        note: 'Use the roadmap to connect remediation priorities with the team practices needed to prevent repeat issues.',
        tags: ['Design QA', 'Governance'],
      },
      {
        title: 'Live Region Support',
        url: 'https://adrianroselli.com/2026/01/live-region-support.html',
        byline: 'Adrian Roselli',
        date: '2026-01-14',
        note: 'Check live announcement behaviour across actual browser and screen reader combinations before relying on one implementation.',
        tags: ['Screen readers', 'Status messages'],
      },
      {
        title:
          'Accessibility audit of the Met Office app: outcomes and learnings',
        url: 'https://accessibility.blog.gov.uk/2025/01/14/accessibility-audit-of-the-met-office-app-outcomes-and-learnings/',
        thumbnail: {
          src: '/images/reading/met-office-accessibility.webp',
          source:
            'https://accessibility.blog.gov.uk/wp-content/uploads/sites/52/2024/12/met-office-app-620x465.jpg',
          alt: 'The Met Office app showing the Bristol forecast in dark mode.',
          credit:
            'Government Digital Service, © Crown copyright, Open Government Licence v3.0',
        },
        byline: 'Andrew Hick, Eu-Hyung Han and Sophie Yeomans-Smith',
        date: '2025-01-14',
        note: 'See how tandem testing helped the audit team reconcile expected behaviour with what screen readers announced on each platform.',
        tags: ['Native mobile', 'Design QA'],
        foundational: true,
      },
      {
        title: 'Web Content Accessibility Guidelines (WCAG) 2.2',
        url: 'https://www.w3.org/TR/WCAG22/',
        byline: 'World Wide Web Consortium',
        date: '2024-12-12',
        note: 'Use the normative criteria to turn reflow, focus and target size requirements into checks for a real interface.',
        tags: ['Standards', 'Design QA'],
        foundational: true,
      },
    ],
  },
  {
    id: 'ux-research',
    name: 'UX Research',
    description:
      'Choosing methods, including participants and evaluating the tools that shape evidence.',
    articles: [
      {
        title: 'Dogfooding vs. QA vs. User Research',
        url: 'https://www.nngroup.com/articles/dogfooding/',
        byline: 'Therese Fessenden',
        date: '2026-08-07',
        note: 'Use the comparison to decide whether an internal pilot can answer your question or whether you need to recruit people who are new to the product.',
        tags: ['Research methods', 'Design QA'],
      },
      {
        title: 'Incentive Structures for Diary Studies',
        url: 'https://www.nngroup.com/articles/diary-study-incentives/',
        thumbnail: {
          src: '/images/reading/diary-study-incentives.webp',
          source:
            'https://media.nngroup.com/media/editor/2026/06/05/tiered-payment-horizontal.png',
          alt: 'A four-week diagram showing how higher and lower payments are tiered across diary entries.',
          credit: 'Nielsen Norman Group',
        },
        byline: 'Maria Rosala',
        date: '2026-06-19',
        note: 'Match diary-study incentives to the quality and cadence of contributions you need without rewarding volume alone.',
        tags: ['Diary studies', 'Recruitment'],
      },
      {
        title: 'The Methodological Problems Hiding in Your Research Tools',
        url: 'https://www.nngroup.com/articles/research-tool-problems/',
        byline: 'Maria Rosala',
        date: '2026-03-13',
        note: 'Check where a research platform’s defaults can change participant behaviour or distort what your study measures.',
        tags: ['Research methods', 'Research operations'],
      },
      {
        title:
          'Statistical Significance Isn’t the Same as Practical Significance',
        url: 'https://www.nngroup.com/articles/practical-significance/',
        thumbnail: {
          src: '/images/reading/practical-significance.webp',
          source:
            'https://media.nngroup.com/media/editor/2026/02/16/practical-significance-image.png',
          alt: 'A checkout A/B test shows 85% and 85.2% completion rates, illustrating statistical significance with a small practical difference.',
          credit: 'Nielsen Norman Group',
        },
        byline: 'Rachel Banawa',
        date: '2026-03-06',
        note: 'Set a threshold for a change worth acting on before interpreting the statistical result.',
        tags: ['Measurement', 'Experimentation'],
      },
      {
        title:
          'Unlocking Accessibility: User researchers share their approach to digital accessibility and recruiting people with disabilities',
        url: 'https://accessibility.blog.gov.uk/2025/01/07/unlocking-accessibility-user-researchers-share-their-approach-to-digital-accessibility-and-recruiting-people-with-disabilities/',
        thumbnail: {
          src: '/images/reading/recruiting-accessibility-research.webp',
          source:
            'https://accessibility.blog.gov.uk/wp-content/uploads/sites/52/2024/12/49613290571_6e72bffcfe_k.jpg',
          alt: 'People work with colourful notes around a table during a workshop.',
          credit:
            'Government Digital Service, © Crown copyright, Open Government Licence v3.0',
        },
        byline: 'Kelly Clarkson and Samantha Merrett',
        date: '2025-01-07',
        note: 'Plan recruitment and sessions around participants’ access needs so the method gives them a fair chance to contribute.',
        tags: ['Recruitment', 'Inclusion'],
        foundational: true,
      },
      {
        title: 'When to Use Which User-Experience Research Methods',
        url: 'https://www.nngroup.com/articles/which-ux-research-methods/',
        thumbnail: {
          src: '/images/reading/ux-research-methods.webp',
          source:
            'https://media.nngroup.com/media/editor/2022/07/07/landscape-2022-07-06.png',
          alt: 'A chart positions 20 UX research methods by what they measure and how data is collected.',
          credit: 'Nielsen Norman Group',
        },
        byline: 'Christian Rohrer',
        date: '2022-07-17',
        note: 'Choose a method by the kind of evidence you need, including what people report and what they actually do.',
        tags: ['Research methods', 'Discovery'],
        foundational: true,
      },
    ],
  },
  {
    id: 'ai-design-engineering',
    name: 'AI & Design Engineering',
    description:
      'Practical ways to prototype, evaluate and review AI-assisted work.',
    articles: [
      {
        title:
          '3 ways product designers use the Figma agent for craft, speed, and creative expression',
        url: 'https://www.figma.com/blog/3-ways-product-designers-use-the-figma-agent/',
        byline: 'Jenny Xie',
        date: '2026-10-06',
        note: 'Compare the reported workflows to decide where an agent could help explore options and where the designer needs to retain judgement.',
        tags: ['Prototyping', 'Figma-to-code'],
      },
      {
        title: 'Use AI tools in Home Office Digital product teams',
        url: 'https://engineering.homeoffice.gov.uk/principles/use-ai-tools/',
        byline: 'Home Office Digital',
        date: '2026-05-18',
        note: 'Use the team guidance to discuss where generated code or a review suggestion still needs an engineer’s assessment.',
        tags: ['Engineering workflow', 'Design QA'],
        updated: true,
      },
      {
        title:
          'Developing GOV.UK Chat: Our data science and AI engineering journey',
        url: 'https://insidegovuk.blog.gov.uk/2026/05/15/developing-gov-uk-chat-our-data-science-and-ai-engineering-journey/',
        thumbnail: {
          src: '/images/reading/govuk-chat-engineering.webp',
          source:
            'https://insidegovuk.blog.gov.uk/wp-content/uploads/sites/24/2026/05/image2.png',
          alt: 'A process diagram traces a user question through retrieval, language model generation and a response.',
          credit:
            'Government Digital Service, © Crown copyright, Open Government Licence v3.0',
        },
        byline: 'Alessia Tosi and Nick Lange',
        date: '2026-05-15',
        note: 'Follow how the team connects retrieval, answer generation and evaluation when improving a public assistant.',
        tags: ['Evaluation', 'Engineering workflow'],
      },
      {
        title:
          '5 things we learned testing GOV.UK Chat: an AI assistant for government',
        url: 'https://insidegovuk.blog.gov.uk/2026/03/16/5-things-we-learned-testing-gov-uk-chat-an-ai-assistant-for-government/',
        thumbnail: {
          src: '/images/reading/govuk-chat-testing.webp',
          source:
            'https://insidegovuk.blog.gov.uk/wp-content/uploads/sites/24/2026/03/Chat-Blog-Header-Image-960-x-640.png',
          alt: 'A dark blue graphic titled Learnings from Chat.',
          credit:
            'Government Digital Service, © Crown copyright, Open Government Licence v3.0',
        },
        byline: 'Sam Dub and Sharon McDonald',
        date: '2026-03-16',
        note: 'Use the pilot findings to test what happens when an assistant cannot confidently answer the question a person asks.',
        tags: ['Evaluation', 'Recovery'],
      },
      {
        title: 'Figma MCP server can now generate design layers from VS Code',
        url: 'https://github.blog/changelog/2026-03-06-figma-mcp-server-can-now-generate-design-layers-from-vs-code/',
        byline: 'GitHub',
        date: '2026-03-06',
        note: 'See how a team can send rendered UI back to editable Figma layers for another design review.',
        tags: ['Figma-to-code', 'Engineering workflow'],
      },
      {
        title: 'How to maximize GitHub Copilot’s agentic capabilities',
        url: 'https://github.blog/ai-and-ml/github-copilot/how-to-maximize-github-copilots-agentic-capabilities/',
        byline: 'Ari LiVigni',
        date: '2026-02-02',
        note: 'Use the examples to give a coding agent bounded repository context and review its changes in a familiar development workflow.',
        tags: ['Engineering workflow', 'Design QA'],
      },
    ],
  },
]
