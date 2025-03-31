"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import StarRatingBasic from "@/components/commerce-ui/star-rating-basic";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CartItem, useCartContext } from "@/context/CartContext";
import { enqueueSnackbar } from "notistack";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Product } from "@/types/ProductType";

interface pageProps {}

const page: React.FC<pageProps> = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [amount, setAmount] = useState<number>(1);
  const [product, setProduct] = useState<Product | undefined>();
  const { addCartItem } = useCartContext();
  const param = useParams();
  const id = param.id;

  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`/api/product/${id}`);
        const data = await response.json();

        setProduct(data);
        console.log(data);
        if (!response.ok) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const addToCart = () => {
    const price = (product?.price as number) * amount;
    const cartItem: CartItem = {
      product: product as Product,
      amount: amount,
      price,
    };
    addCartItem(cartItem);

    toast(`${product?.title} (${amount}) added to your cart`, {
      description: "Check your cart to review your items.",
      action: {
        label: "View Cart",
        onClick: () => router.push("/cart"),
      },
    });

    // const snackbar = {
    //   message: `${product?.title} (${amount}) added to cart`,
    //   anchorOrigin: {
    //     vertical: "bottom" as "bottom",
    //     horizontal: "right" as "right",
    //   },

    //   variant: "success" as "success",
    //   autoHideDuration: 3000,
    // };

    // enqueueSnackbar(snackbar);
  };

  return (
    <>
      {product && (
        <>
          <div className=" md:grid md:gap-5  lg:grid-cols-3 w-full mt-10">
            {/* SMARTPHONE IMAGES CAROUSEL */}
            <div className="block md:hidden mb-4">
              <Carousel>
                <CarouselContent>
                  {product.Images &&
                    product.Images.map((image, index: number) => (
                      <CarouselItem key={index}>
                        <Card className="m-0 p-0">
                          <CardContent className="p-0">
                            <img
                              src={image.src}
                              alt="ProductImage "
                              className="w-full h-96 object-cover object-center rounded-md"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* NORMAL IMAGES CLICKABEL */}
            <div className="md:grid hidden gap-6   md:grid-cols-5 w-full  col-span-2">
              <div className="md:grid gap-2 md:col-span-1 hidden  max-h-[515px] overflow-scroll p-1">
                {product.Images &&
                  product.Images.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      onClick={() => setSelectedImage(index)}
                      alt="lol"
                      className="h-24 object-cover w-full transition hover:scale-105 cursor-pointer object-center rounded-md"
                    />
                  ))}
              </div>

              <div className=" md:col-span-4">
                <img
                  src={product.Images && product.Images[selectedImage].src}
                  alt="lolo"
                  className="w-full h-[515px] object-center object-cover rounded-md"
                />
              </div>
            </div>

            {/* PRODUCT INFO  */}
            <div className="lg:px-14  md:px-4 grid gap-5 h-full ">
              <div>
                <h3 className=" text-2xl">{product.title}</h3>
                <div className="flex items-center gap-1">
                  <StarRatingBasic
                    value={4}
                    color="orange"
                    iconSize={20}
                    readOnly
                  />

                  <p className="text-muted-foreground text-sm">(13 Reviews)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                lakj dfaksdf lkjasdlkfjklasdjf jdklfj lkasdjfkl jasdf adsf
                adflkasdjf j fsjd fkljsdf jskldf klsdfkl js f
                dsfkjslkdfjklsjdfklsdjflksdjfklsdklfskldfjsldf
              </p>
              <div className="flex items-center gap-2">
                <Badge
                  className={`${
                    product.stock > 0
                      ? "bg-green-500"
                      : "bg-secondary-foreground"
                  } hover:bg-secondary-foreground`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  ({product.stock})
                </p>
              </div>
              <div>
                <p className="text-2xl">233.98€</p>
                <div className="flex items-center gap-3">
                  <p className="text-sm text-secondary-foreground ">
                    12€/Month with
                  </p>

                  <Button
                    size="icon"
                    variant="outline"
                    className=" h-8 w-8 shadow-none"
                  >
                    <Icon icon="ph:paypal-logo-thin" />
                  </Button>
                </div>
                <a
                  href="https://youtube.com"
                  className="text-xs text-muted-foreground"
                >
                  <u>Learn more</u>
                </a>
              </div>

              <div>
                <div>
                  {product?.ProductChoosable &&
                    product?.ProductChoosable.map((choosable, index) => (
                      <Select key={index}>
                        <SelectTrigger>
                          <SelectValue placeholder={choosable.title} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>
                              Choose a {choosable.title}
                            </SelectLabel>
                            {choosable.InputChoosable.map((input, index) => (
                              <SelectItem value={input.input} key={index}>
                                {input.input}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ))}
                </div>
                <div className="mt-3">
                  <Select
                    onValueChange={(amount) => setAmount(Number(amount + 1))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Array.from({ length: 10 }).map((_, index) => (
                          <SelectItem value={index.toString()} key={index}>
                            {index + 1}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Premium Delivery
                </label>
              </div>
              <div>
                <Button onClick={() => addToCart()}>
                  <Icon icon="lucide:shopping-cart" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          <div className=" hidden  ">
            <div className="">fds</div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
