import { NextRequest } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{id:string}}) {
    console.log(params.id)
    console.log("JK")
}