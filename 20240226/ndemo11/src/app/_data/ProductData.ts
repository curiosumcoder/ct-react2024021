import IProduct from "@/app/_models/IProduct";
import sqlite3 from "sqlite3";

const dbFilePath = "./src/app/_data/Northwind.db";

export default class ProductData {
  get(id: number): Promise<IProduct> {
    return new Promise<IProduct>((resolve, reject) => {
      let result: IProduct;

      //sqlite3.verbose();

      let db = new sqlite3.Database(dbFilePath);
      let sql = `SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, 
        UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued 
        FROM Products WHERE ProductID = ?`;

      console.log(`Querying with id: ${id} ... ${new Date().toLocaleTimeString()}`);

      db.get(sql, [id], (err: any, row: any) => {
        if (err) {
          reject(err);
        }
        if (row) {
          const {
            ProductID: id,
            ProductName: productName,
            UnitPrice: unitPrice,
            QuantityPerUnit: quantityPerUnit,
          } = row;
          result = { id, productName, unitPrice, quantityPerUnit };
        }
        // close the database connection
        db.close();
        resolve(result);
      });
    });
  }

  search(filter: string): Promise<Array<IProduct>> {
    return new Promise<Array<IProduct>>((resolve, reject) => {
      let result = Array<IProduct>();

      //sqlite3.verbose();
      let db = new sqlite3.Database(dbFilePath);

      let sql = `SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, 
      UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued 
      FROM Products WHERE ProductName LIKE ?`;

      filter = `%${filter}%`;
      console.log(`Querying with filter: ${filter} ... ${new Date().toLocaleTimeString()}`);

      db.all(sql, [filter], (err: any, rows: any) => {
        if (err) {
          reject(err);
        }

        rows.forEach((row: any) => {
          const {
            ProductID: id,
            ProductName: productName,
            UnitPrice: unitPrice,
            QuantityPerUnit: quantityPerUnit,
          } = row;
          const p: IProduct = {
            id,
            productName,
            unitPrice,
            quantityPerUnit
          };
          result = [p, ...result];
        });

        // close the database connection
        db.close();

        resolve(result);
      });
    });
  }

  create(p: IProduct) {
    return new Promise<IProduct | null>((resolve, reject) => {
      let result: IProduct;

      console.log(p);

      //sqlite3.verbose();
      let db = new sqlite3.Database(dbFilePath);

      const sql = `INSERT INTO Products (ProductName, SupplierID, CategoryID, 
        QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      db.run(
        sql,
        [p.productName, 1, 1, p.quantityPerUnit, p.unitPrice, 1, 1, 1, 1],
        function (err: any) {
          if (err) {
            reject(err);
          } else {
            console.log("Last inserted ID: " + this.lastID);
            console.log(p);

            result = { ...p, id: this.lastID };

            resolve(result);
          }

          // close the database connection
          db.close();
        }
      );
    });
  }

  update(p: IProduct) {
    return new Promise<number>((resolve, reject) => {
      let result: IProduct;

      console.log(p);

      //sqlite3.verbose();
      let db = new sqlite3.Database(dbFilePath);

      const sql = `UPDATE Products 
        SET ProductName = ?, QuantityPerUnit = ?, UnitPrice = ? 
        WHERE ProductID = ?`;

      db.run(
        sql,
        [p.productName, p.quantityPerUnit, p.unitPrice, p.id],
        function (err: any) {
          if (err) {
            reject(err);
          } else {
            resolve(this.changes);
          }

          // close the database connection
          db.close();
        }
      );
    });
  }

  delete(id: number) {
    return new Promise<number>((resolve, reject) => {
      //sqlite3.verbose();
      let db = new sqlite3.Database(dbFilePath);

      const sql = `DELETE FROM Products WHERE ProductID = ?`;

      db.run(sql, [id], function (err: any) {
        if (err) {
          reject(err);
        } else {
          resolve(this.changes);
        }

        // close the database connection
        db.close();
      });
    });
  }
}
