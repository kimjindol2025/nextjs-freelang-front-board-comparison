'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createPost, likePost } from '@/lib/posts';
import { validatePost, type FieldErrors } from '@/lib/validation';

export type FormState = { errors: FieldErrors; message?: string };

export async function createPostAction(_: FormState, formData: FormData): Promise<FormState> {
  const input = {
    title: String(formData.get('title') ?? ''),
    body: String(formData.get('body') ?? ''),
    author: String(formData.get('author') ?? ''),
  };
  const errors = validatePost(input);
  if (Object.keys(errors).length) return { errors };
  const post = await createPost(input);
  revalidatePath('/');
  revalidatePath(`/posts/${post.id}`);
  redirect(`/posts/${post.id}`);
}

export async function likePostAction(id: number): Promise<void> {
  await likePost(id);
  revalidatePath('/');
  revalidatePath(`/posts/${id}`);
}
