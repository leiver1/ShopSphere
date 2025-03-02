"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../button";
import SettingDialog from "../popups/settings/SettingDialog";
import { useRouter } from "next/navigation";

interface headerActionsProp {}
const headerActions: React.FC<headerActionsProp> = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-4">
      <Button size="icon" variant="outline" onClick={() => router.push("/")}>
        <Icon icon="bi:shop" />
      </Button>
      <SettingDialog />
    </div>
  );
};

export default headerActions;
