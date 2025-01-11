import Article from "../types/article";


export async function getArticles(): Promise<Article[]> {
  const api_url = '/api/articles';
  try {
    console.log("calling : ", api_url)
    const response: Response = await fetch(api_url, {
      method: 'GET'
    })

    const articles: Article[] = await response.json()
    console.log("Number of articles found: ", articles.length)
    return articles;
  } catch (error) {
    console.error("Error while making api call: " + api_url, error)
    throw error;
  }
}

