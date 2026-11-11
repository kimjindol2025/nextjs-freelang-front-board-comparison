export type CreatePostInput = { title: string; body: string; author: string };
export type FieldErrors = Partial<Record<keyof CreatePostInput, string>>;

export function validatePost(input: CreatePostInput): FieldErrors {
  const errors: FieldErrors = {};
  if (input.title.trim().length < 1 || input.title.trim().length > 100) errors.title = '제목은 1~100자로 입력하세요.';
  if (input.body.trim().length < 1 || input.body.trim().length > 5000) errors.body = '본문은 1~5,000자로 입력하세요.';
  if (input.author.trim().length < 1 || input.author.trim().length > 50) errors.author = '작성자는 1~50자로 입력하세요.';
  return errors;
}
