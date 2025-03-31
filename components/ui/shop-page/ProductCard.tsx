"use client";

import { Card, CardContent } from "../card";
import { Button } from "../button";
import StarRatingBasic from "@/components/commerce-ui/star-rating-basic";
import { cn } from "@/lib/utils"; // Falls du Tailwind Merge nutzt
import { useRouter } from "next/navigation";
import { Product } from "@/types/ProductType";

interface ProductCardProps {
  product?: Product;
  className?: string;
}
{
  /* <Card className="w-64 shadow-none border-none rounded-lg h-[330px]   "> */
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const router = useRouter();
  return (
    <Card
      className={cn(
        " shadow-none border-none rounded-xl hover:cursor-pointer  my-8   transition  hover:scale-105 hover:shadow-lg hover:border  ",
        className
      )}
      onClick={() => router.push(`/product/${product?.id}`)}
    >
      <CardContent className="px-0  gap-4 rounded-lg  h-full">
        {/* Bildcontainer mit fester Höhe */}
        <div className="bg-secondary p-0 flex items-center justify-center rounded-lg h-[180px] w-full">
          <img
            src={
              (product?.Images && product?.Images[0]?.src) || "/placeholder.jpg"
            } // Fallback-Bild für leere Einträge
            alt="product-image"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>

        {/* Produktdetails mit fester Höhe */}
        <div className="flex flex-col  min-h-[130px] px-2 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium line-clamp-1">
              {product?.title}
            </h3>
            <p className="text-md font-semibold">{product?.price}€</p>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product?.subtitle}
          </p>

          {/* Sternebewertung */}
          <div className="flex items-center gap-1 mt-auto">
            <StarRatingBasic
              value={
                (product?.averageRating as number) &&
                (product?.averageRating as number)
              }
              color="orange"
              iconSize={14}
              readOnly
            />
            <span className="text-xs text-muted-foreground">
              ({product?.averageRating?.toFixed(1) || "0.0"})
            </span>
          </div>

          {/* Button mit fester Platzierung */}
          <Button variant={"outline"} className="rounded-xl w-2/4 mt-2">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
