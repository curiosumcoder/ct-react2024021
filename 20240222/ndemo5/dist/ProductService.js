// Implementado utilizando Axios https://axios-http.com/
// npm i axios
// yarn add axios
import axios from 'axios';
const PRODUCT_URL = 'http://localhost:3000/products';
export default class ProductService {
    constructor() {
        console.log('ProductService via Axios ...');
    }
    async get(id) {
        const response = await axios(`${PRODUCT_URL}/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        return null;
    }
    async search(filter = "") {
        let url = `${PRODUCT_URL}?productName_like=${filter}`;
        //console.log(`URL: ${url}`);
        let response = await axios(url);
        let data = [];
        if (response.status === 200) {
            data = response.data;
        }
        return data;
    }
    async save(data) {
        let postResponse = await axios.post(`${PRODUCT_URL}`, data);
        if (postResponse.status === 200) {
            alert("¡La operación fué satisfactoria!");
        }
    }
    async edit(id, data) {
        let putResponse = await axios.put(`${PRODUCT_URL}/${id}`, data);
        if (putResponse.status === 200) {
            alert("¡La operación fué satisfactoria!");
        }
    }
    async delete(id) {
        const response = await axios.delete(`${PRODUCT_URL}/${id}`);
        if (response.status === 200) {
            alert("¡La operación fué satisfactoria!");
        }
    }
}
