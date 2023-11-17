
import { IcreateIssue } from "@/utils/schema/issue/DtoCreateIssue";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/Client";


export interface IGetIsues{
    id:number;
    title:string;
    description:string;
    status:"OPEN"|"IN_PROGRESS"|"CLOSE";
    createAt:Date;
    updatedAt:Date;
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = IcreateIssue.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.formErrors, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}

export async function GET() {
  const allIssue: IGetIsues[] = await prisma.issue.findMany();
  if (allIssue){
    return NextResponse.json(allIssue, { status: 200 });
  } 
  else return NextResponse.json([], { status: 400 });
}
export async function DELETE(pa:NextRequest) {
  const body = await pa.json();
  console.log(body)
}