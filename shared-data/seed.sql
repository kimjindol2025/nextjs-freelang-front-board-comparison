WITH RECURSIVE numbers(n) AS (
  VALUES(1)
  UNION ALL
  SELECT n + 1 FROM numbers WHERE n < 1000
)
INSERT INTO posts (title, body, author, created_at, likes)
SELECT
  '공지사항 ' || n,
  '게시글 본문 내용입니다. FreeLang Front와 Next.js의 동일 조건 비교를 위한 한국어 더미 데이터 ' || n || '번입니다.',
  CASE n % 5
    WHEN 0 THEN '홍길동'
    WHEN 1 THEN '김민지'
    WHEN 2 THEN '이서준'
    WHEN 3 THEN '박지은'
    ELSE '최도윤'
  END,
  datetime('2026-11-11 10:00:00', '-' || (n % 90) || ' days', '-' || (n % 1440) || ' minutes'),
  n % 51
FROM numbers;
