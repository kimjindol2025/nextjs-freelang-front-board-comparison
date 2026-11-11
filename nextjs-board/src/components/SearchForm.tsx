export function SearchForm({ query }: { query: string }) {
  return <form className="search" method="get">
    <label htmlFor="q">게시글 검색</label>
    <div><input id="q" name="q" type="search" defaultValue={query} /><button type="submit">검색</button></div>
  </form>;
}
