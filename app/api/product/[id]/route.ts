import prisma from "@/lib/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: number } }
) => {
  const id = Number(params.id);

  if (!id) {
    return NextResponse.json({ error: "No id provided" }, { status: 500 });
  }

  const product = await prisma.product.findUnique({
    where: { id: id as number },
    include: {
      Images: true,

      Reviews: true,
      User: true,
      ProductChoosable: {
        include: {
          InputChoosable: true,
        },
      },
    },
  });

  if (!product) {
    return NextResponse.json({ error: "No product found" }, { status: 500 });
  }

  return NextResponse.json(product, { status: 200 });
};
