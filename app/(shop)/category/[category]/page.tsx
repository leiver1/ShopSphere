"use client";

import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LandingBig from "@/components/ui/shop-page/LandingBig";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProductCard from "@/components/ui/shop-page/ProductCard";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOptions, setSortOptions] = useState<string | undefined>();

  const params = useSearchParams();
  const categoryId = Number(params.get("id"));

  const sortOptionsArray = [
    { label: "Best Match", value: "best_match" },
    { label: "Newest Articles", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Customer Ratings", value: "ratings" },
    { label: "Top Sellers", value: "top_sellers" },
  ];

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const response = await fetch(`/api/products?categoryId=${categoryId}`);
        const data = await response.json();

        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductsByCategory();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 my-8 gap-4">
        <Button
          className=" rounded-3xl p-10  bg-secondary text-secondary-foreground"
          variant="outline"
        >
          <Icon icon="lucide:columns" className="h-28 w-24" />
          <p>Vergleichen</p>
        </Button>
        <Button
          className=" rounded-3xl p-10  bg-secondary text-secondary-foreground"
          variant="outline"
        >
          <Icon icon="lucide:ticket-percent" className="h-28 w-24" />
          <p>Rabattcodes</p>
        </Button>
        <Button
          className=" rounded-3xl p-10  bg-secondary text-secondary-foreground"
          variant="outline"
        >
          <Icon icon="lucide:gift" className="h-28 w-24" />
          <p>Geschenkkarten</p>
        </Button>
        <Button
          className=" rounded-3xl p-10  bg-secondary text-secondary-foreground"
          variant="outline"
        >
          <Icon icon="lucide:star" className="h-28 w-24" />
          <p>Bewertungen</p>
        </Button>
      </div>
      <div className="grid grid-cols-2 ">
        <p className="text-lg">Treffer: {products.length}</p>
        <Select onValueChange={(vale) => setSortOptions(vale)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              {sortOptionsArray.map((opt, index) => (
                <SelectItem key={index} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-3  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 w-full place-items-stretch mt-3 ">
        {products.map((product, index) => (
          <div key={index} className="w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
