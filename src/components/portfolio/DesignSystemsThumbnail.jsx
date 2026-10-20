export function DesignSystemsThumbnail() {
  const surface =
    'fill-zinc-50 stroke-zinc-300 dark:fill-zinc-800 dark:stroke-zinc-600'
  const accent = 'fill-none stroke-blue-600 dark:stroke-blue-400'

  return (
    <div className="absolute inset-x-4 bottom-4 top-12 flex items-center justify-center">
      <svg
        role="img"
        aria-label="Figma to Design Tokens to React Components to AI-Readable Contracts"
        viewBox="0 0 320 132"
        className="h-full w-full max-w-[360px] text-zinc-900 dark:text-zinc-100"
      >
        <g strokeWidth="1">
          <rect
            x="1"
            y="1"
            width="142"
            height="50"
            rx="8"
            className={surface}
          />
          <rect
            x="177"
            y="1"
            width="142"
            height="50"
            rx="8"
            className={surface}
          />
          <rect
            x="177"
            y="81"
            width="142"
            height="50"
            rx="8"
            className={surface}
          />
          <rect
            x="1"
            y="81"
            width="142"
            height="50"
            rx="8"
            className={surface}
          />
        </g>

        {/* Reference flow: design → tokens → implementation → contract. */}
        <g
          className={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M149 26h20m-4-4 4 4-4 4M248 57v18m-4-4 4 4 4-4M171 106h-20m4-4-4 4 4 4" />
          {/* Component / variable / code / structured-data symbols. */}
          <path d="m24 16 10 10-10 10-10-10Z M24 16v20M14 26h20" />
          <rect x="192" y="16" width="8" height="8" rx="2" />
          <rect x="204" y="16" width="8" height="8" rx="2" />
          <rect x="192" y="28" width="8" height="8" rx="2" />
          <rect x="204" y="28" width="8" height="8" rx="2" />
          <path d="m199 98-7 8 7 8m8-16 7 8-7 8m-5-19-3 22M20 96h-3v7l-3 3 3 3v7h3m8-20h3v7l3 3-3 3v7h-3" />
        </g>
        <g
          fill="currentColor"
          fontFamily="inherit"
          fontSize="13"
          fontWeight="600"
        >
          <text x="44" y="31">
            Figma
          </text>
          <text x="222" y="23">
            Design
          </text>
          <text x="222" y="39">
            Tokens
          </text>
          <text x="222" y="103">
            React
          </text>
          <text x="222" y="119">
            Components
          </text>
          <text x="44" y="103">
            AI-Readable
          </text>
          <text x="44" y="119">
            Contracts
          </text>
        </g>
      </svg>
    </div>
  )
}
