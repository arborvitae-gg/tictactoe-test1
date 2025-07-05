'use client'

import { useState } from 'react';
import Board from '../components/Board';

import { Player, Score, TileValue } from '../types/game';
import { calculateWinner, isDraw } from '../utils/gameLogic';

const initialBoard: TileValue[] = Array(9).fill(null);

export default function Home() {

  const [board, setBoard] = useState<TileValue[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [score, setScore] = useState<Score>({ X: 0, O: 0, draw: 0 });

  const currentPlayer: Player = xIsNext ? 'X' : 'O';
  const winner = calculateWinner(board);

  const handleTileClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = calculateWinner(newBoard);
    if (result) {
      setScore(prev => ({ ...prev, [result]: prev[result] + 1 }));
    } else if (isDraw(newBoard)) {
      setScore(prev => ({ ...prev, draw: prev.draw + 1 }));
    }

    setXIsNext(!xIsNext);
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const resetScores = () => {
    setScore({ X: 0, O: 0, draw: 0 });
    resetBoard();
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold m-6">
        Tic-Tac-Toe
      </h1>

      <Board 
        board={board} 
        onTileClick={handleTileClick} 
      />

      <div className="text-xl mb-4">
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Player (${currentPlayer})'s Turn`
          : "It's a Draw!"}
      </div>

      <div className="mb-4 grid grid-cols-2 place-content-stretch">
        <button
          onClick={resetBoard}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
        >
          New Match
        </button>

        <button
          onClick={resetScores}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset Scores
        </button>
      </div>

      <div className="grid grid-cols-3 text-center">
        <p>Player X</p>
        <p>Tie</p>
        <p>Player O</p>

        <p>{score.X}</p>
        <p>{score.draw}</p>
        <p>{score.O}</p>
      </div>
    </div>
  );
}
