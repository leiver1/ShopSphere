"use client";
import { getSession, signIn } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Alert, AlertTitle } from "../ui/alert";
import { enqueueSnackbar } from "notistack";

interface LoginFormProps {}
const LoginForm: React.FC<LoginFormProps> = () => {
  const [message, setMessage] = useState<string>("");
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
          vertical: "bottom" as "bottom",
          horizontal: "right" as "right",
        },

        variant: "success" as "success",
        autoHideDuration: 3000,
      };

      enqueueSnackbar(snackbar);

      if (session?.user?.role === "VENDOR") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }
  };

  const ErrorMes = () => {
    return message ? (
      <Alert variant={"destructive"}>
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    ) : null;
  };

  return (
    <div className="py-16 px-12 ">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className=" text-sm text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
        <div className="mb-8 mt-5 ">{ErrorMes()}</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 ">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              placeholder="test@example.com"
              // required
              onChange={(e) => handleCredentials("email", e)}
              value={credentials.email}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Password</Label>

            <div>
              <Input
                id="password"
                type="password"
                onChange={(e) => handleCredentials("password", e)}
                placeholder="**********"
                // required
                value={credentials.password}
              />
              <div className="flex items-center justify-between mt-2 ">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label className="text-xs">Remember me</label>
                </div>

                <a
                  href="#"
                  className="text-xs underline-offset-2 hover:underline "
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full block">
            Login
          </Button>

          <div className="flex items-center justify-center  space-x-2">
            <div className="border  border-gray-300 w-28  border-opacity-50"></div>
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              Or continue with
            </p>
            <div className="border border-gray-300 border-opacity-50 w-28 "></div>
          </div>
          <div className=" flex items-center justify-between">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="h-12 w-16"
            >
              <Icon
                icon="skill-icons:linkedin"
                className="text-gray-800 "
                style={{ width: "33px", height: "28px" }}
              />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="h-12 w-16"
            >
              <Icon
                icon="logos:facebook"
                className="text-gray-800 "
                style={{ width: "33px", height: "28px" }}
              />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="h-12 w-16 "
            >
              <Icon
                icon="skill-icons:instagram"
                className="text-gray-800 "
                style={{ width: "33px", height: "28px" }}
              />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs text-muted-foreground ">
              Don´t have an account?
            </p>
            <p
              className="text-xs underline font-semibold text-muted-foreground hover:cursor-pointer "
              onClick={() => router.push("/register")}
            >
              Sign up
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
