export type Player = 'X' | 'O';
export type TileValue = Player | null;

export interface Score {
  X: number;
  O: number;
  draw: number;
}
