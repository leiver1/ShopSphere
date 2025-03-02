"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "../card";
import { Category } from "@prisma/client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../button";
import { useRouter } from "next/navigation";

interface PopularCategoriesProps {}
const PopularCategories: React.FC<PopularCategoriesProps> = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("/api/categories");

        const data = await response.json();
        setCategories(data.categories.slice(3, 9));
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="w-full overflow-scroll">
      <h3 className="text-lg mb-4">Popular Categories</h3>
      <div className=" grid sm:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-5">
        {categories &&
          categories.map((category, index) => (
            <Button
              variant="outline"
              className="block p-4 h-26 rounded-lg "
              key={index}
              onClick={() =>
                router.push(`/category/${category.href}?id=${category.id}`)
              }
            >
              <div className="flex items-center justify-center">
                <Icon icon={category.icon} className="w-12 h-12" />
              </div>
              <p className="text-sm text-center mt-2">{category.name}</p>
            </Button>
          ))}
      </div>
    </div>
  );
};

export default PopularCategories;
