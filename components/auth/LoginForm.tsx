"use client";

import type React from "react";

import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Icon } from "@iconify/react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleCredentials = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [type]: e.target.value,
      };
    });
  };

  const handlePlatformLogin = (platform: string) => {
    signIn(platform);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (res?.status === 401) {
        setMessage("Wrong Email or Password");
      }

      if (res?.ok) {
        const session = await getSession();

        const snackbar = {
          message: `Welcome back ${session?.user?.name}`,
          anchorOrigin: {
            vertical: "bottom" as const,
            horizontal: "right" as const,
          },
          variant: "success" as const,
          autoHideDuration: 3000,
        };

        enqueueSnackbar(snackbar);

        if (session?.user?.role === "VENDOR") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      setMessage("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login to your account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {message && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>{message}</AlertTitle>
            </Alert>
          )}

          <div className="grid grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handlePlatformLogin("linkedin")}
            >
              <Icon icon="skill-icons:linkedin" className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handlePlatformLogin("facebook")}
            >
              <Icon icon="logos:facebook" className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handlePlatformLogin("instagram")}
            >
              <Icon icon="skill-icons:instagram" className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => handleCredentials("email", e)}
                  value={credentials.email}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => handleCredentials("password", e)}
                  value={credentials.password}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </Label>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
