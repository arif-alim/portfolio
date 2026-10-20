import type { ReactNode } from 'react'
import { TokenExplorer } from './TokenExplorer'
import { ButtonDemo } from './ButtonDemo'
import { CodeBlock } from './CodeBlock'
import { buttonContract, inspectionSteps } from '@/data/designSystems'
const sections = [
  'Overview',
  'The Problem',
  'My Approach',
  'Token relationships',
  'Figma to React',
  'AI-readable contracts',
  'Design-system tooling',
]
function Section({ index, children }: { index: number; children: ReactNode }) {
  return (
    <section
      id={`section-${index}`}
      className="scroll-mt-8 space-y-4 border-t border-zinc-200 py-7 dark:border-zinc-700"
    >
      <h2 className="text-lg font-semibold">
        0{index + 1}. {sections[index]}
      </h2>
      {children}
    </section>
  )
}
export function DesignSystemsCaseStudy() {
  return (
    <article className="min-w-0">
      <div className="mb-7 space-y-3 text-sm">
        <p className="font-semibold text-blue-700 dark:text-blue-300">
          Architectural exploration · interactive demonstrations
        </p>
        <p>
          <strong>Category:</strong> Design Systems / Frontend Engineering / AI
          Tooling
          <br />
          <strong>Role explored:</strong> Design Systems Engineer / UI Architect
        </p>
        <p>
          Focus: Figma component architecture, semantic variables, variants and
          properties, plugin development, Figma-to-code workflows, React and
          TypeScript, CSS custom properties, Tailwind, accessibility and
          automated validation.
        </p>
        <p className="text-zinc-600 dark:text-zinc-300">
          Evidence boundary: the token explorer and Button below are implemented
          locally in this portfolio. Figma inspection workflows, automated
          synchronization and AI consumption are proposed architecture. No
          production package, customer deployment or external integration is
          claimed.
        </p>
      </div>
      <nav
        aria-label="Case study sections"
        className="mb-7 flex flex-wrap gap-x-5 gap-y-2 text-xs"
      >
        {sections.map((s, i) => (
          <a
            key={s}
            href={`#section-${i}`}
            className="underline underline-offset-4"
          >
            {s}
          </a>
        ))}
      </nav>
      <Section index={0}>
        <p>
          As a design system grows, a shared visual language becomes a
          dependency-management problem. Figma libraries and frontend components
          can drift when variables, semantic aliases, component states and
          documentation are maintained separately.
        </p>
        <p>
          This exploration asks how structured relationships could make that
          drift visible. The goal is to preserve design intent from a
          foundational token through a semantic decision to an accessible React
          component, with enough provenance for engineers to review a change.
        </p>
      </Section>
      <Section index={1}>
        <p>
          A component-specific variable may reference a semantic variable, which
          references a foundational token in another collection or library. A
          resolved hex value alone cannot explain which component or layer
          depends on that decision.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            External references and mode-specific aliases make ownership and
            impact difficult to trace.
          </li>
          <li>
            Manual token mapping can produce a visually similar implementation
            that loses the semantic relationship.
          </li>
          <li>
            Variant names, instance properties and interaction states can
            diverge between Figma and React.
          </li>
          <li>
            Accessibility cannot be inferred from a design screenshot: keyboard
            behavior, focus, names and contrast need explicit validation.
          </li>
        </ul>
      </Section>
      <Section index={2}>
        <p>
          My proposed workflow starts with inspection and a reviewable
          dependency graph, then defines the implementation contract. The local
          demonstrations exercise a small part of this approach; a Figma plugin
          and continuous validation pipeline remain future work.
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Inspect component sets, variable collections and layer bindings.
          </li>
          <li>
            Resolve aliases per mode to foundational references; detect cycles
            and unresolved library references.
          </li>
          <li>
            Identify component properties, states and reverse dependencies.
          </li>
          <li>
            Export relationships with stable identities, source metadata and
            explicit unresolved results.
          </li>
          <li>
            Define reusable React interfaces with constrained variants and
            native interaction semantics.
          </li>
          <li>
            Review documentation and run consistency checks before accepting a
            design-to-code update.
          </li>
        </ol>
      </Section>
      <Section index={3}>
        <p>
          A token is a reference with intent, not just a value. Select a node in
          either sample path to highlight all four layers. Each button is
          available through Tab and Enter/Space.
        </p>
        <TokenExplorer />
        <p className="text-xs">
          The sample uses one mode and two background paths. A real resolver
          would include collection IDs, library ownership, mode mappings and
          unresolved edges. Token names are illustrative; no Figma connection is
          made.
        </p>
      </Section>
      <Section index={4}>
        <p>
          The same bounded contract drives a sample Figma specification and an
          actual React preview. CSS custom properties retain semantic aliases;
          Tailwind supplies the surrounding layout and theme styling.
        </p>
        <ButtonDemo />
      </Section>
      <Section index={5}>
        <p>
          <strong>Future-facing architecture concept.</strong> A versioned
          component contract could serve three consumers: designers defining
          variants in Figma, engineers implementing typed React interfaces, and
          AI models reasoning about approved UI choices.
        </p>
        <CodeBlock
          code={JSON.stringify(buttonContract, null, 2)}
          label="Button contract · illustrative JSON"
        />
        <p>
          An AI consumer could select an allowed variant, resolve approved
          semantic tokens and check usage rules before generating JSX. The
          contract would need schema validation, a trusted component registry
          and checks against the actual implementation. Descriptive JSON alone
          does not guarantee compliant or accessible output.
        </p>
        <p>
          Version changes should distinguish additions from breaking removals.
          Generated proposals should retain the contract version and require the
          same review and rendered accessibility checks as human-authored
          components.
        </p>
      </Section>
      <Section index={6}>
        <p>
          No Figma inspection plugin or token export artifact was found in this
          repository. The following pipeline documents a proposed tooling
          design, rather than completed integration work.
        </p>
        <ol
          aria-label="Conceptual inspection pipeline"
          className="space-y-4 border-l-2 border-blue-300 pl-5"
        >
          {inspectionSteps.map(([name, detail], i) => (
            <li key={name}>
              <h3 className="font-semibold">
                {i + 1}. {name}
              </h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
        <p>
          For plugin development, separate document inspection from alias
          resolution and export formatting. Keep unavailable external libraries
          visible in the output, and distinguish an instance override from the
          main component definition. Reverse dependency edges should answer
          “which component and layer reference this variable?” before a token is
          changed.
        </p>
        <p>
          <strong>Next evidence to add:</strong> permission-cleared plugin
          source, a real anonymized alias graph, sample exports with mode
          coverage, and validation reports. Those artifacts would support claims
          about synchronization beyond this local demonstration.
        </p>
      </Section>
    </article>
  )
}
