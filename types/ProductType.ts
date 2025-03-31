import {
  Product as PrismaProduct,
  ProductImage,
  ProductChoosable as PrismaProductChoosable,
  InputChoosable as PrismaInputChoosable,
  ProductReview,
  Category,
} from "@prisma/client";

interface ProductChoosable extends PrismaProductChoosable {
  InputChoosable: PrismaInputChoosable[];
}

export interface Product extends PrismaProduct {
  Images?: ProductImage[];
  ProductChoosable?: ProductChoosable[];
  Reviews?: ProductReview[];
  Category?: Category;
  averageRating?: number | undefined;
}
