import { authOptions } from "@/lib/nextauth/authOption";
import prisma from "@/lib/prisma/prismaClient";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

//  get all products
export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: "User Unauthenticated" },
      { status: 401 }
    );
  }

  console.log("The session user is:", session.user.id);

  const products = await prisma.product.findMany({
    where: { userId: Number(session.user.id) },
    include: { Category: true, Images: true },
  });

  console.log(products);

  if (!products) {
    return NextResponse.json(
      { message: "No products found under the session user" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { data: products, message: "Success" },
    { status: 200 }
  );
};
