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
      setMessage('Please enter a valid number')
      return
    }

    setAttempts(attempts + 1)

    if (numberGuess === targetNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`)
    } else if (numberGuess < targetNumber) {
      setMessage('Too low! Try a higher number.')
    } else {
      setMessage('Too high! Try a lower number.')
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          className="w-full"
        />
        <button type="submit" className="w-full">
          Submit Guess
        </button>
      </form>
      <p className="text-center">{message}</p>
      <button onClick={generateNewNumber} className="w-full">
        New Game
      </button>
    </div>
  )
}