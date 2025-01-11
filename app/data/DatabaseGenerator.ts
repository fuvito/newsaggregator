import {Database} from "sqlite3";
import { v4 as uuidv4 } from 'uuid';
import Article from "@/app/types/article";

async function generateDatabase() {
  // Create an in-memory database
  const db = new Database('test.db')

  // Create a table
  db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      topic TEXT NOT NULL,
      publishedDate DATE NOT NULL,
      state TEXT NOT NULL,
      description TEXT,
      link TEXT
    )
  `);

  // Insert some data
  // insertData(db);
  // Query the data
  // logInsertedData(db); // before built disable this call

  // close db
  db?.close();
}

function insertData(db: Database) {
  const insertStmt =
    `INSERT INTO articles 
    (id, title, topic, publishedDate, state, description, link) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?)`

  const id1 = uuidv4();
  console.log(id1)
  db.run(insertStmt, id1, 'Title - 1', 'Education', new Date(), 'CA', 'This is an article description related to Education', 'www.google.com', (err: Error | null) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Article inserted successfully - 1: ', id1);
    });

  const id2 = uuidv4();
  console.log(id2)
  db.run(insertStmt, id2, 'Title - 2', 'Health', new Date(), 'IL', 'This is an article description related to Health', 'www.health.gov', (err: Error | null) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Article inserted successfully - 2: ', id2);
  });
}

function logInsertedData(db: Database) {
  db.get('SELECT * FROM articles', function(err, rows: Article[]) {
    if (err) {
      console.log('Select Error!' + err.message);
      return;
    }
    console.log(rows)
  })
}



export {
  generateDatabase
};
