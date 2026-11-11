import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LikeButton } from '@/components/LikeButton';
import { getPostById } from '@/lib/posts';

export const dynamic = 'force-dynamic';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const post = Number.isInteger(id) ? await getPostById(id) : null;
  if (!post) notFound();
  return <article className="detail"><Link href="/">← 목록으로</Link><h1>{post.title}</h1><p className="meta">{post.author} · {post.created_at.slice(0, 10)} · 좋아요 {post.likes}</p><p className="body">{post.body}</p><LikeButton id={post.id} /><div className="disabled-actions"><button type="button" disabled>수정</button><button type="button" disabled>삭제</button></div></article>;
}
