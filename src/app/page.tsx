"use client"

import Controls from "@/components/Controls";
import Board from "../components/Board";
import Scoreboard from "../components/Scoreboard";

import { useTicTacToe } from "../hooks/useTicTacToe";

export default function Home() {
  const {
    board,
    currentPlayer,
    winner,
    winningLine,
    isResultDraw,
    score,
    gameOver,
    handleTileClick,
    resetBoard,
    resetScores,
  } = useTicTacToe();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold m-8">
        TicTacToe
      </h1> */}

      <Board 
        board={board} 
        gameOver={gameOver}
        winningLine={winningLine} 
        currentPlayer={currentPlayer}
        onTileClick={handleTileClick} 
      />

      <Scoreboard
        score={score}
        winner={winner}
        isResultDraw={isResultDraw}
        currentPlayer={currentPlayer}
      />

      <Controls
        resetBoard={resetBoard}
        resetScores={resetScores}
        gameOver={gameOver}
      />

    </div>
  );
}
