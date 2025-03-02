import { Button } from "../button";

interface LandingBigProps {}
const LandingBig: React.FC<LandingBigProps> = () => {
  return (
    <div className="bg-accent w-full h-96 grid grid-cols-2 ">
      <div className="w-full flex items-center justify-center ">
        <div className="grid gap-3 w-3/4 lg:max-w-[400px]">
          <h3 className="text-xs lg:text-md text-muted-foreground ">
            SPRING SALES
          </h3>
          <h3 className="text-[26px] md:text-[48px] text-accent-foreground ">
            Get 40% off
          </h3>
          <p className="text-xs md:text-md ">
            Facilisis at odio amet consequat. Enim orci risus, commodo in ut est
            neque. Eu magna sit aenean arcu quam. Euismod ridiculus rhoncus.
          </p>
          <Button className="mt-4">Shop Now</Button>
        </div>
      </div>

      <div className="w-full  flex items-center justify-center">
        <img
          src="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/banner.png"
          alt="bildname"
          className="md:h-[300px] md:w-[350px]  h-[150px] w-[200px]"
        />
      </div>
    </div>
  );
};

export default LandingBig;
