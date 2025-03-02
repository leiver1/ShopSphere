"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@prisma/client";
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

interface pageProps {}

const page: React.FC<pageProps> = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [product, setProduct] = useState<Product | undefined>();
  const param = useParams();
  const id = param.id;

  console.log(id);

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

  return (
    <>
      {product && (
        <>
          <div className="hidden md:grid   lg:grid-cols-3 w-full mt-10">
            <div className="md:grid hidden gap-6   md:grid-cols-5 w-full  col-span-2">
              <div className="grid gap-2 md:col-span-1  max-h-[515px] overflow-scroll p-1">
                {product.Images.map((image, index) => (
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
                  src={product.Images[selectedImage].src}
                  alt="lolo"
                  className="w-full h-full object-center object-cover max-h-[515px] rounded-md"
                />
              </div>
            </div>
            <div className="px-14 grid gap-1 h-full">
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
                  <Select>
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
                <Button>
                  <Icon icon="lucide:shopping-cart" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          <div className=" md:hidden  grid gap-3">
            <div>
              <Carousel>
                <CarouselContent>
                  {product.Images.map((image, index: number) => (
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

            <div className="">fds</div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
