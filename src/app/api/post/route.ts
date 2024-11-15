import { NextRequest,NextResponse } from "next/server";
import { db } from "@vercel/postgres";
import { v4 as uuidv4 } from "uuid";
import {cookies} from "next/dist/client/components/headers";

export async function GET(){
    const client = await db.connect();
    const data = await client.sql`SELECT * FROM users`;
    
    if(data){
        return NextResponse.json({data},{status:200})
    }
    else{
        return NextResponse.json({message:"No data found"},{status:404})
    }
}

export async function POST(request:NextRequest){
    const resp = await request.json();
    const client = await db.connect();
    if(resp.name){
        const id=uuidv4();
        const cookie = cookies();
        cookie.set('id',id)
        await client.sql`CREATE TABLE IF NOT EXISTS users (
            id VARCHAR(255),
            name VARCHAR(50),
            message VARCHAR(255)
        );`
        const result =await  client.sql`INSERT INTO users 
        VALUES
        (${id},${resp.name},${resp.message})
        `
        ;
        return NextResponse.json({result},{status:200})
    }
    else{
        return NextResponse.json({message:"Name not found"},{status:404})
    }
}