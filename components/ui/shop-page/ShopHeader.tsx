"use client";
import { TestComponent } from "@/backup/TestComponent";
import { Button } from "../button";
import { Input } from "../input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

interface ShopHeaderProps {}

const ShopHeader: React.FC<ShopHeaderProps> = () => {
  const [categories, setCategories] = useState<[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  const handleAccountRouting = () => {
    if (session?.user?.role === "VENDOR") {
      router.push("/dashboard");
    } else {
      router.push("/account");
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <header className="flex items-center justify-between  py-3    ">
      {/* Logo */}
      <Button
        className="px-5 py-4 rounded-lg shadow-none "
        onClick={() => router.push("/")}
      >
        Shop Sphere
      </Button>

      {/* Kategorien für große Bildschirme */}
      <div className="hidden lg:block">
        <TestComponent categories={categories} />
      </div>

      {/* Mobile Menü Button */}
      <div className="block lg:hidden">
        <Button variant="ghost" size="icon">
          <Icon icon="lucide:menu" />
        </Button>
      </div>

      {/* Suchleiste */}
      <div className="flex-1 mx-4 max-w-xs sm:max-w-md md:max-w-lg lg:min-w-24">
        <Input placeholder="Search" className="w-full" />
      </div>

      {/* Benutzer- und Warenkorb-Buttons */}
      <div className="flex items-center space-x-3">
        {!session ? (
          <Button variant="ghost" onClick={() => router.push("/login")}>
            <Icon icon="lucide:log-in" />
            <span className="hidden sm:inline">Login</span>
          </Button>
        ) : (
          <Button variant="ghost" onClick={handleAccountRouting}>
            <Icon icon="lucide:user" />
            <span className="hidden sm:inline">Account</span>
          </Button>
        )}
        <Button variant="ghost">
          <Icon icon="lucide:shopping-cart" />
          <span className="hidden sm:inline">Cart</span>
        </Button>
      </div>
    </header>
  );
};

export default ShopHeader;
