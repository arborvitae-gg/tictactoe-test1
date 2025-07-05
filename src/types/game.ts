export type Player = 'X' | 'O' | null;
export type TileValue = Player | null;

export interface Score {
  X: number;
  O: number;
  draw: number;
}
