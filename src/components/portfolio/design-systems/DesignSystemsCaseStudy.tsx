import type { ReactNode } from 'react'
import { TokenExplorer } from './TokenExplorer'
import { ButtonDemo } from './ButtonDemo'
import { SaveItemExample } from './SaveItemExample'
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
          Design systems exploration · interactive prototypes
        </p>
        <p>
          I designed a token explorer, a React button and a component contract
          to show how design intent can carry from Figma specifications into
          code.
        </p>
        <p className="text-zinc-600 dark:text-zinc-300">
          Try the token and button prototypes below. I also outline how a Figma
          plugin and AI-assisted tooling could use the same relationships.
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
          I wanted designers and engineers to be able to review the same
          decision. I made the path from the palette to the rendered button
          visible so both can see what a token change would affect.
        </p>
      </Section>
      <Section index={1}>
        <p>
          A component-specific variable may reference a semantic variable, which
          references a foundational token in another collection or library. A
          dependency map shows which components and layers would change if that
          token were updated.
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
          I started with the button because a familiar component makes it easy
          to compare the design specification with what people can see and do in
          the browser. I used that example to sketch a workflow a team could use
          to review changes across design and code.
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
          I gave the primary and secondary actions separate semantic names so
          each can change independently of the palette. Select any node to trace
          its path from foundation colour to React variant.
        </p>
        <TokenExplorer />
        <p className="text-xs">
          I used two background paths in one sample mode to keep the mapping
          readable. The tooling proposal below extends that model to shared
          libraries and multiple modes.
        </p>
      </Section>
      <Section index={4}>
        <p>
          I specified the same variants, sizes and states on both sides of the
          handoff. In React I used CSS custom properties to keep the token
          aliases visible, and a native button so keyboard activation follows
          the browser’s built-in behaviour.
        </p>
        <ButtonDemo />
        <SaveItemExample />
      </Section>
      <Section index={5}>
        <p>
          I wrote the button contract as versioned JSON so designers and
          engineers can review the same allowed variants, usage rules and
          accessibility requirements. The same format could guide AI tools
          toward approved component choices.
        </p>
        <CodeBlock
          code={JSON.stringify(buttonContract, null, 2)}
          label="Button contract · illustrative JSON"
        />
        <p>
          I would pair the contract with a trusted component registry and
          validate generated proposals against the React implementation.
          Rendered checks would cover keyboard behaviour and contrast.
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
          I designed the token explorer to show how a button inherits its
          colour. For a larger Figma library, I sketched a tool that would trace
          those same relationships and show which components depend on a
          variable before a designer changes it.
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
          I would keep instance overrides and main component bindings separate
          in the export. That gives designers and engineers a way to tell
          whether a change affects one instance or the whole component set.
        </p>
      </Section>
    </article>
  )
}
