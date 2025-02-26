"use client";
import { NavMain } from "@/components/ui/root-sidebar/nav-main";
import { NavUser } from "@/components/ui/root-sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import PlatformSelector from "./platform-selecter";

import { useState, useEffect } from "react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // ! todoooooo
  const data = {
    user: {
      firstname: "Patrick",
      lastname: "Jürs",
      email: "test@example.com",
      avatar:
        "https://user-images.githubusercontent.com/522079/90506845-e8420580-e122-11ea-82ca-31087fc8486c.png",
    },
  };

  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <PlatformSelector />
        </SidebarHeader>
        <SidebarContent>
          <NavMain />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
