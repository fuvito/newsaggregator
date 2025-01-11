import Article from "@/app/types/article";
import {fetchAll} from "@/app/data/sqlWrapper";
import {Database} from "sqlite3";

export async function findAll(): Promise<Article[]> {
  const db = new Database('test.db');
  const rows: Article[] = await fetchAll<Article>(db, "SELECT * FROM articles", {});
  // console.log("FetchAll: ", rows)
  db.close();
  return rows;
}

