interface ControlsProps {
  resetBoard: () => void;
  resetScores: () => void;
  gameOver: boolean;
}

export default function Controls({ resetBoard, resetScores, gameOver }: ControlsProps) {

  return (
    <div
      className="mt-4 grid grid-rows-2 md:gap-2 lg:gap-5 md:grid-cols-2 md:grid-rows-1 text-sm md:text-sm lg:text-base"
      style={{ minHeight: '96px' }} // empty space 
    >

      <div>
        {gameOver && (
          <button
            onClick={resetBoard}
            className="w-full px-4 py-2 color-next rounded hover:opacity-40 cursor-pointer"
          >
            New Match
          </button>
        )}
      </div>

      <div>
        {gameOver && (
          <button
            onClick={resetScores}
            className="w-full px-4 py-2 color-reset rounded hover:opacity-40 cursor-pointer"
          >
            Reset Score
          </button>
        )}
      </div>

    </div>
  );
}
