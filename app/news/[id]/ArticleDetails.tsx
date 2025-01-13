'use client'

import {useEffect, useState} from "react";
import {getArticle} from "@/app/service/ArticleService";
import Article from "@/app/types/article";

interface Props {
  articleId: string
}

export default function ArticleDetails({articleId}: Props) {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<Article>();

  async function fetchArticle() {
    if (articleId) {
      console.log("fetchArticle with id:", articleId);
      setLoading(true)
      const article = await getArticle(articleId);
      console.log("Article:", article);
      setArticle(article);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchArticle();
  }, []);

  /*const [showModal, setShowModal] = useState(false);*/

  /*
    useEffect(() => {
      console.log('articleId: ', articleId)
      if (articleId) {
        setShowModal(true);
        console.log("true")
      } else {
        setShowModal(false);
        console.log("false")
      }

    }, [articleId])
  */

  function toDateString(inDate: Date): string {
    if (inDate) {
      return new Date(inDate).toLocaleDateString();
    }
    return "";
  }

  if (loading) {
    return (
      <>
        <h1>Loading Article...</h1>
      </>
    )
  }

  return (
    <>
      {article &&
          <div className="row">
              <div className="col">
                  <div className="card m-3 p-2">
                      <div className="card-body">
                          <h2 className="card-title">{article.title}</h2>
                          <p className="card-text">State: {article.state}</p>
                          <p className="card-text">Topic: {article.topic}</p>
                          <p className="card-text">Description: {article.description}</p>
                          <p className="card-text">Published: {toDateString(article.publishedDate)}</p>
                          <p className="card-text">Original Article: <a href={article.link} target="_blank">{article.link}</a> </p>
                      </div>
                  </div>
              </div>
          </div>
      }
      {!article &&
          <h1>Article could not be found...</h1>
      }
    </>
  )
}
