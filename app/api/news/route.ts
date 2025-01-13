import {findAll} from "@/app/repo/ArticlesRepo";
import {NextRequest} from "next/server";

export async function GET(_request: NextRequest) {
  // get params
  const searchAndFilterParams = _request.nextUrl.searchParams
  const state = searchAndFilterParams.get('state') ?? "";
  const topic = searchAndFilterParams.get('topic') ?? "";
  const search = searchAndFilterParams.get('search') ?? "";

  console.log('search Params: ', state, topic, search);

  const articles = await findAll(state, topic, search);
  return Response.json(articles, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
