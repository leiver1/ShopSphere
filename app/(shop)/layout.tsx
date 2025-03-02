import { ReactNode } from "react";
import "@splidejs/react-splide/css";
import ShopHeader from "@/components/ui/shop-page/ShopHeader";
import Footer from "@/components/ui/shop-page/Footer";
interface layoutProps {
  children: ReactNode;
}
const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className=" px-2  lg:px-32 lg:py-4 ">
      <div className="">
        <ShopHeader />
      </div>
      {children}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default layout;
