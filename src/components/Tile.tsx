import { TileValue } from '../types/game';

interface TileProps {
  value: TileValue;
  onClick: () => void;
  isWinningTile?: boolean;
}

export default function Tile({ value, onClick, isWinningTile = false }: TileProps) {

  const textColorClass = value === 'X' ? 'color-x' : 'color-o';
  const winningClass = isWinningTile ? 'color-win blink' : '';

  return (
    <button
      onClick={onClick}
      className={`w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 font-bold content-center border `}
    >
      <p className={`text-4xl md:text-5xl lg:text-6xl ${winningClass} ${textColorClass}`}>
        {value}
      </p>
    </button>
  );
}
