import { MessageResponse } from "@/constant/Constant";
import { $errorInCatch } from "@/utils/api/$error";
import { SchemaCreateIssue } from "@/utils/schema/issue/DTO";
import { InterfaceGetIssue } from "@/utils/schema/issue/Interface";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/Client";

/**
 * =============== Get Issues ==================
 */
export async function GET() {
  try {
    const allIssue: InterfaceGetIssue[] = await prisma.issue.findMany();
    if (allIssue) {
      return NextResponse.json(allIssue, { status: 200 });
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
 * =============== Create Issue ==================
 */
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const validation = SchemaCreateIssue.safeParse(data);
    if (!validation.success) {
      return NextResponse.json(validation.error.formErrors, { status: 400 });
    }
    await prisma.issue.create({
      data,
    });
    return NextResponse.json({
      status: 201,
      message: MessageResponse.errorFound.create.success,
    });
  } catch (error) {
    $errorInCatch(error);
  }
}
/**
 * =============== DELETE Issue ==================
 */
export async function DELETE() {
  try {
    const Delete = await prisma.issue.deleteMany({});
    if (Delete) {
      return NextResponse.json({
        status: 200,
        message: MessageResponse.errorFound.delete.success,
      });
    }
    return NextResponse.json({
      status: 400,
      message: MessageResponse.errorFound.delete.unSuccess,
    });
  } catch (error) {
    $errorInCatch(error);
  }
}
