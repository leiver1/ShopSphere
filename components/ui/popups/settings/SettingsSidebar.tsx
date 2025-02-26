import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarProvider,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import { SettingsArray } from "./SettingDialog";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  settings: SettingsArray[];
  children: ReactNode;
  currentIndex: number;
  handleCurrentIndex: (index: number) => void;
}
const SettingsSidebar: React.FC<AppSidebarProps> = ({
  settings,
  children,
  currentIndex,
  handleCurrentIndex,
}) => {
  return (
    <SidebarProvider className="">
      <Sidebar className="max-h-full">
        <SidebarHeader className="p-5 border-b ">
          <h3 className="text-xl">Settings</h3>
        </SidebarHeader>
        <SidebarContent className="">
          <SidebarGroup>
            <SidebarMenu>
              {settings.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => handleCurrentIndex(index)}
                    className={cn(
                      "cursor-pointer",
                      index === currentIndex
                        ? "bg-primary text-primary-foreground"
                        : "none"
                    )}
                    size={"lg"}
                  >
                    <p>
                      {item.icon}
                      {item.name}
                    </p>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="p-5   w-full">{children}</div>
    </SidebarProvider>
  );
};

export default SettingsSidebar;
