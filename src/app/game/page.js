"use client";

import React, { useState } from "react";

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["Rock", "Paper", "Scissors"];

  const handleClick = (choice) => {
    const randomIndex = Math.floor(Math.random() * 10) % 3;
    const computerMove = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computerMove);

    if (choice === computerMove) {
      setResult("It's a Tie!");
    } else if (
      (choice === "Rock" && computerMove === "Scissors") ||
      (choice === "Paper" && computerMove === "Rock") ||
      (choice === "Scissors" && computerMove === "Paper")
    ) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Rock / Paper / Scissors</h2>

        <div className="flex gap-4 mb-6 justify-center">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => handleClick(choice)}
              className="bg-red-500 text-white py-2 px-4 "
            >
              {choice}
            </button>
          ))}
        </div>

        <div>
          <p className="text-lg mb-2">Your Choice: {userChoice}</p>
          <p className="text-lg mb-2">Computer Choice: {computerChoice}</p>
          <p className="text-xl font-semibold mt-4">{result}</p>
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
