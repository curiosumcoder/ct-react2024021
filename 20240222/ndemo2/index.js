import ProductService from './product.service.js'

const ps = new ProductService()
const data = ps.search('ar')

for (const p of data) {
    console.log(`${p.productName}, ${p.unitPrice}`)
}
