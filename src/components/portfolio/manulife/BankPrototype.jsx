import { useEffect, useRef, useState } from 'react'
import styles from './Manulife.module.css'

const names = ['Everyday account', 'Savings account']
const startingBalances = [125000, 340000]
const cad = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
})
const money = (cents) => cad.format(cents / 100)

export function BankPrototype() {
  const [balances, setBalances] = useState(startingBalances)
  const [from, setFrom] = useState(0)
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')
  const [review, setReview] = useState(null)
  const [receipt, setReceipt] = useState(null)
  const amountInput = useRef(null)
  const stageHeading = useRef(null)
  const to = 1 - from

  useEffect(() => {
    stageHeading.current?.focus()
  }, [review, receipt])

  function reset() {
    setBalances(startingBalances)
    setFrom(0)
    setAmount('')
    setError('')
    setReview(null)
    setReceipt(null)
  }

  function reviewTransfer(event) {
    event.preventDefault()
    const match = /^(\d{1,12})(?:\.(\d{1,2}))?$/.exec(amount.trim())
    const cents = match
      ? Number(match[1]) * 100 + Number((match[2] || '').padEnd(2, '0'))
      : 0
    if (cents <= 0 || cents > balances[from]) {
      setError(
        cents <= 0
          ? 'Enter a positive amount with up to two decimal places.'
          : `Insufficient funds. ${money(balances[from])} is available.`
      )
      amountInput.current?.focus()
      return
    }
    setError('')
    setReview({ from, to, cents })
  }

  function confirmTransfer() {
    const { from, to, cents } = review
    const next = [...balances]
    next[from] -= cents
    next[to] += cents
    setBalances(next)
    setReceipt(review)
    setReview(null)
  }

  return (
    <section
      aria-labelledby="bank-prototype"
      className="space-y-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700 sm:p-6"
    >
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
            Illustrative portfolio prototype
          </p>
          <h2 id="bank-prototype" className="mt-1 text-xl font-semibold">
            Manulife Bank
          </h2>
          <p className="mt-1 text-sm">
            Move fictional funds between sample accounts. All activity stays in
            this demo.
          </p>
        </div>
        <button type="button" className={styles.secondary} onClick={reset}>
          Reset demo
        </button>
      </header>
      <dl className="grid gap-3 sm:grid-cols-2">
        {names.map((name, index) => (
          <div
            key={name}
            className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800"
          >
            <dt className="text-sm font-medium">{name} · CAD</dt>
            <dd className="mt-1 text-xl font-semibold tabular-nums">
              {money(balances[index])}
            </dd>
          </div>
        ))}
      </dl>
      {receipt ? (
        <div className="space-y-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          <h3 tabIndex={-1} ref={stageHeading} className="font-semibold">
            Simulated transfer complete
          </h3>
          <p>
            {money(receipt.cents)} moved from {names[receipt.from]} to{' '}
            {names[receipt.to]}. The sample balances above reflect this
            transfer.
          </p>
          <button
            type="button"
            className={styles.secondary}
            onClick={() => {
              setReceipt(null)
              setAmount('')
              requestAnimationFrame(() => amountInput.current?.focus())
            }}
          >
            Make another transfer
          </button>
        </div>
      ) : review ? (
        <div className="space-y-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          <h3 tabIndex={-1} ref={stageHeading} className="font-semibold">
            Review transfer
          </h3>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt>From</dt>
              <dd>{names[review.from]}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>To</dt>
              <dd>{names[review.to]}</dd>
            </div>
            <div className="flex justify-between gap-3 border-t border-zinc-200 pt-2 font-semibold dark:border-zinc-700">
              <dt>Amount · CAD</dt>
              <dd>{money(review.cents)}</dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={styles.primary}
              onClick={confirmTransfer}
            >
              Confirm transfer
            </button>
            <button
              type="button"
              className={styles.secondary}
              onClick={() => {
                setReview(null)
                requestAnimationFrame(() => amountInput.current?.focus())
              }}
            >
              Edit amount
            </button>
          </div>
        </div>
      ) : (
        <form
          className="space-y-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
          onSubmit={reviewTransfer}
          noValidate
        >
          <h3 className="font-semibold">New transfer</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="font-medium">
              From account
              <select
                className={styles.input}
                value={from}
                onChange={(event) => {
                  setFrom(Number(event.target.value))
                  setError('')
                }}
              >
                {names.map((name, index) => (
                  <option key={name} value={index}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <p className="font-medium">
              To account{' '}
              <span className="mt-2 block rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
                {names[to]}
              </span>
            </p>
          </div>
          <label htmlFor="demo-transfer-amount" className="block font-medium">
            Amount (CAD)
          </label>
          <input
            id="demo-transfer-amount"
            ref={amountInput}
            className={styles.input}
            inputMode="decimal"
            autoComplete="off"
            placeholder="0.00"
            value={amount}
            aria-invalid={!!error}
            aria-describedby={error ? 'demo-transfer-error' : undefined}
            onChange={(event) => {
              setAmount(event.target.value)
              setError('')
            }}
          />
          {error && (
            <p id="demo-transfer-error" role="alert" className={styles.error}>
              {error}
            </p>
          )}
          <button type="submit" className={styles.primary}>
            Review transfer
          </button>
        </form>
      )}
    </section>
  )
}
