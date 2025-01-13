import Article from "../types/article";
import DOMPurify from 'dompurify';


export async function getArticles(state: string = "", topic: string = "", search: string = ""): Promise<Article[]> {
  // first sanitize the parameters
  state = DOMPurify().sanitize(state);
  topic = DOMPurify().sanitize(topic);
  search = DOMPurify().sanitize(search);

  // then encode URIs
  state = encodeURIComponent(state);
  topic = encodeURIComponent(topic);
  search = encodeURIComponent(search);

  const api_url = `/api/news?state=${state}&topic=${topic}&search=${search}`;
  // console.log('api url: ', api_url)

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

