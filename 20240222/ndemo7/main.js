import express from 'express'
import searchProduct from './productD.js'

const app = express()
const port = 8080

// Midlewares
app.get('/', async (req, res) => {
  console.log(req)

  const filter = req.query.filter ?? '';

  let lista = await searchProduct(filter);
  //console.log(`lista: ${lista}`);

  //res.send('Hello World!')
  //res.send(JSON.stringify(lista))

  let body = lista.reduce((a,c) => a + `<li>${c.ProductName} ${c.UnitPrice}</li>`,'')
  body = `<ul>${body}</ul>`;

  res.send(body);  
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})