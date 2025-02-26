import { Separator } from "@/components/ui/separator";

import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Form,
  FormItem,
  FormLabel,
  FormDescription,
  FormField,
  FormControl,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Select, SelectItem } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUserPreference } from "@/context/UserPreferenceContext";
interface AppearanceProps {}

const Appearance: React.FC<AppearanceProps> = () => {
  const { theme, setTheme } = useTheme();
  const { handleUserPreference } = useUserPreference();

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const themes = [
    {
      execute: () => {
        setTheme("system");
        handleUserPreference({ theme: "system" });
      },
      title: "System",
      icon: <MonitorCog />,
      value: "system",
    },
    {
      execute: () => {
        setTheme("dark");
        handleUserPreference({ theme: "dark" });
      },
      title: "Dark",
      icon: <Moon />,
      value: "dark",
    },
    {
      execute: () => {
        setTheme("light");
        handleUserPreference({ theme: "light" });
      },
      title: "Light",
      icon: <Sun />,
      value: "light",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 ">
        <div className="space-y-14.5">
          <FormLabel>Interface Theme</FormLabel>
          <FormDescription>Select or customize your UI Theme</FormDescription>
        </div>
        <ToggleGroup type="single" value={theme}>
          {themes.map((item, index) => (
            <ToggleGroupItem
              defaultChecked={theme === item.value}
              key={index}
              value={item.value}
              onClick={item.execute}
            >
              {item.icon} {item.title}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </FormItem>
      <Separator className="my-4" />

      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <>
            <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 ">
              <div className="space-y-14.5">
                <FormLabel>Transparent siebar</FormLabel>
                <FormDescription>Make the sidebar transparent</FormDescription>
              </div>
            </FormItem>
            <Separator className="my-4" />
            <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 ">
              <div className="space-y-14.5">
                <FormLabel>Sidebar features</FormLabel>
                <FormDescription>
                  What shows in the desktop sidebar
                </FormDescription>
              </div>
              <FormControl>
                <Switch onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          </>
        )}
      />
      <Separator className="my-4" />
    </Form>
  );
};

export default Appearance;
