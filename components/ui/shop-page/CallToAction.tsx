"use client";
import { useRouter } from "next/navigation";
import { Button } from "../button";

interface CallToActionProps {}
const CallToAction: React.FC<CallToActionProps> = () => {
  const router = useRouter();
  return (
    <div className=" bg-secondary text-secondary-foreground grid grid-cols-1 md:grid-cols-2">
      <div>
        <img
          src="https://images.pexels.com/photos/7857498/pexels-photo-7857498.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="bild"
          className="h-full  object-cover"
        />
      </div>
      <div className=" p-12 md:p-14 lg:p-20 grid gap-3">
        <h3 className="text-lg text-muted-foreground">For Vendors</h3>
        <h3 className="text-[44px] ">
          Grow <u>Your Business</u> <br />
          with <u>Us</u>
        </h3>
        <p>
          Join our marketplace and showcase your products to thousands of
          potential customers. Increase your sales, reach a wider audience, and
          build your brand with ease. Start today and take your business to the
          next level!
        </p>
        <Button
          className="w-24 mt-3"
          onClick={() => router.push("/register?isVendor=true")}
        >
          {" "}
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
