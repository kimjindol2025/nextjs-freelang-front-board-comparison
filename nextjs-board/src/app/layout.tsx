import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = { title: '공지사항 게시판', description: 'Next.js 비교 구현' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><header><Link href="/">공지사항 게시판</Link></header><main>{children}</main></body></html>;
}
