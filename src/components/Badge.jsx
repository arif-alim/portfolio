import clsx from 'clsx'

const colorStyles = {
  gray: 'bg-gray-100 text-gray-700 ring-gray-500/10',
  lime: 'bg-lime-100 text-lime-700 ring-lime-600/20',
  purple: 'bg-purple-100 text-purple-700 ring-purple-600/20',
  rose: 'bg-rose-100 text-rose-700 ring-rose-600/20',
  blue: 'bg-blue-100 text-blue-700 ring-blue-600/20',
  yellow: 'bg-yellow-100 text-yellow-700 ring-yellow-600/20',
  emerald: 'bg-emerald-100 text-emerald-700 ring-emerald-600/20',
}

export default function Badge({ color = 'gray', children }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-sm px-2 py-1 font-sans text-badge ring-1 ring-inset',
        colorStyles[color]
      )}
    >
      {children}
    </span>
  )
}
