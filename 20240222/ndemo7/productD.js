import sqlite3 from "sqlite3";

// ORM

export default function searchProduct(filter) {
  let db = new sqlite3.Database("./Northwind.db");

  let sql = `SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued
FROM Products WHERE ProductName LIKE ?;`;

  return new Promise((resolve, reject) => {
    let result = [];

    db.all(sql, [`%${filter}%`], (err, rows) => {
      if (err) {
        reject(err);
      }
      rows.forEach((row) => {
        //console.log(row.ProductName, row.UnitPrice);

        const p = {};
        p.ProductName = row.ProductName;
        p.UnitPrice = row.UnitPrice;

        //console.log(p);

        result.push(p);
      });

      resolve(result);
    });

    // close the database connection
    db.close();
  });
}