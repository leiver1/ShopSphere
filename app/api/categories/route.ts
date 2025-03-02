import prisma from "@/lib/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const categories = await prisma.category.findMany();
    if (!categories) {
      return NextResponse.json(
        { error: "No Categories fetched" },
        { status: 500 }
      );
    }

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "someething bad happend!", detail: error },
      { status: 200 }
    );
  }
};
