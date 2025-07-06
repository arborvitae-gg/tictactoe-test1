import { Player, Score } from "../types/game";

interface ScoreboardProps {
  winner: Player | null;
  isResultDraw: boolean;
  currentPlayer: Player;
  score: Score;
}

export default function Scoreboard({
  winner,
  isResultDraw,
  currentPlayer,
  score,

}: ScoreboardProps) {

  return (
    <div className="grid grid-cols-3 gap-x-4.5 md:gap-x-5 lg:gap-x-8 text-center mt-4">

      <p
        className={`text-sm md:text-xl lg:text-2xl font-bold ${
          winner === 'X'
            ? 'color-win'
            : !winner && !isResultDraw && currentPlayer === 'X'
            ? 'color-x'
            : 'color-x opacity-40'
        }`}
      >
        - X -
      </p>

      <p
        className={`text-sm md:text-xl lg:text-2xl font-bold ${
          isResultDraw ? 'color-win' : ''
        }`}
      >
        Draw
      </p>

      <p
        className={`text-sm md:text-xl lg:text-2xl font-bold ${
          winner === 'O'
            ? 'color-win'
            : !winner && !isResultDraw && currentPlayer === 'O'
            ? 'color-o'
            : 'color-o opacity-40'
        }`}
      >
        - O -
      </p>

      {/* Scores */}
      <p
        className={`mt-2 mb-4 text-sm md:text-lg lg:text-xl ${
          winner === "X" ? "blink" : ""
        }`}
      >
        {score.X}
      </p>

      <p
        className={`mt-2 mb-4 text-sm md:text-lg lg:text-xl ${
          isResultDraw ? "blink" : ""
        }`}
      >
        {score.draw}
      </p>

      <p
        className={`mt-2 mb-4 text-sm md:text-lg lg:text-xl ${
          winner === "O" ? "blink" : ""
        }`}
      >
        {score.O}
      </p>

    </div>
  );
}
