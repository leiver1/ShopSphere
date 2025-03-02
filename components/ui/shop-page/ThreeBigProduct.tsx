import { Button } from "../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";

interface ThreBigProductProps {}

const ThreeBigProduct: React.FC<ThreBigProductProps> = () => {
  return (
    <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-4">
      {/* Linke Spalte mit zwei gleich großen Elementen */}
      <div className="grid gap-4">
        <Card className="hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="font-normal text-lg">
              Camera - Fujifilm X-T10
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 h-80">
            <img
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="test"
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>
        <Card className="hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="font-normal text-lg">
              Skincare Oil with Rose Petals
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 h-80">
            <img
              src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="test"
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>
      </div>

      {/* Rechte Spalte (größeres Element) */}
      <div className="h-full">
        <Card className="h-full overflow-hidden hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="font-normal text-lg">
              Trendy Eyewear Collection
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 h-full">
            <img
              src="https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="test"
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThreeBigProduct;
