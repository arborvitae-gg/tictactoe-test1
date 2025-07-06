import Tile from "./Tile";
import { Player, TileValue } from "../types/game";

interface BoardProps {
  board: TileValue[];
  gameOver: boolean; 
  winningLine: number[]; 
  currentPlayer: Player;
  onTileClick: (index: number) => void;
}

export default function Board({
  board,  
  gameOver, 
  winningLine, 
  currentPlayer,
  onTileClick,

}: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, index) => (
        <Tile 
          key={index} 
          value={value} 
          onClick={() => onTileClick(index)} 
          isWinningTile={winningLine.includes(index)}
          previewValue={currentPlayer}
          gameOver={gameOver}
        />
      ))}
    </div>
  );
}
