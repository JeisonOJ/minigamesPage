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
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 text-center w-80 space-y-4">
        <h1 className="text-3xl font-extrabold">Coin Flip Game</h1>
        <button
          onClick={flipCoin}
          disabled={flipping}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 transition-all"
        >
          {flipping ? (
            <span className="animate-pulse">Flipping...</span>
          ) : (
            "Flip Coin"
          )}
        </button>
        {result && (
          <div
            className={`text-2xl font-bold mt-4 ${
              result === "Heads" ? "text-green-500" : "text-red-500"
            }`}
          >
            🎉 {result} 🎉
          </div>
        )}
      </div>
    </div>
  )
}

