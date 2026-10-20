import { useState } from 'react'
import { layers, tokenFlows } from '@/data/designSystems'
export function TokenExplorer() {
  const [selected, setSelected] = useState('primary:0')
  const [flowId, index] = selected.split(':')
  const flow = tokenFlows.find((item) => item.id === flowId) || tokenFlows[0]
  return (
    <div className="my-5 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
      <p className="mb-4 text-xs text-zinc-600 dark:text-zinc-300">
        Illustrative sample data · Select any token to trace its complete
        dependency path.
      </p>
      <div className="grid gap-4 md:grid-cols-4">
        {layers.map((layer, i) => (
          <div key={layer}>
            <h3 className="mb-2 text-xs font-semibold">
              {i + 1}. {layer}
            </h3>
            <div className="space-y-2">
              {tokenFlows.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected === `${item.id}:${i}`}
                  onClick={() => setSelected(`${item.id}:${i}`)}
                  className={`w-full break-words rounded-lg border p-3 text-left font-mono text-xs ${
                    flowId === item.id
                      ? 'border-blue-600 bg-blue-50 text-blue-900 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-100'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
                  <span className="block text-xxs">
                    {flowId === item.id ? 'Connected path' : item.label}
                  </span>
                  {item.nodes[i]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p role="status" className="mt-4 break-words text-xs">
        <strong>Selected: {flow.nodes[Number(index)]}.</strong> {flow.label}:{' '}
        {flow.nodes.join(' → ')}. Resolved background: {flow.value}; white
        foreground. Arrows represent references from implementation back to
        foundation.
      </p>
    </div>
  )
}
