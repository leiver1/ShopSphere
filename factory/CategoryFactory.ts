import prisma from "../lib/prisma/prismaClient";
import { faker } from "@faker-js/faker";

const CategoryFactory = async () => {
  await prisma.category.deleteMany();

  const categories = [
    { name: "Clothing", href: "/clothing", icon: "lucide:t-shirt" },
    { name: "Electronics", href: "/electronics", icon: "lucide:cpu" },
    { name: "Furniture", href: "/furniture", icon: "lucide:sofa" },
    { name: "Books", href: "/books", icon: "lucide:book-open" },
    { name: "Toys", href: "/toys", icon: "lucide:toy-brick" },
    { name: "Jewelry", href: "/jewelry", icon: "lucide:gem" },
    {
      name: "Beauty & Personal Care",
      href: "/beauty-personal-care",
      icon: "lucide:sparkles",
    },
    {
      name: "Sports & Outdoors",
      href: "/sports-outdoors",
      icon: "lucide:dumbbell",
    },
    { name: "Home & Kitchen", href: "/home-kitchen", icon: "lucide:home" },
    {
      name: "Art & Collectibles",
      href: "/art-collectibles",
      icon: "lucide:palette",
    },
  ];

  await prisma.category.createMany({
    data: categories,
  });
};

export default CategoryFactory;
