'use client'

import {useEffect, useState} from "react";
import Article from "@/app/types/article";
import {getArticles} from "@/app/service/ArticleService";

export default function Articles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchArticles() {
    setLoading(true)
    const articles = await getArticles();
    console.log("number of Articles in component:", articles.length);
    setArticles(articles);
    setLoading(false);
  }

  useEffect(() => {
      fetchArticles();
  }, []);

  if (loading) {
    return <h1>Loading Articles...</h1>
  }

  if (!loading && (!articles || (articles.length === 0))) {
    return <h1>No Articles loaded yet!</h1>
  }

  function toDateString(inDate: Date): string {
    if (inDate) {
      return new Date(inDate).toLocaleDateString();
    }
    return "";
  }

  function shortDescription(description: string): string {
    if (description.length > 250) {
      return description.substring(0, 247) + "...";
    }
    return description;
  }

  return (
    <div className="row">
      {articles.map(article =>
        <div className="col-md-12 col-lg-4" key={article.id}>
          <div className="card m-3 p-2">
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <p className="card-text">{shortDescription(article.description)}</p>
              <div className="d-flex justify-content-between">
                <a href={article.link} target="_blank" className="btn btn-outline-primary">Details</a>
                <p className="card-text">{toDateString(article.publishedDate)}</p>
                <span className="badge rounded-pill text-bg-warning align-content-center">{article.topic}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
