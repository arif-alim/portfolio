import { useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import type { CaseStudyArtifact as Artifact } from './types'
import { ArtifactImage } from './ArtifactImage'
import styles from './CaseStudy.module.css'
export function ArtifactGallery({
  title,
  description,
  artifacts,
  sequence = false,
}: {
  title: string
  description: string
  artifacts: Artifact[]
  sequence?: boolean
}) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [original, setOriginal] = useState(false)
  const opener = useRef<HTMLButtonElement | null>(null)
  const current = artifacts[index]
  if (!current) return null
  const frameWidth = current.crop?.width || current.source.width
  const frameHeight = current.crop?.height || current.source.height
  const portrait = frameHeight / frameWidth > 2
  function closeViewer() {
    setOpen(false)
    requestAnimationFrame(() => opener.current?.focus())
  }
  function move(delta: number) {
    setIndex((i) => Math.max(0, Math.min(artifacts.length - 1, i + delta)))
  }
  function controls() {
    return (
      <div className={styles.frameControls}>
        <button
          type="button"
          className={styles.frameButton}
          aria-label="Previous frame"
          disabled={index === 0}
          onClick={() => move(-1)}
        >
          <ChevronLeftIcon aria-hidden="true" className="h-3.5 w-3.5" />
          Previous
        </button>
        <p role="status" className="whitespace-nowrap text-xs tabular-nums">
          <span className="sr-only">Frame </span>
          {index + 1} of {artifacts.length}
        </p>
        <button
          type="button"
          className={styles.frameButton}
          aria-label="Next frame"
          disabled={index === artifacts.length - 1}
          onClick={() => move(1)}
        >
          Next
          <ChevronRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      </div>
    )
  }
  return (
    <section
      aria-label={title}
      className={`${styles.root} space-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-700`}
    >
      <div className="max-w-3xl">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      </div>
      {sequence ? (
        <div
          tabIndex={0}
          aria-label={`${title} frame viewer. Use left and right arrow keys.`}
          className="space-y-3"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
              e.preventDefault()
              move(e.key === 'ArrowRight' ? 1 : -1)
            }
          }}
        >
          {controls()}
          <button
            type="button"
            aria-label={`Enlarge ${current.label}`}
            style={{
              width: `min(100%, ${
                portrait ? 399 : (440 * frameWidth) / frameHeight + 24
              }px)`,
            }}
            className="block w-full rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800"
            onClick={(event) => {
              opener.current = event.currentTarget
              setOriginal(false)
              setOpen(true)
            }}
          >
            <ArtifactImage
              artifact={current}
              maxHeight={440}
              preview={portrait}
            />
          </button>
          <p className="text-xs">
            {current.label} · Select the image to enlarge. Source order is
            preserved; frame numbers are not verified task steps.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
          {artifacts.map((artifact, i) => (
            <figure key={artifact.id}>
              <button
                type="button"
                aria-label={`Enlarge ${artifact.label}`}
                className="block w-full rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800"
                onClick={(event) => {
                  opener.current = event.currentTarget
                  setIndex(i)
                  setOriginal(false)
                  setOpen(true)
                }}
              >
                <ArtifactImage artifact={artifact} preview />
              </button>
              <figcaption className="mt-2 text-xs">
                {artifact.label} · Click to inspect
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      <Dialog
        open={open}
        onClose={closeViewer}
        className={`fixed inset-0 z-50 ${styles.root}`}
        onKeyDown={(e) => {
          if (!original && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
            e.preventDefault()
            move(e.key === 'ArrowRight' ? 1 : -1)
          }
        }}
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-3 flex sm:inset-6">
          <Dialog.Panel className="flex min-w-0 flex-1 flex-col gap-3 rounded-xl bg-white p-4 text-zinc-900 shadow-xl dark:bg-zinc-900 dark:text-zinc-100">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <Dialog.Title className="font-semibold">
                  {current.label}
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-xs">
                  Fit view or original pixel scale. At original scale, focus the
                  image region and use arrow keys to scroll. Escape closes the
                  viewer.
                </Dialog.Description>
              </div>
              <button
                type="button"
                className={styles.secondary}
                onClick={closeViewer}
              >
                Close viewer
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {controls()}
              <button
                type="button"
                className={styles.secondary}
                aria-pressed={original}
                onClick={() => setOriginal((v) => !v)}
              >
                {original ? 'Fit to viewport' : 'View at original scale'}
              </button>
              <a
                className="text-xs underline underline-offset-4"
                href={current.source.src}
                target="_blank"
                rel="noreferrer"
              >
                Open full-resolution source
              </a>
            </div>
            <div
              tabIndex={0}
              role="region"
              aria-label="Enlarged artwork. Scroll to inspect at original scale."
              className="min-h-0 flex-1 overflow-auto rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800"
            >
              <ArtifactImage
                artifact={current}
                original={original}
                maxHeight={
                  typeof window !== 'undefined' ? window.innerHeight * 0.6 : 600
                }
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}
