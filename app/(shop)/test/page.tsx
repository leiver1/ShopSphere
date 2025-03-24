// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { ChevronRight, Heart, Menu, Search, ShoppingBag, ShoppingCart, Star, User } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export default function WebshopLanding() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Top announcement bar */}
//       <div className="bg-primary py-2 text-center text-sm text-primary-foreground">
//         <p>Free shipping on all orders over €50 | 30-day returns</p>
//       </div>

//       {/* Header */}
//       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center">
//           <div className="md:hidden">
//             <Button variant="ghost" size="icon">
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </div>

//           <div className="flex items-center gap-2 md:ml-0">
//             <ShoppingBag className="h-6 w-6" />
//             <span className="text-xl font-bold">ModaShop</span>
//           </div>

//           <nav className="mx-6 hidden items-center space-x-4 md:flex lg:space-x-6">
//             <Link
//               href="#"
//               className="text-sm font-medium transition-colors hover:text-primary"
//             >
//               Home
//             </Link>
//             <Link
//               href="#"
//               className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
//             >
//               Shop
//             </Link>
//             <Link
//               href="#"
//               className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
//             >
//               Categories
//             </Link>
//             <Link
//               href="#"
//               className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
//             >
//               New Arrivals
//             </Link>
//             <Link
//               href="#"
//               className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
//             >
//               Sale
//             </Link>
//           </nav>

//           <div className="hidden flex-1 md:flex">
//             <div className="relative w-full max-w-sm">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search products..."
//                 className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
//               />
//             </div>
//           </div>

//           <div className="flex flex-1 items-center justify-end space-x-4">
//             <Link href="#" className="text-muted-foreground hover:text-foreground">
//               <User className="h-5 w-5" />
//               <span className="sr-only">Account</span>
//             </Link>
//             <Link href="#" className="text-muted-foreground hover:text-foreground">
//               <Heart className="h-5 w-5" />
//               <span className="sr-only">Wishlist</span>
//             </Link>
//             <Link href="#" className="relative text-muted-foreground hover:text-foreground">
//               <ShoppingCart className="h-5 w-5" />
//               <span className="sr-only">Cart</span>
//               <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Banner */}
//         <section className="relative">
//           <div className="relative h-[500px] w-full overflow-hidden md:h-[600px] lg:h-[700px]">
//             <Image
//               src="/placeholder.svg?height=700&width=1920"
//               alt="Hero banner"
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
//             <div className="absolute inset-0 flex items-center">
//               <div className="container px-4 md:px-6">
//                 <div className="max-w-md space-y-4">
//                   <Badge className="mb-2">New Collection</Badge>
//                   <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//                     Summer Styles 2024
//                   </h1>
//                   <p className="text-lg text-muted-foreground md:text-xl">
//                     Discover the latest trends and elevate your wardrobe with our new summer collection.
//                   </p>
//                   <div className="flex flex-col gap-2 pt-4 sm:flex-row">
//                     <Button size="lg">Shop Now</Button>
//                     <Button variant="outline" size="lg">Explore Collection</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Categories */}
//         <section className="w-full py-12 md:py-16 lg:py-20">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Shop by Category</h2>
//                 <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
//                   Browse our wide selection of products across different categories.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
//               {[
//                 { name: "Women's Fashion", image: "/placeholder.svg?height=400&width=400" },
//                 { name: "Men's Clothing", image: "/placeholder.svg?height=400&width=400" },
//                 { name: "Accessories", image: "/placeholder.svg?height=400&width=400" },
//                 { name: "Footwear", image: "/placeholder.svg?height=400&width=400" },
//               ].map((category, index) => (
//                 <Link href="#" key={index} className="group relative overflow-hidden rounded-lg">
//                   <div className="aspect-square w-full overflow-hidden rounded-lg">
//                     <Image
//                       src={category.image || "/placeholder.svg"}
//                       alt={category.name}
//                       width={400}
//                       height={400}
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4">
//                     <div>
//                       <h3 className="font-medium text-lg">{category.name}</h3>
//                       <span className="text-sm text-muted-foreground">Shop now</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//               <div>
//                 <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
//                 <p className="text-muted-foreground">Handpicked products for you</p>
//               </div>
//               <Link href="#" className="group inline-flex items-center text-sm font-medium">
//                 View all products
//                 <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//               </Link>
//             </div>
//             <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//               {[
//                 {
//                   name: "Casual Summer Dress",
//                   price: "€49.99",
//                   originalPrice: "€69.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   rating: 4.5,
//                   reviews: 42,
//                   sale: true
//                 },
//                 {
//                   name: "Classic White Sneakers",
//                   price: "€89.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   rating: 4.8,
//                   reviews: 76
//                 },
//                 {
//                   name: "Leather Crossbody Bag",
//                   price: "€129.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   rating: 4.7,
//                   reviews: 28
//                 },
//                 {
//                   name: "Slim Fit Jeans",
//                   price: "€59.99",
//                   originalPrice: "€79.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   rating: 4.6,
//                   reviews: 53,
//                   sale: true
//                 },
//               ].map((product, index) => (
//                 <Card key={index} className="overflow-hidden">
//                   <div className="relative">
//                     <Link href="#" className="relative block aspect-[3/4] w-full overflow-hidden">
//                       <Image
//                         src={product.image || "/placeholder.svg"}
//                         alt={product.name}
//                         width={300}
//                         height={400}
//                         className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//                       />
//                     </Link>
//                     {product.sale && (
//                       <Badge className="absolute left-2 top-2 bg-destructive hover:bg-destructive">
//                         Sale
//                       </Badge>
//                     )}
//                     <Button
//                       variant="secondary"
//                       size="icon"
//                       className="absolute right-2 top-2 h-8 w-8 rounded-full opacity-0 transition-opacity hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
//                     >
//                       <Heart className="h-4 w-4" />
//                       <span className="sr-only">Add to wishlist</span>
//                     </Button>
//                   </div>
//                   <CardContent className="p-4">
//                     <div className="space-y-1">
//                       <h3 className="font-medium">{product.name}</h3>
//                       <div className="flex items-center gap-2">
//                         {product.originalPrice ? (
//                           <>
//                             <span className="font-medium text-destructive">{product.price}</span>
//                             <span className="text-sm text-muted-foreground line-through">
//                               {product.originalPrice}
//                             </span>
//                           </>
//                         ) : (
//                           <span className="font-medium">{product.price}</span>
//                         )}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <div className="flex">
//                           {Array(5)
//                             .fill(null)
//                             .map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`h-4 w-4 ${
//                                   i < Math.floor(product.rating)
//                                     ? "fill-primary text-primary"
//                                     : i < product.rating
//                                     ? "fill-primary/50 text-primary"
//                                     : "fill-muted text-muted"
//                                 }`}
//                               />
//                             ))}
//                         </div>
//                         <span className="text-xs text-muted-foreground">
//                           ({product.reviews})
//                         </span>
//                       </div>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="p-4 pt-0">
//                     <Button className="w-full">Add to Cart</Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Promotion Banner */}
//         <section className="w-full py-12 md:py-16 lg:py-20">
//           <div className="container px-4 md:px-6">
//             <div className="relative overflow-hidden rounded-lg">
//               <div className="relative flex flex-col items-center justify-center gap-4 bg-muted p-8 text-center md:p-12 lg:p-16">
//                 <div className="space-y-3">
//                   <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//                     Summer Sale
//                   </h2>
//                   <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
//                     Up to 50% off on selected items. Limited time offer.
//                   </p>
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-4">
//                   <div className="flex flex-col items-center">
//                     <span className="text-3xl font-bold">15</span>
//                     <span className="text-sm text-muted-foreground">Days</span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <span className="text-3xl font-bold">08</span>
//                     <span className="text-sm text-muted-foreground">Hours</span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <span className="text-3xl font-bold">23</span>
//                     <span className="text-sm text-muted-foreground">Minutes</span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <span className="text-3xl font-bold">54</span>
//                     <span className="text-sm text-muted-foreground">Seconds</span>
//                   </div>
//                 </div>
//                 <Button size="lg" className="mt-4">
//                   Shop the Sale
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* New Arrivals */}
//         <section className="w-full py-12 md:py-16 lg:py-20">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//               <div>
//                 <h2 className="text-3xl font-bold tracking-tight">New Arrivals</h2>
//                 <p className="text-muted-foreground">The latest additions to our collection</p>
//               </div>
//               <Link href="#" className="group inline-flex items-center text-sm font-medium">
//                 View all new arrivals
//                 <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//               </Link>
//             </div>
//             <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//               {[
//                 {
//                   name: "Floral Print Blouse",
//                   price: "€39.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   new: true
//                 },
//                 {
//                   name: "Slim Fit Chinos",
//                   price: "€49.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   new: true
//                 },
//                 {
//                   name: "Oversized Sweater",
//                   price: "€59.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   new: true
//                 },
//                 {
//                   name: "Canvas Tote Bag",
//                   price: "€29.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   new: true
//                 },
//                 {
//                   name: "Leather Ankle Boots",
//                   price: "€99.99",
//                   image: "/placeholder.svg?height=400&width=300",
//                   new: true
//                 },
//               ].map((product, index) => (
//                 <div key={index} className="group relative">
//                   <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
//                     <Image
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.name}
//                       width={300}
//                       height={400}
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                     {product.new && (
//                       <Badge className="absolute left-2 top-2">New</Badge>
//                     )}
//                   </div>
//                   <div className="mt-2 space-y-1 text-sm">
//                     <h3 className="font-medium line-clamp-1">{product.name}</h3>
//                     <p>{product.price}</p>
//                   </div>
//                   <Button
//                     variant="secondary"
//                     size="sm"
//                     className="absolute bottom-12 left-1/2 w-[90%] -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100"
//                   >
//                     Quick View
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
//           <div className="container px-4 md:px-6">
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
//               {[
//                 {
//                   title: "Free Shipping",
//                   description: "On all orders over €50",
//                   icon: <ShoppingBag className="h-10 w-10" />
//                 },
//                 {
//                   title: "Easy Returns",
//                   description: "30-day return policy",
//                   icon: <ChevronRight className="h-10 w-10 rotate-180" />
//                 },
//                 {
//                   title: "Secure Payment",
//                   description: "100% secure checkout",
//                   icon: <ShoppingCart className="h-10 w-10" />
//                 },
//                 {
//                   title: "Customer Support",
//                   description: "24/7 customer service",
//                   icon: <User className="h-10 w-10" />
//                 }
//               ].map((feature, index) => (
//                 <div key={index} className="flex flex-col items-center text-center">
//                   <div className="mb-4 rounded-full bg-background p-3 text-primary">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-lg font-medium">{feature.title}</h3>
//                   <p className="text-sm text-muted-foreground">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Newsletter */}
//         <section className="w-full py-12 md:py-16 lg:py-20">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//                   Subscribe to Our Newsletter
//                 </h2>
//                 <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
//                   Stay updated with our latest products, trends, and exclusive offers.
//                 </p>
//               </div>
//               <div className="mx-auto w-full max-w-md space-y-2">
//                 <form className="flex space-x-2">
//                   <Input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="max-w-lg flex-1"
//                   />
//                   <Button type="submit">Subscribe</Button>
//                 </form>
//                 <p className="text-xs text-muted-foreground">
//                   By subscribing, you agree to our{" "}
//                   <Link href="#" className="underline underline-offset-2">
//                     Privacy Policy
//                   </Link>
//                   .
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Instagram Feed */}
//         <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tight">Follow Us on Instagram</h2>
//                 <p className="text-muted-foreground">@modashop</p>
//               </div>
//             </div>
//             <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
//               {Array(6)
//                 .fill(null)
//                 .map((_, index) => (
//                   <Link href="#" key={index} className="group relative aspect-square overflow-hidden">
//                     <Image
//                       src={`/placeholder.svg?height=300&width=300&text=Instagram+${index + 1}`}
//                       alt={`Instagram post ${index + 1}`}
//                       width={300}
//                       height={300}
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
//                       <Heart className="h-8 w-8 text-primary" />
//                     </div>
//                   </Link>
//                 ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="w-full border-t bg-background">
//         <div className="container px-4 py-12 md:px-6 lg:py-16">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <ShoppingBag className="h-6 w-6" />
//                 <span className="text-xl font-bold">ModaShop</span>
//               </div>
//               <p className="text-sm text-muted-foreground">
//                 Your one-stop destination for fashion and style.
//               </p>
//               <div className="flex space-x-4">
//                 <Link href="#" className="text-muted-foreground hover:text-foreground">
//                   <svg
//                     className="h-5 w-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </Link>
//                 <Link href="#" className="text-muted-foreground hover:text-foreground">
//                   <svg
//                     className="h-5 w-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </Link>
//                 <Link href="#" className="text-muted-foreground hover:text-foreground">
//                   <svg
//                     className="h-5 w-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012\
