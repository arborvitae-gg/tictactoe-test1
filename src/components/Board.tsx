import Tile from './Tile';
import { TileValue } from '../types/game';

interface BoardProps {
  board: TileValue[];
  onTileClick: (index: number) => void;
  winningLine: number[]; 
}

export default function Board({ board, onTileClick, winningLine }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      {board.map((value, index) => (
        <Tile 
          key={index} 
          value={value} 
          onClick={() => onTileClick(index)} 
          isWinningTile={winningLine.includes(index)}
        />
      ))}
    </div>
  );
}
