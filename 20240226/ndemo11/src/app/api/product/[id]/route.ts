import { NextRequest } from "next/server";

type productParams = { params: { id: number }};

// GET http://localhost:3000/api/product/1
export async function GET(request: NextRequest, { params }: productParams)
{
    const {id} = params
    return new Response(`GET ${id} READY!`, {status: 200});
}

// DELETE http://localhost:3000/api/product/1
export async function DELETE(request: NextRequest, { params }: productParams)
{
    const {id} = params
    return new Response(`DELETE ${id} READY!`, {status: 200});
}