import Counter from "@/_components/Counter";

type ArticleParamas = Promise<{ slug: string }>; // Next15からparamsはPromiseとして扱う

export default async function ArticlePage({
  params,
}: {
  params: ArticleParamas;
}) {
  const { slug } = await params;

  return (
    <>
      <h1>{slug}記事ページ</h1>
    </>
  );
}
