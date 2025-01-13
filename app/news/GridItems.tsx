import Article from "@/app/types/article";

interface Props {
  articles: Article[]
}

export default function GridItems({articles}: Props) {

  function shortDescription(description: string): string {
    if (description.length > 250) {
      return description.substring(0, 150) + "...";
    }
    return description;
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
        <div className="col-md-12 col-lg-4" key={article.id}>
          <div className="card m-3 p-2">
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <div className="d-flex justify-content-between">
                <p className="badge text-bg-success">{article.state}</p>
                <p className="badge text-bg-primary">{article.topic}</p>
              </div>
              <p className="card-text">{shortDescription(article.description)}</p>
              <div className="d-flex justify-content-end">
                <a href={article.link} target="_blank" className="btn btn-outline-primary">Details</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
