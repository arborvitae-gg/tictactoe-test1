import Tile from './Tile';
import { TileValue } from '../types/game';

interface BoardProps {
  board: TileValue[];
  onTileClick: (index: number) => void;
}

export default function Board({ board, onTileClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      {board.map((cell, i) => (
        <Tile 
          key={i} 
          value={cell} 
          onClick={() => onTileClick(i)} 
        />
      ))}
    </div>
  );
}
