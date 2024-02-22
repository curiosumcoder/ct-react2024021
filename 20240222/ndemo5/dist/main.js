import ProductService from "./ProductService.js";
const ps = new ProductService();
(async function () {
    try {
        const data = await ps.search('ar');
        if (data) {
            //console.log(data)
            for (const p of data) {
                //console.log(JSON.stringify(p))
                console.log(`${p.productName} ${p.unitPrice}`);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
})();
