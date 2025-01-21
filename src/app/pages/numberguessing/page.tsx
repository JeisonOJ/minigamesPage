"use client"

import { useState, useEffect } from 'react'
export default function NumberGuessingGame() {
const [targetNumber, setTargetNumber] = useState(0)
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('Guess a number between 1 and 100')
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    generateNewNumber()
  }, [])

  const generateNewNumber = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1)
    setGuess('')
    setMessage('Guess a number between 1 and 100')
    setAttempts(0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numberGuess = parseInt(guess)

    if (isNaN(numberGuess)) {
      setMessage('⚠️ Please enter a valid number')
      return
    }

    setAttempts(attempts + 1)

    if (numberGuess === targetNumber) {
      setMessage(`🎉 Congratulations! You guessed the number in ${attempts + 1} attempts.`)
    } else if (numberGuess < targetNumber) {
      setMessage('⬆️ Too low! Try a higher number.')
    } else {
      setMessage('⬇️ Too high! Try a lower number.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 text-center w-96 space-y-6">
        <h1 className="text-3xl font-extrabold">Number Guessing Game</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess"
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          >
            Submit Guess
          </button>
        </form>
        <p
          className={`text-lg font-semibold ${
            message.includes("Congratulations")
              ? "text-green-500"
              : message.includes("⚠️")
              ? "text-red-500"
              : "text-gray-700"
          }`}
        >
          {message}
        </p>
        <button
          onClick={generateNewNumber}
          className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        >
          New Game
        </button>
      </div>
    </div>
  )
}