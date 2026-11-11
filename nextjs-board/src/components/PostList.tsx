import type { Post } from '@/lib/posts';
import { PostCard } from './PostCard';

export function PostList({ posts }: { posts: Post[] }) {
  if (!posts.length) return <p className="empty">게시글이 없습니다.</p>;
  return <section aria-label="게시글 목록">{posts.map((post) => <PostCard key={post.id} post={post} />)}</section>;
}
