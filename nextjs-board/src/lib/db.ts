import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';

const databasePath = path.join(process.cwd(), 'data', 'board.db');

export const db = new DatabaseSync(databasePath);

export type PostRow = {
  id: number;
  title: string;
  body: string;
  author: string;
  created_at: string;
  likes: number;
};
