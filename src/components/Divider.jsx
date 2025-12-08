import clsx from 'clsx'

export default function Divider({ className }) {
  return (
    <div
      className={clsx(
        'mt-8 h-px w-full bg-gray-200 dark:bg-gray-800',
        className
      )}
    />
  )
}
