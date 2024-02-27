import IProduct from "../_models/IProduct";

//const PRODUCT_URL = "http://localhost:3001/api/product";
const PRODUCT_URL = process.env.PRODUCT_URL;
//const PRODUCT_URL = process.env.API_URL + '/product';

export default class ProductService {

  async get(id:number): Promise<IProduct | null> {
    //const response = await fetch(`${PRODUCT_URL}/${id}`);
    const response = await fetch(`${PRODUCT_URL}/${id}`, { cache: 'no-store' });
    //const response = await fetch(`${PRODUCT_URL}/${id}`, { next: { revalidate: 60 } });

    if (response.ok) {
      let data = await response.json();
      return data;
    }

    return null
  }

  async search(filter:string = ""): Promise<Array<IProduct>> {
    let url = `${PRODUCT_URL}/search/${filter}`;
    //console.log(`URL: ${url}`);

    //let response = await fetch(url);
    let response = await fetch(url, { cache: 'no-store' });
    //let response = await fetch(url, { next: { revalidate: 60 } });

    let data:Array<IProduct> = [];
    if (response.ok) {
      data = await response.json();
    }

    return data;
  }

  async save(data:IProduct) {
    let postResponse = await fetch(`${PRODUCT_URL}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (postResponse.ok) {
      return true;
    }
  }

  async edit(id:number, data:IProduct) {
    let putResponse = await fetch(`${PRODUCT_URL}/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (putResponse.ok) {
      return true;
    }
  }

  async delete(id:number) {
    const response = await fetch(`${PRODUCT_URL}/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({id}),
    });

    console.log(`Deleting product with id ${id} ...`);
    console.log(response);

    if (response.ok) {
      return true;
    }
  }
}
