import ProductData from "@/app/_data/ProductData";
import { IProductSchema } from "@/app/_models/IProduct";
import { NextRequest } from "next/server";

type productParams = { params: { id: number } };

// GET http://localhost:3000/api/product/1
export async function GET(request: NextRequest, { params }: productParams) {
  const { id } = params;

  const pD = new ProductData();

  try {
    const product = await pD.get(id);

    if (product) {
      return Response.json(product);
    } else {
      return new Response("", { status: 404 }); // 404 Not Found
    }
  } catch (error: any) {
    return new Response("", { status: 500 }); // 500 Internal Server Error
  }
  //return new Response(`GET ${id} READY!`, {status: 200});
}

// PUT http://localhost:3000/api/product/1
export async function PUT(request: NextRequest, { params }: productParams) {

    const { id } = params;

    const product = await request.json();
    const pD = new ProductData();
  
    try {

        if (Number(id) !== product.id) {
            return new Response("AQUI", { status: 400 }); // 400 Bad Request
        }
  
      // Data validation
      const parse = IProductSchema.safeParse(product);
  
      if (parse.success) {
        // Update the product
        const affected = await pD.update(product);
  
        if (affected > 0) {
          return new Response("", { status: 200 }); // 200 OK
        } else {
          return new Response("", { status: 404 }); // 404 Not Found
        }
      } else {
        // Fill validation issues evidence
        let validation: Array<{ id: string; msg: string }> = [];
        parse.error.errors.forEach((errorDetail, index) => {
          validation.push({
            id: errorDetail.path.join("."),
            msg: errorDetail.message,
          });
        });
  
        return Response.json(validation, { status: 400 }); // 400 Bad Request
      }
    } catch (error: any) {
      return new Response("", { status: 500 }); // 500 Internal Server Error
    }
  
    // return new Response("PUT READY!", {status: 200});
  }

// DELETE http://localhost:3000/api/product/1
export async function DELETE(request: NextRequest, { params }: productParams) {
  const { id } = params;

  const pD = new ProductData();

  try {
    const affected = await pD.delete(id);

    if (affected > 0) {
      return new Response("", { status: 200 }); // 200 OK
    } else {
      return new Response("", { status: 404 }); // 404 Not Found
    }
  } catch (error: any) {
    return new Response("", { status: 500 }); // 500 Internal Server Error
  }
  //return new Response(`DELETE ${id} READY!`, {status: 200});
}
