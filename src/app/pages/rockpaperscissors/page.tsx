"use client"

import { useState } from 'react'

const choices = ['Rock', 'Paper', 'Scissors'] as const
type Choice = typeof choices[number]

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null)
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null)
  const [result, setResult] = useState('')

  const play = (choice: Choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    setPlayerChoice(choice)
    setComputerChoice(computerChoice)

    if (choice === computerChoice) {
      setResult("🤝 It's a tie!")
    } else if (
      (choice === 'Rock' && computerChoice === 'Scissors') ||
      (choice === 'Paper' && computerChoice === 'Rock') ||
      (choice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setResult('🎉 You win!')
    } else {
      setResult('💻 Computer wins!')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg space-y-6">
        <h1 className="text-3xl font-extrabold text-center">Rock Paper Scissors</h1>
        <div className="flex justify-around">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => play(choice)}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-blue-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              {choice}
            </button>
          ))}
        </div>
        {playerChoice && computerChoice && (
          <div className="text-center space-y-4">
            <p className="text-lg">
              🧑 You chose: <span className="font-bold">{playerChoice}</span>
            </p>
            <p className="text-lg">
              💻 Computer chose: <span className="font-bold">{computerChoice}</span>
            </p>
            <p
              className={`text-xl font-bold ${
                result.includes("win") ? "text-green-500" : "text-red-500"
              }`}
            >
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

