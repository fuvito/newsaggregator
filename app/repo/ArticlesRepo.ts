import Article from "@/app/types/article";
import {fetchAll, fetchFirst} from "@/app/data/sqlWrapper";
import {Database} from "sqlite3";

export async function findAll(state: string = "", topic: string = "", search: string = ""): Promise<Article[]> {
  const db = new Database('test.db');
  const params: string[] = [];
  let whereCondition = "";

  if (state) {
    whereCondition += "WHERE state = ?"
    params.push(state);
  }

  if (topic) {
    if (whereCondition) {
      whereCondition += " AND topic = ?"
    } else {
      whereCondition += "WHERE topic = ?"
    }
    params.push(topic);
  }

  if (search) {

    if (whereCondition) {
      whereCondition += " AND (title LIKE ? OR description LIKE ?)"
    } else {
      whereCondition += "WHERE (title LIKE ? OR description LIKE ?)"
    }
    params.push(`%${search}%`);
    params.push(`%${search}%`);
  }


  const selectQuery = 'SELECT * FROM articles ' + whereCondition
  console.log('selectQuery: ', selectQuery)

  const rows: Article[] = await fetchAll<Article>(db, selectQuery, params);
  // console.log("FetchAll: ", rows)
  db.close();
  return rows;
}

export async function findOne(id: string): Promise<Article | null> {
  const db = new Database('test.db');
  const params: string[] = [];
  params.push(id)

  const selectQuery = 'SELECT * FROM articles WHERE id= ?'
  console.log('selectQuery: ', selectQuery)

  const row: Article = await fetchFirst<Article>(db, selectQuery, params);
  db.close();
  return row
}

