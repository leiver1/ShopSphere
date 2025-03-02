import { Button } from "../button";

interface ThreBigProductProps {}

const ThreeBigProduct: React.FC<ThreBigProductProps> = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {/* Linke Spalte mit zwei gleich großen Elementen */}
      <div className="grid gap-4">
        <Button
          className="block bg-green-500 hover:bg-green-400 p-0 h-64 w-full"
          variant="outline"
        >
          <img
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test"
            className="w-full h-full object-cover"
          />
        </Button>
        <Button className="block h-64 p-0 w-full" variant="outline">
          <img
            src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test"
            className="w-full h-full object-cover"
          />
        </Button>
      </div>

      {/* Rechte Spalte (größeres Element) */}
      <div className="h-full">
        <Button className="block h-full p-0 w-full" variant="outline">
          <img
            src="https://images.pexels.com/photos/6817731/pexels-photo-6817731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test"
            className="w-full h-full object-cover"
          />
          <p className="absolute">sdf</p>
        </Button>
      </div>
    </div>
  );
};

export default ThreeBigProduct;
