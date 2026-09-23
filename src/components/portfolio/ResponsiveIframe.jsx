import clsx from 'clsx'

/** Uses the existing 768px breakpoint without resize listeners or hydration shifts. */
export function ResponsiveIframe({
  src,
  title,
  className,
  mobileHeight = 450,
  desktopHeight = 1024,
}) {
  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      className={clsx(
        'h-[var(--iframe-mobile-height)] md:h-[var(--iframe-desktop-height)]',
        className
      )}
      style={{
        '--iframe-mobile-height': `${mobileHeight}px`,
        '--iframe-desktop-height': `${desktopHeight}px`,
      }}
    />
  )
}
