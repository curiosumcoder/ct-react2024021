import sqlite3 from "sqlite3";

let db = new sqlite3.Database('./Northwind.db');

let sql = `SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued
FROM Products WHERE ProductName LIKE ?;`;

db.all(sql, ['%ch%'], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.ProductName, row.UnitPrice);
  });
});

// close the database connection
db.close();