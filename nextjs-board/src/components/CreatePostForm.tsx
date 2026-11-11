'use client';

import { useActionState } from 'react';
import { createPostAction, type FormState } from '@/actions/posts';

const initialState: FormState = { errors: {} };

export function CreatePostForm() {
  const [state, action, pending] = useActionState(createPostAction, initialState);
  return <form action={action} className="editor">
    <div><label htmlFor="title">제목</label><input id="title" name="title" required maxLength={100} />{state.errors.title && <p role="alert">{state.errors.title}</p>}</div>
    <div><label htmlFor="body">본문</label><textarea id="body" name="body" required maxLength={5000} rows={12} />{state.errors.body && <p role="alert">{state.errors.body}</p>}</div>
    <div><label htmlFor="author">작성자</label><input id="author" name="author" required maxLength={50} />{state.errors.author && <p role="alert">{state.errors.author}</p>}</div>
    <button type="submit" disabled={pending}>{pending ? '등록 중…' : '등록'}</button>
  </form>;
}
