"use client";

import CallToAction from "@/components/ui/shop-page/CallToAction";
import Footer from "@/components/ui/shop-page/Footer";
import LandingBig from "@/components/ui/shop-page/LandingBig";
import PopularCategories from "@/components/ui/shop-page/PopularCategories";
import ProductCard from "@/components/ui/shop-page/ProductCard";
import ProductSlider from "@/components/ui/shop-page/ProductSlider";
import ShopHeader from "@/components/ui/shop-page/ShopHeader";
import ThreeBigProduct from "@/components/ui/shop-page/ThreeBigProduct";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  const [besProducts, setBestProducts] = useState<Product[]>([]);
  const [forYouProducts, setForYouProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getBestProducts = async () => {
      try {
        const response = await fetch("/api/products?ratingDesc=true");
        const data = await response.json();

        setBestProducts(data.slice(0, 15));
      } catch (error) {
        console.log(error);
      }
    };
    const getForYouProducts = async () => {
      try {
        const response = await fetch("/api/products?take=15");
        const data = await response.json();

        setForYouProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getTrendingProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        setTrendingProducts(data.slice(12, 25));
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingProducts();
    getBestProducts();
    getForYouProducts();
  }, []);

  return (
    <div className="">
      <div className="mt-3">
        <LandingBig />
      </div>
      <div className="px-2 lg:px-0">
        <div className="mt-10">
          <PopularCategories />
        </div>
        <div className="mt-10">
          <ProductSlider products={besProducts} sliderName="Top Products" />
        </div>
        <div className="mt-10">
          <ThreeBigProduct />
        </div>
        <div className="mt-10">
          <ProductSlider products={forYouProducts} sliderName="For You" />
        </div>
        <div className="mt-10">
          <CallToAction />
        </div>
        <div className="mt-10">
          <ProductSlider products={trendingProducts} sliderName="Trending" />
        </div>
      </div>
    </div>
  );
};

export default page;
