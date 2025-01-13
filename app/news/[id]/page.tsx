import ArticleDetails from "@/app/news/[id]/ArticleDetails";

interface Props {
  params: {
    id: string,
  }
}

export default async function ArticleDetail({params}: Props) {
  const {id} = await params;
  console.log('ArticleDetail: ', params)
  console.log('ArticleDetail: ', id)

  return (
    <>
      <ArticleDetails articleId={id} ></ArticleDetails>
    </>
  )
}
