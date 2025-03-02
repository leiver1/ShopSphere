import prisma from "@/lib/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Filter-Parameter aus der Query-String extrahieren
    const priceMin = searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : undefined;
    const priceMax = searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined;
    const minRating = searchParams.get("minRating")
      ? Number(searchParams.get("minRating"))
      : undefined;
    const inStock = searchParams.get("inStock")
      ? searchParams.get("inStock") === "true"
      : undefined;
    const categoryId = searchParams.get("categoryId")
      ? Number(searchParams.get("categoryId"))
      : undefined;

    const take = searchParams.get("take")
      ? Number(searchParams.get("take"))
      : undefined; // Default: 10 Produkte laden
    const newest = searchParams.get("newest") === "true";
    const oldest = searchParams.get("oldest") === "true";
    const ratingDesc = searchParams.get("ratingDesc") === "true"; // Beste Bewertung zuerst

    // Basis-Filter für Prisma Query
    const whereClause: any = {};

    if (priceMin !== undefined || priceMax !== undefined) {
      whereClause.price = {};
      if (priceMin !== undefined) whereClause.price.gte = priceMin;
      if (priceMax !== undefined) whereClause.price.lte = priceMax;
    }

    if (inStock !== undefined) {
      whereClause.stock = inStock ? { gt: 0 } : 0;
    }

    if (categoryId !== undefined) {
      whereClause.categoryId = categoryId;
    }

    // Sortierung nach Datum bestimmen
    let orderByClause = {};
    if (newest) {
      orderByClause = { createdAt: "desc" }; // Neueste zuerst
    } else if (oldest) {
      orderByClause = { createdAt: "asc" }; // Älteste zuerst
    }

    // Produkte mit Ratings aggregieren
    const productsWithRatings = await prisma.product.findMany({
      where: whereClause,
      take: take,
      orderBy: !ratingDesc ? orderByClause : undefined, // `orderBy` nur anwenden, wenn nicht nach Rating sortiert wird
      include: {
        Images: true,
        Category: true,
        Reviews: {
          select: { rating: true }, // Holen nur die Ratings für Berechnung
        },
      },
    });

    // Durchschnitts-Rating berechnen & optional nach rating sortieren
    let filteredProducts = productsWithRatings.map((product) => {
      const totalRatings = product.Reviews.length;
      const averageRating =
        totalRatings > 0
          ? product.Reviews.reduce((sum, review) => sum + review.rating, 0) /
            totalRatings
          : 0; // Falls keine Bewertungen vorhanden sind, ist das Rating 0

      return {
        ...product,
        averageRating: averageRating, // Durchschnittswert hinzufügen
      };
    });

    // Falls `ratingDesc=true`, sortieren wir die Produkte in JavaScript
    if (ratingDesc) {
      filteredProducts = filteredProducts.sort(
        (a, b) => b.averageRating - a.averageRating
      );
    }

    // Filter nach minRating anwenden
    filteredProducts = filteredProducts.filter((product) =>
      minRating !== undefined ? product.averageRating >= minRating : true
    );

    return NextResponse.json(filteredProducts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
