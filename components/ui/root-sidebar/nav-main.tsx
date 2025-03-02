"use client";

import {
  LayoutDashboard,
  ChevronRight,
  ChartArea,
  Inbox,
  Wrench,
  Megaphone,
  SquareMousePointer,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

export function NavMain({}: {}) {
  const router = useRouter();

  const customers = [
    {
      title: "Customers",
      url: "",
      icon: "lucide:users",
      isActive: false,
      items: [
        {
          title: "Overview",
          url: "/customers/customer-list",
        },
        {
          title: "Reviews & Feedback",
          url: "/customers/reviews-feedback",
        },
        {
          title: "Support & Request",
          url: "/customers/support-request",
        },
      ],
    },
  ];
  const orders = [
    {
      title: "Orders",
      url: "",
      icon: "lucide:shopping-bag",
      isActive: false,
      items: [
        {
          title: "All orders",
          url: "/orders/all-orders",
        },
        {
          title: "Pending",
          url: "/orders/pending-orders",
        },
        {
          title: "Shipping Tracking",
          url: "/orders/shipping-tracking",
        },
        {
          title: "Returns & Cancellations",
          url: "/orders/returns-cancellations",
        },
      ],
    },
  ];

  const finance = [
    {
      title: "Finance",
      url: "",
      icon: ChartArea,
      isActive: false,
      items: [
        {
          title: "Payouts",
          url: "/finance/payouts",
        },
        {
          title: "Revenue & Earnings",
          url: "/finance/revenue-earnings",
        },
      ],
    },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            onClick={() => router.push("/dashboard")}
            className="cursor-pointer"
          >
            <p>
              <LayoutDashboard />
              Dashboard
            </p>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            onClick={() => router.push("/products")}
            className="cursor-pointer"
          >
            <p>
              <Icon icon="lucide:package" />
              Products
            </p>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {orders.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <Icon icon={item.icon} />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        className="cursor-pointer "
                        asChild
                        onClick={() => router.push(subItem.url)}
                      >
                        <p className="whitespace-nowrap">{subItem.title}</p>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
        {customers.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <Icon icon={item.icon} />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        className="cursor-pointer"
                        asChild
                        onClick={() => router.push(subItem.url)}
                      >
                        <p>{subItem.title}</p>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton
            className="cursor-pointer"
            asChild
            onClick={() => router.push("/marketing")}
          >
            <p>
              <Icon icon="lucide:megaphone" />
              Marketing
            </p>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {finance.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        className="cursor-pointer"
                        asChild
                        onClick={() => router.push(subItem.url)}
                      >
                        <p>{subItem.title}</p>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton
            className="cursor-pointer"
            asChild
            onClick={() => router.push("/tools")}
          >
            <p>
              <Wrench />
              Tools
            </p>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
