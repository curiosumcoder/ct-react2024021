import { NextRequest } from "next/server";

type searchParams = { params: { filter: string }};

// GET http://localhost:3000/api/product/search/queso
export async function GET(request: NextRequest, { params }: searchParams)
{
    const {filter} = params
    return new Response(`GET ${filter} READY!`, {status: 200});
}
