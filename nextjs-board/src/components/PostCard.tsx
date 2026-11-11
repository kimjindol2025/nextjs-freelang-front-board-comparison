import Link from 'next/link';
import type { Post } from '@/lib/posts';

export function PostCard({ post }: { post: Post }) {
  return <article className="card">
    <h2><Link href={`/posts/${post.id}`}>{post.title}</Link></h2>
    <p className="summary">{post.body}</p>
    <p className="meta">{post.author} · {post.created_at.slice(0, 10)} · 좋아요 {post.likes}</p>
  </article>;
}
