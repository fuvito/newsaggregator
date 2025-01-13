import Article from "@/app/types/article";
import {findOne} from "@/app/repo/ArticlesRepo";
import {NextRequest} from "next/server";

interface Props {
  params: {
    id: string,
  }
}

export async function GET(request: NextRequest, {params}: Props) {
  const {id} = await params;

  // Fetch data based on the ID
  console.log('id: ', id);

  const article: Article | null = await findOne(id);

  if (article) {
    return Response.json(article, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return Response.json({message: 'Resource not found'}, {
    status: 404,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
