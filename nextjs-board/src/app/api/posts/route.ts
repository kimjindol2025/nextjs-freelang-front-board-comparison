import { NextResponse } from 'next/server';
import { createPost, getPosts } from '@/lib/posts';
import { validatePost } from '@/lib/validation';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return NextResponse.json(await getPosts({ q: searchParams.get('q') ?? undefined, page: Number(searchParams.get('page')) || 1 }));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'JSON 본문이 필요합니다.' }, { status: 400 });
  const input = { title: String(body.title ?? ''), body: String(body.body ?? ''), author: String(body.author ?? '') };
  const errors = validatePost(input);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 400 });
  return NextResponse.json(await createPost(input), { status: 201 });
}
