import { NextRequest } from "next/server";

// POST http://localhost:3000/api/product
export async function POST(request: NextRequest)
{
    return new Response("POST READY!", {status: 200});
}

// PUT http://localhost:3000/api/product
export async function PUT(request: NextRequest)
{
    return new Response("PUT READY!", {status: 200});
}