import { TileValue } from '../types/game';

interface TileProps {
  value: TileValue;
  onClick: () => void;
}

export default function Tile({ value, onClick }: TileProps) {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 font-bold content-center border"
    >
      <p className="text-4xl md:text-5xl lg:text-6xl">
        {value}
      </p>
    </button>
  );
}
