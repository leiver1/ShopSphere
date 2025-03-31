import prisma from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Alle Produkte abrufen (falls nur das erste benötigt wird, dann findFirst())
    const products = await prisma.product.findMany({
      include: {
        ProductChoosable: {
          include: {
            InputChoosable: true,
          },
        },
        Images: true,
        Reviews: {
          include: {
            User: {
              select: {
                firstname: true,
                lastname: true,
                email: true,
              },
            },
          },
        },
      },
    });

    // Falls keine Produkte gefunden wurden, eine 404-Antwort zurückgeben
    if (!products || products.length === 0) {
      return NextResponse.json({ error: "No products found" }, { status: 404 });
    }

    return NextResponse.json({ data: products });
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
};
