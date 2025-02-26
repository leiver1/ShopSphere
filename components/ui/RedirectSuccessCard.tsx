"use client";

import { CircleCheckBig } from "lucide-react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

interface RedirectSuccessCardProps {
  platform: string;
}
const RedirectSuccessCard: React.FC<RedirectSuccessCardProps> = ({
  platform,
}) => {
  const router = useRouter();
  const navigateToDashbaord = () => {
    enqueueSnackbar({
      message: `View ${platform}`,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      variant: "default",
      autoHideDuration: 3500,
    });
    router.push("/dashboard");
  };
  return (
    <Card className="w-[350px] h-[45%] flex items-center justify-center p-4">
      <CardContent className="flex flex-col items-center justify-center h-full gap-10 w-[100%]">
        <CircleCheckBig className="w-24 h-24" color="green" />

        <div className="text-center">
          <h3 className="text-lg">Ready to go!</h3>
          <p className="text-sm text-muted-foreground">{`Your ${platform} account is now linked.`}</p>
        </div>

        <Button onClick={() => navigateToDashbaord()} className="w-[100%]">
          Go back
        </Button>
      </CardContent>
    </Card>
  );
};

export default RedirectSuccessCard;
