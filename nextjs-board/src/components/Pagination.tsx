import Link from 'next/link';

export function Pagination({ page, totalPages, query }: { page: number; totalPages: number; query: string }) {
  const href = (target: number) => `/?${new URLSearchParams({ ...(query ? { q: query } : {}), page: String(target) })}`;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(Math.max(0, page - 3), page + 2);
  return <nav className="pagination" aria-label="페이지 이동">
    {page > 1 && <Link href={href(page - 1)}>이전</Link>}
    {pages.map((target) => <Link key={target} aria-current={target === page ? 'page' : undefined} href={href(target)}>{target}</Link>)}
    {page < totalPages && <Link href={href(page + 1)}>다음</Link>}
  </nav>;
}
