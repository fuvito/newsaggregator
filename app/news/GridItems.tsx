import Article from "@/app/types/article";
import {useRouter} from "next/navigation";

interface Props {
  articles: Article[]
}

export default function GridItems({articles}: Props) {
  const router = useRouter()

  function shortDescription(description: string): string {
    if (description.length > 250) {
      return description.substring(0, 150) + "...";
    }
    return description;
  }

  function showDetails(articleId: string) {
    console.log("articleId", articleId);
    router.push(`/news/${articleId}`)
  }

  /*
    function toDateString(inDate: Date): string {
      if (inDate) {
        return new Date(inDate).toLocaleDateString();
      }
      return "";
    }
  */

  return (
    <div className="row">
      {articles.map(article =>
        <div className="col-md-12 col-lg-4" key={article.id} onClick={() => showDetails(article.id)}>
          <div className="card m-3 p-2">
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <div className="d-flex justify-content-between">
                <p className="badge text-bg-success">{article.state}</p>
                <p className="badge text-bg-primary">{article.topic}</p>
              </div>
              <p className="card-text">{shortDescription(article.description)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
