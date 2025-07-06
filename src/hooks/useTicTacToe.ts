import { useState } from "react";
import { Player, Score, TileValue } from "../types/game";
import { calculateWinner, isDraw } from "../utils/gameLogic";

const initialBoard: TileValue[] = Array(9).fill(null);

export function useTicTacToe() {
  const [board, setBoard] = useState<TileValue[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState<Score>({ X: 0, O: 0, draw: 0 });
  const [winnerInfo, setWinnerInfo] = useState<{ winner: TileValue; line: number[] } | null>(null);

  const currentPlayer: Player = xIsNext ? 'X' : 'O';
  const winner = winnerInfo?.winner ?? null;
  const winningLine = winnerInfo?.line ?? [];
  const isResultDraw = isDraw(board) && !winner;

  const handleTileClick = (index: number) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    const newWinnerInfo = calculateWinner(newBoard);

    setBoard(newBoard);
    setWinnerInfo(newWinnerInfo);

    if (newWinnerInfo && newWinnerInfo.winner) {
      const winnerKey = newWinnerInfo.winner; 
      setScore(prev => ({ ...prev, [winnerKey]: prev[winnerKey] + 1 }));
      setGameOver(true);
      return;

    } else if (isDraw(newBoard)) {
      setScore(prev => ({ ...prev, draw: prev.draw + 1 }));
      setGameOver(true);
      return;
    }

    setXIsNext(!xIsNext);
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setWinnerInfo(null);
    setGameOver(false);
  };

  const resetScores = () => {
    setScore({ X: 0, O: 0, draw: 0 });
    resetBoard();
  };

  return {
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
  };
}
