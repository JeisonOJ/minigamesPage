"use client"

import { useState } from 'react'

export default function CoinFlip() {
    const [result, setResult] = useState<'Heads' | 'Tails' | null>(null)
    const [flipping, setFlipping] = useState(false)
  
    const flipCoin = () => {
      setFlipping(true)
      setTimeout(() => {
        setResult(Math.random() < 0.5 ? 'Heads' : 'Tails')
        setFlipping(false)
      }, 1000)
    }

  return (
    <div className="space-y-4 text-center">
      <button onClick={flipCoin} disabled={flipping} className="w-full">
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
      {result && <p className="text-2xl font-bold">{result}</p>}
    </div>
  )
}

