"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { CartItem, useCartContext } from "@/context/CartContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  const { cartItem } = useCartContext();

  const [cartItemState, setCartItemState] = useState<CartItem[]>(cartItem);

  const handleAmount = (index: number, calc: string) => {
    console.log("why 2?");
    if (calc === "add") {
      setCartItemState((prev) =>
        prev.map((item, i) =>
          i === index
            ? {
                ...item,
                amount: calc === "add" ? item.amount + 1 : item.amount - 1,
              }
            : item
        )
      );
    }
    if (calc === "minus") {
      setCartItemState((prev) =>
        prev.map((item, i) =>
          i === index
            ? {
                ...item,
                amount:
                  calc === "minus" && item.amount > 0
                    ? item.amount - 1
                    : item.amount + 1,
              }
            : item
        )
      );
    }
  };

  if (cartItem.length <= 0) {
    return (
      <>
        <div className="mx h-screen">
          <h3 className="text-xl">Your Shopping Cart is empty!</h3>
        </div>
      </>
    );
  }

  return (
    <div className="grid my-4">
      {cartItemState.length > 0 &&
        cartItemState.map((item, index) => (
          <div key={index} className="p-3 border-t  grid grid-cols-5 gap-4">
            <div className="grid grid-cols-2 gap-3  place-items-center">
              <div className="border ">
                <img src={item.product.Images[0].src} className="w-full h-24" />
              </div>
              <div className="text-md ">
                <p>{item.product.title}</p>
                <p className="text-xs text-muted-foreground">
                  Something interesting
                </p>
              </div>
            </div>
            {item.product.ProductChoosable.length > 0 &&
              item.product.ProductChoosable.map((choosable, index) => (
                <div
                  key={index}
                  className={`grid cols-${item.product.ProductChoosable.length} gap-1 grid place-items-center`}
                >
                  <Select>
                    <SelectTrigger className="w-2/4 shadow-none">
                      <SelectValue placeholder={choosable.title} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {choosable.InputChoosable.length > 0 &&
                          choosable.InputChoosable.map((input, index) => (
                            <SelectItem value={input.input} key={index}>
                              {input.input}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            <div className="text-sm grid place-items-center">
              <div className="grid grid-cols-3 gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="shadow-none text-secondary-foreground"
                  onClick={() => handleAmount(index, "add")}
                >
                  <Icon icon="lucide:plus" />
                </Button>
                <p className="my-auto">{item.amount} Stk.</p>
                <Button
                  size="icon"
                  variant="ghost"
                  className="shadow-none text-secondary-foreground"
                  onClick={() => handleAmount(index, "minus")}
                >
                  <Icon icon="lucide:minus" />
                </Button>
              </div>
            </div>
            <div className="grid place-items-center">
              {item.amount * item.price}€
            </div>
            <div className="grid place-items-center">
              <Button size="icon" variant="link" className="shadow-none ">
                <Icon icon="lucide:trash" color="red"></Icon>
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
