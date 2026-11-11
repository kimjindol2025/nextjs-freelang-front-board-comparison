import { NextResponse } from 'next/server';
import { getPostById } from '@/lib/posts';

export const dynamic = 'force-dynamic';

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const post = Number.isInteger(id) ? await getPostById(id) : null;
  return post ? NextResponse.json(post) : NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 });
}
