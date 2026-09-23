export function ManulifeSummary() {
  const responsibilities = [
    'Document detailed user experience specifications.',
    'Design user interfaces by applying the fundamental principles of user experience design, research experience, industry best practices and balancing those against system constraints and business objectives.',
    'Create and revise user flows, sitemaps and low and high-fidelity wireframes based on specifications, goals, needs and limitations.',
    'Develop rapid interactional UX prototypes; verify design assumptions through concept and usability testing.',
    'Lead design review sessions with project teams, acquiring consensus and approval on designs and documentation.',
    'Create final visual mockups against wireframes, in keeping with the company brand standards, UX guidelines and accessibility legislation (AODA/WCAG).',
    'Provide final design assets and documentation to the development team; liaise to ensure final output matches UX specifications and visual design.',
  ]

  const contributions = [
    "Collaborated with Product, Marketing, Business, and IS teams to gather comprehensive requirements for Manulife's Plan Administrator Site, translating into strategic UX redesigns that align with business objectives to enhance overall usability.",
    'Reworked navigation flows and content hierarchy around key destinations and administrative tasks.',
    "Coordinated and led UX design reviews covering business goals, Manulife's brand standards, and accessibility requirements (AODA/WCAG).",
    "Developed clickable prototypes for usability testing on UserTesting.com and leveraged Google Analytics data to gather both qualitative and quantitative feedback, driving data-informed iterative improvements to enhance user experience and interface functionality for Manulife's Plan Administrator Site and Disability Portal.",
  ]

  return (
    <div className="flex flex-col lg:gap-x-8">
      <div className="col-span-full mb-4 text-lg font-semibold">
        <h2>Summary</h2>
      </div>
      <div className="max-w-3xl lg:mt-0">
        <p>
          Work with Product, Marketing, Business and IS teams to obtain and
          understand business, functional and technical requirements.
        </p>
        <ul className="list-disc pl-2 lg:pl-8">
          {responsibilities.map((item, idx) => (
            <li key={idx} className={idx === 0 ? 'mt-4' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-full my-4 text-lg font-semibold lg:mt-8">
        <h2>Contributions</h2>
      </div>
      <div className="max-w-3xl lg:mt-0">
        <ul className="list-disc pl-2 lg:pl-8">
          {contributions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
