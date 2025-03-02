import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";

interface ProductSliderType {
  products?: Product[];
  sliderName: string;
}

const ProductSlider: React.FC<ProductSliderType> = ({
  products,
  sliderName,
}) => {
  return (
    <>
      <h3 className="text-xl">{sliderName}</h3>

      <div className="">
        <Carousel
          className=" relative"
          opts={{
            align: "center",
          }}
        >
          <CarouselPrevious className="absolute left-0 top-1/2 transform-translate-y-1/2 z-10 bg-white p-2 rounded-full shadow" />
          <CarouselContent className="flex gap-2">
            {products &&
              products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="min-w-[150px] md:min-w-[200px] lg:min-w-[300px] lg:basis-1/5 sm:basis-1/2 md:basis-1/3"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow" />
        </Carousel>
      </div>
    </>
  );
};

export default ProductSlider;
