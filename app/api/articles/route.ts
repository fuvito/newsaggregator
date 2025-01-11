import {findAll} from "@/app/repo/ArticlesRepo";
import {NextRequest} from "next/server";

export async function GET(_request: NextRequest) {
  const articles = await findAll()
  return Response.json(articles, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
