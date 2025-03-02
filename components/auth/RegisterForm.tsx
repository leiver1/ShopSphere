"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

import { enqueueSnackbar } from "notistack";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Switch } from "../ui/switch";
import { passwordValidation } from "@/utils/validations/passwordValidation";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const [message, setMessage] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyNiche: "",
    role: checked ? "VENDOR" : "CUSTOMER",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const router = useRouter();
  const params = useSearchParams();
  const isVendor = params.get("isVendor") === "true";

  useEffect(() => {
    setChecked(isVendor as boolean);
  }, [isVendor]);

  useEffect(() => {
    checked ? (userData.role = "VENDOR") : (userData.role = "CUSTOMER");
  }, [checked]);

  const handleChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserData((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    if (!passwordValidation(userData.password)) {
      setMessage("Password does not match requirements");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          setMessage(data.error); // Hier wird die "User already exists" Nachricht gesetzt
        } else {
          setMessage("An unexpected error occurred. Please try again.");
        }
        return;
      }

      await signIn("credentials", {
        redirect: false,
        email: userData.email,
        password: userData.password,
      });

      enqueueSnackbar({
        message: `Welcome, ${userData.firstname}! Your account has been created.`,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        variant: "success",
        autoHideDuration: 3000,
      });

      userData.role === "VENDOR" ? router.push("/dashboard") : router.push("/"); // Falls der User nach der Registrierung weitergeleitet werden soll
    } catch (error) {
      console.log(error);
    }
  };

  const companyInfo = (
    <>
      <div className="grid gap-3">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          type="text"
          placeholder="Your Company"
          required
          value={userData.companyName}
          onChange={(e) => handleChange("companyName", e)}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="companyNiche">Company Niche</Label>
        <Input
          id="companyNiche"
          type="text"
          placeholder="e.g., Fashion, Tech, Food"
          required
          value={userData.companyNiche}
          onChange={(e) => handleChange("companyNiche", e)}
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <label className="text-xs">
          I agree to the{" "}
          <a href="#" className="underline">
            terms and conditions
          </a>
          .
        </label>
      </div>
    </>
  );

  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Create a{" "}
          <b>
            <u>{checked ? "Vendor" : "User"}</u>
          </b>{" "}
          Account
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign up below to start using our platform
        </p>
        {message && (
          <Alert variant={"destructive"} className="mt-4">
            <AlertTitle>{message}</AlertTitle>
          </Alert>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid gap-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w">
            <div>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="John"
                required
                value={userData.firstname}
                onChange={(e) => handleChange("firstname", e)}
              />
            </div>
            <div>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Doe"
                required
                value={userData.lastname}
                onChange={(e) => handleChange("lastname", e)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="test@example.com"
              required
              value={userData.email}
              onChange={(e) => handleChange("email", e)}
            />
          </div>

          {/* Password Fields */}
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="**********"
              required
              value={userData.password}
              onChange={(e) => handleChange("password", e)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="**********"
              required
              value={userData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="airplane-mode"
              checked={checked}
              onCheckedChange={() => setChecked((prev) => !prev)}
            />
            <Label htmlFor="airplane-mode">I am a Vendor</Label>
          </div>

          {/* Company Info */}
          {checked && companyInfo}
          {/* Submit Button */}
          <Button type="submit" className="w-full block">
            Sign Up
          </Button>

          {/* Login Redirect */}
          <div className="flex items-center justify-center gap-1">
            <p className="text-xs text-muted-foreground">
              Already have an account?
            </p>
            <p
              className="text-xs underline font-semibold text-muted-foreground hover:cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Log in
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
