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
      setResult("It's a tie!")
    } else if (
      (choice === 'Rock' && computerChoice === 'Scissors') ||
      (choice === 'Paper' && computerChoice === 'Rock') ||
      (choice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setResult('You win!')
    } else {
      setResult('Computer wins!')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-4">
        {choices.map((choice) => (
          <button key={choice} onClick={() => play(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="text-center">
          <p>You chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p className="font-bold">{result}</p>
        </div>
      )}
    </div>
  )
}

