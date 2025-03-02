import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shop Info */}
        <div>
          <h2 className="text-2xl ">Shop Sphere</h2>
          <p className="text-sm mt-2">
            Your one-stop shop for premium products. Experience quality and
            convenience.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg ">Quick Links</h3>
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Shop
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg ">Stay Connected</h3>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-primary">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-primary">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-primary">
              <Twitter size={24} />
            </a>
          </div>
          <h3 className="text-lg  mt-4">Newsletter</h3>
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Shop Sphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
