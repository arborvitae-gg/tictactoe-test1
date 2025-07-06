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
    <div className="grid grid-cols-3 gap-x-3.5 md:gap-x-7 lg:gap-x-10 text-center">

      <p
        className={`mt-4 text-base md:text-xl lg:text-2xl font-bold ${
          winner === 'X'
            ? 'color-win'
            : !winner && !isResultDraw && currentPlayer === 'X'
            ? 'color-x'
            : 'color-x opacity-20'
        }`}
      >
        - X -
      </p>

      <p
        className={`mt-4 text-base md:text-xl lg:text-2xl font-bold ${
          isResultDraw ? 'color-win blink' : ''
        }`}
      >
        Draw
      </p>

      <p
        className={`mt-4 text-base md:text-xl lg:text-2xl font-bold ${
          winner === 'O'
            ? 'color-win'
            : !winner && !isResultDraw && currentPlayer === 'O'
            ? 'color-o'
            : 'color-o opacity-20'
        }`}
      >
        - O -
      </p>

      {/* Scores */}
      <p
        className={`mt-2 mb-4 text-sm md:text-base lg:text-lg ${
          winner === "X" ? "blink" : ""
        }`}
      >
        {score.X}
      </p>

      <p
        className={`mt-2 mb-4 text-sm md:text-base lg:text-lg ${
          isResultDraw ? "blink" : ""
        }`}
      >
        {score.draw}
      </p>

      <p
        className={`mt-2 mb-4 text-sm md:text-base lg:text-lg ${
          winner === "O" ? "blink" : ""
        }`}
      >
        {score.O}
      </p>

    </div>
  );
}
