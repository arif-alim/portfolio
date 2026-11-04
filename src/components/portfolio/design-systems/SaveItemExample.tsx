import styles from './DesignSystems.module.css'

export const saveItemStates = [
  ['Default', 'Save item', ''],
  ['Pressed', 'Save item', ''],
  ['Focused', 'Save item', ''],
  ['Disabled', 'Save item', 'Saving unavailable'],
  ['Loading', 'Save item', 'Saving…'],
  ['Saved', 'Saved', 'Added to your reading list'],
  ['Error', 'Retry save', 'Couldn’t save. Try again.'],
] as const

export function SaveItemExample() {
  return (
    <figure className="space-y-4">
      <figcaption className="space-y-1">
        <h3 className="font-semibold">Save item · Reading list</h3>
        <p className="text-sm">
          I designed these state samples for saving an article in place. Both
          treatments use the same labels, target size and feedback.
        </p>
      </figcaption>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {['Standard', 'Liquid Glass-inspired · web visual prototype'].map(
          (treatment, index) => (
            <div
              key={treatment}
              className={styles.savePanel}
              data-glass={!!index}
            >
              <h4 className="text-sm font-semibold">{treatment}</h4>
              <ul className="divide-current/15 mt-3 divide-y">
                {saveItemStates.map(([state, label, feedback]) => (
                  <li
                    key={state}
                    className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-2 py-2"
                  >
                    <span className="text-xs font-medium">{state}</span>
                    <div>
                      <span className={styles.saveSample} data-state={state}>
                        {state === 'Loading' && (
                          <span
                            aria-hidden="true"
                            className={styles.saveLoader}
                          />
                        )}
                        {state === 'Saved' && <span aria-hidden="true">✓</span>}
                        {label}
                      </span>
                      {feedback && <p className="mt-1 text-xs">{feedback}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="font-semibold">Use and touch targets</dt>
          <dd>
            Use a native button for saving in place. Give it a target of at
            least 44 × 44 CSS pixels and space from adjacent controls.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">Accessible name and focus</dt>
          <dd>
            Include the visible label in the accessible name. When several items
            can be saved, add the article title to distinguish them. Support
            Enter and Space, keep the keyboard focus ring visible, and retain
            focus while saving and when feedback appears.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">Feedback and recovery</dt>
          <dd>
            Keep “Save item” as the name while busy and block repeat activation.
            Announce progress and success through a status region. On failure,
            announce the error and offer a retry on the same control. Pair
            visual cues with text so colour alone carries no meaning.
          </dd>
        </div>
      </dl>
    </figure>
  )
}
