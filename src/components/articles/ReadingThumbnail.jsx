import { useState } from 'react'
import Image from 'next/image'

export function ReadingThumbnail({ title, topic, thumbnail }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className="relative flex shrink-0 items-center overflow-hidden rounded-t-xl bg-zinc-100 dark:bg-zinc-800"
      style={{ aspectRatio: '16 / 9' }}
    >
      {thumbnail && !failed ? (
        <Image
          src={thumbnail.src}
          alt={thumbnail.alt}
          fill
          unoptimized
          className="object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <div aria-hidden="true" className="space-y-2 px-5">
          <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
            {topic}
          </p>
          <p className="line-clamp-4 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
            {title}
          </p>
        </div>
      )}
    </div>
  )
}
