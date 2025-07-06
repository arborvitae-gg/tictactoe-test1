interface ControlsProps {
  resetBoard: () => void;
  resetScores: () => void;
  gameOver: boolean;
}

export default function Controls({ resetBoard, resetScores, gameOver }: ControlsProps) {
  if (!gameOver) return null; 
  
  return (
    <div className="grid grid-cols-2 text-xs md:text-sm lg:text-base gap-6">
      <div className="flex justify-center">
        <button
          onClick={resetBoard}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
        >
          New Match
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={resetScores}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
        >
          Reset Score
        </button>
      </div>
    </div>
  );
}
