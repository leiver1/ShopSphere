"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { PlusCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  // from Int: 12 / 2 / 100 -> Status: inStock, lowStock etc
  const stockAmountToStockStatus = (stock: number) => {
    if (stock >= 5) {
      return "In Stock";
    } else if (stock < 5 && stock >= 1) {
      return "Low Stock";
    } else {
      return "Out of Stock";
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch("/api/product", {
          method: "GET",
        });
        const data = await response.json();
        const products = data.data;
        const convertedProducts = products.map((product: any) => {
          return {
            ...product,
            status: stockAmountToStockStatus(product.stock),
          };
        });
        setProducts(convertedProducts);
        setLoading(false);
        console.log("Products response data: ", data);
      } catch (error: any) {
        setLoading(false);
        toast.error(error);
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="flex items-center gap-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 md:w-1/2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-8"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="home-decor">Home Decor</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="bath-body">Bath & Body</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="stationery">Stationery</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="in-stock">In Stock</SelectItem>
              <SelectItem value="low-stock">Low Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border">
        {loading ? (
          <p>loading...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Inventory</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.Images[0].src || "/placeholder.svg"}
                      // alt={product.Images.alt}

                      className="rounded-md object-cover w-8 h-8"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.status === "In Stock"
                          ? "default"
                          : product.status === "Low Stock"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.Category.name}</TableCell>
                  <TableCell className="text-right">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Icon icon="lucide:edit-2" className="w-7 h-7" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-secondary text-secondary-foreground">
                          <p>Edit Product</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Icon icon="lucide:eye" className="h-7 w-7" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-secondary text-secondary-foreground">
                          <p>Preview</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
