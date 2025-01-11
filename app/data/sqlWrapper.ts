import { Database } from "sqlite3";

export async function fetchAll<T>(db: Database, sql: string, params): Promise<T[]> {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows: T[]) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

export async function fetchFirst<T>(db: Database, sql: string, params): Promise<T> {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row: T) => {
      if (err) reject(err);
      resolve(row);
    });
  });
};
