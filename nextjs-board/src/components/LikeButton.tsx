'use client';

import { useTransition } from 'react';
import { likePostAction } from '@/actions/posts';

export function LikeButton({ id }: { id: number }) {
  const [pending, startTransition] = useTransition();
  return <button type="button" onClick={() => startTransition(() => likePostAction(id))} disabled={pending}>
    {pending ? '처리 중…' : '좋아요'}
  </button>;
}
