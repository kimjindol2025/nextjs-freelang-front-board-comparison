import { NextResponse } from 'next/server';
import { likePost } from '@/lib/posts';

export const dynamic = 'force-dynamic';

export async function POST(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const liked = Number.isInteger(id) && await likePost(id);
  return liked ? NextResponse.json({ ok: true }) : NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 });
}
