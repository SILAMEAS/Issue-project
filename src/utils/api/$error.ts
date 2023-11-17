import { NextResponse } from "next/server"

export const $errorInCatch=(error:any)=>{
    return NextResponse.json({status:404,message:error})
}