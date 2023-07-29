export interface User {
  id: number,
  name: string,
  birthdate: string,
  points: number
}

export type TableRow = User & {key: number}
