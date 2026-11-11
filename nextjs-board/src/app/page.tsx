import Link from 'next/link';
import { Pagination } from '@/components/Pagination';
import { PostList } from '@/components/PostList';
import { SearchForm } from '@/components/SearchForm';
import { getPosts } from '@/lib/posts';

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { q = '', page } = await searchParams;
  const result = await getPosts({ q, page: Number(page) || 1 });
  return <><div className="page-heading"><div><h1>공지사항</h1><p>{result.total}건의 게시글</p></div><Link className="button-link" href="/posts/new">글쓰기</Link></div><SearchForm query={q} /><PostList posts={result.posts} /><Pagination page={result.page} totalPages={result.totalPages} query={q} /></>;
}
