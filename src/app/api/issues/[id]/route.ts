import { MessageResponse } from "@/constant/Constant";
import { $errorInCatch } from "@/utils/api/$error";
import {InterfaceGetIssue, InterfaceParams} from "@/utils/schema/issue/Interface";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/Client";
import { SchemaUpdateIssue} from "@/utils/schema/issue/DTO";

/**
 * =============== Get Issues ==================
 */
export async function GET(req:NextRequest,{params}: { params: {id:number} }) {
  try {
    const findById: InterfaceGetIssue | null = await prisma.issue.findFirst({
      where: { id: Number(params.id) },
    });
    if (findById) {
      return NextResponse.json(findById, { status: 200 });
    } else
      return NextResponse.json({
        status: 400,
        message: MessageResponse.errorUnknow,
      });
  } catch (error) {
    $errorInCatch(error);
  }
}
/**
 * =============== Update Issue ==================
 */
export async function PUT(req:NextRequest,{params}: { params: {id:number} }) {
  console.log("UPDATE",params.id)
  const body = await req.json();
  console.log("body",body)
  const validation = SchemaUpdateIssue.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.formErrors, { status: 400 });
  }
  try {
     await prisma.issue.update({
      where: {
        id: Number(params.id),
      },
      data: body,
    });
    return NextResponse.json({
      status: 200,
      message: MessageResponse.errorFound.update.success,
    });
  } catch (error) {
    $errorInCatch(error);
  }
}
