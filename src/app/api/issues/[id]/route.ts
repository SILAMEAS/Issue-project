import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/Client";
import { $errorInCatch } from "@/utils/api/$error";
import { MessageResponse } from "@/constant/Constant";
import { IGetIsues } from "@/utils/schema/issue/Interface";
interface IGet {
  params: { id: string };
}
/**
 * =============== Get Issues ==================
 */
export async function GET(props: IGet) {
  const { params } = props;
  try {
    const findById: IGetIsues | null = await prisma.issue.findFirst({
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
export async function UPDATE(req: NextRequest, props: IGet) {
  const { params } = props;
  const body = await req.json();
  try {
    const Update = await prisma.issue.update({
      where: {
        id: Number(params.id),
      },
      data: body,
    });

    return NextResponse.json({
      status: 400,
      message: MessageResponse.errorFound.delete.unSuccess,
    });
  } catch (error) {
    $errorInCatch(error);
  }
}
