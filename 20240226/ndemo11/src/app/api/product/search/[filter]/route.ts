import ProductData from "@/app/_data/ProductData";
import { NextRequest } from "next/server";

type searchParams = { params: { filter: string } };

// GET http://localhost:3000/api/product/search/queso
export async function GET(request: NextRequest, { params }: searchParams) {
  const { filter } = params;

  const pD = new ProductData();

  try {
    const products = await pD.search(filter);

    if (products.length > 0) {
      return Response.json(products);
    } else {
      return new Response("", { status: 404 }); // 404 Not Found
    }
  } catch (error: any) {
    return new Response("", { status: 500 }); // 500 Internal Server Error
  }
}
