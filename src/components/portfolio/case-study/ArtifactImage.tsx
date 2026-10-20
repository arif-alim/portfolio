import Image from 'next/image'
import type { CaseStudyArtifact as Artifact } from './types'
export function ArtifactImage({
  artifact,
  original = false,
  maxHeight = 360,
  preview = false,
}: {
  artifact: Artifact
  original?: boolean
  maxHeight?: number
  preview?: boolean
}) {
  const { source, crop } = artifact
  const width = crop?.width || source.width
  const height = crop?.height || source.height
  if (!crop && preview)
    return (
      <div className="overflow-hidden" style={{ maxHeight }}>
        <Image
          src={source}
          alt={artifact.label}
          sizes="(min-width: 1024px) 45vw, 100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    )
  if (!crop)
    return (
      <Image
        src={source}
        alt={artifact.label}
        unoptimized={original}
        sizes="(min-width: 1024px) 45vw, 100vw"
        style={
          original
            ? { width: source.width, height: source.height, maxWidth: 'none' }
            : {
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight,
                margin: 'auto',
                objectFit: 'contain',
              }
        }
      />
    )
  return (
    <div
      className="relative mx-auto shrink-0 overflow-hidden"
      style={{
        width: original
          ? width
          : preview
          ? '100%'
          : `min(100%, ${(maxHeight * width) / height}px)`,
        aspectRatio: `${width} / ${height}`,
        maxHeight: preview ? maxHeight : undefined,
      }}
    >
      <Image
        src={source}
        alt={artifact.label}
        unoptimized
        width={source.width}
        height={source.height}
        style={{
          position: 'absolute',
          width: `${(source.width / width) * 100}%`,
          height: 'auto',
          maxWidth: 'none',
          left: `${(-crop.x / width) * 100}%`,
          top: `${(-crop.y / height) * 100}%`,
        }}
      />
    </div>
  )
}
