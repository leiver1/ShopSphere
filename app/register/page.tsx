import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { Card, CardContent } from "@/components/ui/card";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  return (
    <div className="grid lg:grid-cols-2 border border-black min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-background">
        <img
          src="/images/undraw_my_password_re_ydq7.svg"
          alt="Login Illustration"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex items-center w-full justify-center border-none shadow-none">
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default page;
