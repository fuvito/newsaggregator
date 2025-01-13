'use client'

import {useEffect, useState} from "react";
import Article from "@/app/types/article";
import {getArticles} from "@/app/service/ArticleService";
import Search from "@/app/news/Search";
import GridItems from "@/app/news/GridItems";

export default function Articles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchArticles(state: string = "", topic: string = "", search: string = "") {
    setLoading(true)
    const articles = await getArticles(state, topic, search);
    console.log("number of Articles in component:", articles.length);
    setArticles(articles);
    setLoading(false);
  }

  useEffect(() => {
    fetchArticles();
  }, []);


  function handleSearchAndFilter(state: string, topic: string, search: string) {
    fetchArticles(state, topic, search);
  }

  if (loading) {
    return (
      <>
        <Search onSearchAndFilterAction={handleSearchAndFilter}></Search>
        <h1>Loading Articles...</h1>
      </>
    )
  }

  return (
    <>
      <Search onSearchAndFilterAction={handleSearchAndFilter}></Search>

      {(!articles || articles.length === 0) &&
          <h1>No Articles found!</h1>
      }
      {articles &&
          <GridItems articles={articles}/>
      }
    </>
  )
}
