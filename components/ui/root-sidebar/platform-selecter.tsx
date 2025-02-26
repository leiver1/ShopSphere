"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../sidebar";
import { ChangeEvent, useEffect, useState } from "react";
import { ChevronsUpDown, Loader2, Plus } from "lucide-react";
import { Button } from "../button";

import { enqueueSnackbar } from "notistack";
import { useUserPreference } from "@/context/UserPreferenceContext";
import { Icon } from "@iconify/react/dist/iconify.js";

const PlatformSelector = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog
  const { isMobile } = useSidebar();
  const { handleUserPreference, userPreference } = useUserPreference();

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Plus className="size-5" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Add Platform</span>
                  <span className=" text-xs text-secondary-foreground "></span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] rounded-lg p-2"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Platform
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup></DropdownMenuGroup>

              <DropdownMenuItem
                onClick={() => setIsDialogOpen(true)}
                className="cursor-pointer"
              >
                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add Platform
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
};

export default PlatformSelector;
