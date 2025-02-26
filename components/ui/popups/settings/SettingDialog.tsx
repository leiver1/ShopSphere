"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  UserPen,
  Settings,
  MessageCircle,
  MicVocal,
  Laptop,
  Bell,
} from "lucide-react";
import { Button } from "../../button";
import SettingsSidebar from "./SettingsSidebar";
import { ReactNode, useState } from "react";
import SettingContent from "./SettingContent";

export interface SettingsArray {
  name: string;
  icon: ReactNode;
}

const SettingDialog: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(4);
  const settings: SettingsArray[] = [
    {
      name: "Profile",
      icon: <UserPen />,
    },
    {
      name: "Account",
      icon: <Settings />,
    },
    {
      name: "Chat",
      icon: <MessageCircle />,
    },
    {
      name: "Voice & Video",
      icon: <MicVocal />,
    },
    {
      name: "Appearence",
      icon: <Laptop />,
    },
    {
      name: "Notification",
      icon: <Bell />,
    },
  ];

  const handleCurrentIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full lg:w-[1100px] sm:max-w-[100%] h-full lg:h-[800px] sm:max-h-[100%] rounded-none lg:rounded-md   ">
        {/* Flexbox Layout für Sidebar + Content */}
        <DialogTitle></DialogTitle>
        <div className="flex h-full ">
          <SettingsSidebar
            settings={settings}
            currentIndex={currentIndex}
            handleCurrentIndex={handleCurrentIndex}
          >
            <div className=" overflow-x-hidden overflow-y-auto  lg:max-h-[750px] max-h-[90%] flex-4 ">
              <SettingContent currentIndex={currentIndex} />
            </div>
          </SettingsSidebar>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingDialog;
