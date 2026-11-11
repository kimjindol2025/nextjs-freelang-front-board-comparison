import { db, type PostRow } from './db';
import type { CreatePostInput } from './validation';

export type Post = PostRow;
export type PostListResult = { posts: Post[]; total: number; page: number; pageSize: number; totalPages: number };

function normalizedPage(page?: number) {
  return Number.isInteger(page) && page && page > 0 ? page : 1;
}

export async function getPosts(options: { q?: string; page?: number; pageSize?: number } = {}): Promise<PostListResult> {
  const page = normalizedPage(options.page);
  const pageSize = options.pageSize ?? 20;
  const q = options.q?.trim() ?? '';
  const where = q ? 'WHERE title LIKE ? OR body LIKE ?' : '';
  const values = q ? [`%${q}%`, `%${q}%`] : [];
  const total = (db.prepare(`SELECT COUNT(*) AS count FROM posts ${where}`).get(...values) as { count: number }).count;
  const posts = db.prepare(`SELECT id, title, body, author, created_at, likes FROM posts ${where} ORDER BY created_at DESC, id DESC LIMIT ? OFFSET ?`)
    .all(...values, pageSize, (page - 1) * pageSize) as Post[];
  return { posts, total, page, pageSize, totalPages: Math.max(1, Math.ceil(total / pageSize)) };
}

export async function getPostById(id: number): Promise<Post | null> {
  return (db.prepare('SELECT id, title, body, author, created_at, likes FROM posts WHERE id = ?').get(id) as Post | undefined) ?? null;
}

export async function createPost(input: CreatePostInput): Promise<Post> {
  const result = db.prepare('INSERT INTO posts (title, body, author) VALUES (?, ?, ?)').run(input.title.trim(), input.body.trim(), input.author.trim());
  const post = await getPostById(Number(result.lastInsertRowid));
  if (!post) throw new Error('게시글을 저장하지 못했습니다.');
  return post;
}

export async function likePost(id: number): Promise<boolean> {
  return db.prepare('UPDATE posts SET likes = likes + 1 WHERE id = ?').run(id).changes === 1;
}
