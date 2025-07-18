import { TileValue } from "../types/game";

interface TileProps {
  value: TileValue;
  gameOver?: boolean;
  isWinningTile?: boolean;
  previewValue?: TileValue | null; 
  onClick: () => void;
}

export default function Tile({
  value, 
  gameOver = false,
  isWinningTile = false, 
  previewValue = null,
  onClick, 
  
}: TileProps) {
  const textColorClass = value === 'X' ? 'color-x' : 'color-o';
  const winningClass = isWinningTile ? 'color-win blink' : '';
  const previewColorClass = previewValue === 'X' ? 'color-x opaque' : previewValue === 'O' ? 'color-o opaque' : '';

  return (
    <button
      className={`
        w-20 h-20 md:w-31 md:h-31 lg:w-36 lg:h-36 
        font-bold border-2 flex justify-center items-center
        ${gameOver ? 'cursor-default' : 'cursor-pointer'}
      `}
      onClick={onClick}   
      disabled={gameOver} 
    >              
      {/* X or O */}
      <p className={`
        text-4xl md:text-5xl lg:text-7xl 
        ${winningClass} ${textColorClass}`
        }>
        {value}
      </p>

      {/* Preview of current player when hovering */}
       {!gameOver && !value && previewValue && (
        <p
          className={`
            text-3xl md:text-4xl lg:text-6xl
            opacity-0 hover:opacity-40
            ${previewColorClass}
          `}
          aria-hidden="true"
        >
          {previewValue}
        </p>
      )}
    </button>
  );
}
