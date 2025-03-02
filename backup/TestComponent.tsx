import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ListItemProps {
  title: string;
  href: string;
  description?: string;
  className?: string;
  icon?: string;
}
interface NavigationType {
  categories: [];
}

const DivItem: React.FC<ListItemProps> = ({
  title,
  description,
  className,
  icon,
  href,
}) => {
  return (
    <div className="cursor-pointer bg-blue-400 p-3 w-full hover:bg-accent hover:text-accent-foreground rounded-md leading-none no-underline outline-none transition-colors">
      <a href={href}>
        <div className="items-center flex gap-2">
          {icon && <Icon icon={icon as string} />}
          <div className="text-sm font-medium leading-none">{title}</div>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </div>
  );
};

export const TestComponent: React.FC<NavigationType> = ({ categories }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div style={{ width: "240px", padding: "12px" }}>
              <DivItem
                href={`/category/${"all"}`}
                title={"All"}
                icon="lucide:sparkles"
              />

              {categories &&
                categories.map((category, index) => (
                  <DivItem
                    key={index}
                    href={`/category/${category.href}?id=${category.id}`}
                    title={category.name}
                    icon={category.icon}
                  />
                ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What's New</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <div
                style={{
                  width: "600px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "12px",
                }}
              >
                <DivItem
                  title={"New Arrivals"}
                  description={"Fresh styles just in. Get yours now!"}
                  href="/login"
                />
                <DivItem
                  title={"Faster Checkout"}
                  description={"A smoother, quicker way to shop!"}
                  href="/login"
                />
              </div>
              <div
                style={{
                  width: "600px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "12px",
                }}
              >
                <DivItem
                  title={"Exclusive Deals"}
                  description={"Sign up for special discounts!"}
                  href="/login"
                />
                <DivItem
                  title={"New Payments"}
                  description={"More ways to pay, more convenience!"}
                  href="/login"
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <div
                style={{
                  width: "600px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "12px",
                }}
              >
                <DivItem
                  title={"Create Account"}
                  description={"Sign up to access all features!"}
                  href="/register"
                />
                <DivItem
                  title={"First Purchase"}
                  description={"Get a special discount on your first order!"}
                  href="/offers"
                />
              </div>
              <div
                style={{
                  width: "600px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "12px",
                }}
              >
                <DivItem
                  title={"Support"}
                  description={"Need help? Contact our support team!"}
                  href="/support"
                />
                <DivItem
                  title={"Explore"}
                  description={"Browse our collections and start shopping!"}
                  href="/shop"
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
