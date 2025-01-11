import Article from "@/app/types/article";
import {Tag} from "primereact/tag";

interface Props {
  article: Article
}
export default function GridItem({article}: Props) {
  //  todo find a good icon for topic

  return (
    <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={article.id}>
      <div className="p-4 border-1 surface-border surface-card border-round">
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag"></i>
            <span className="font-semibold">{article.topic}</span>
          </div>
        </div>
        <div className="flex flex-column align-items-center gap-3 py-5">
          <div className="text-2xl font-bold">{article.title}</div>
          <div className="text-2xl font-bold">{article.description}</div>
          <div className="text-2xl font-bold">{article.publishedDate.toDateString()}</div>
        </div>
      </div>
    </div>
  )
}
