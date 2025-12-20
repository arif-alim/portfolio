import Image from 'next/image'

const FALLBACK_WIDTH = 1200
const FALLBACK_HEIGHT = 800

export function Screenshot({
  src,
  alt = '',
  className = '',
  width,
  height,
  fill = false,
  sizes,
}) {
  const finalWidth =
    typeof width === 'number'
      ? width
      : src && typeof src === 'object' && typeof src.width === 'number'
        ? src.width
        : FALLBACK_WIDTH

  const finalHeight =
    typeof height === 'number'
      ? height
      : src && typeof src === 'object' && typeof src.height === 'number'
        ? src.height
        : FALLBACK_HEIGHT

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`rounded-lg object-cover object-center ${className}`}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      className={`rounded-lg object-cover object-center ${className}`}
    />
  )
}
