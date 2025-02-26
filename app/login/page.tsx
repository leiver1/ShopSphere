import LoginForm from "@/components/auth/LoginForm";
import { Card, CardContent } from "@/components/ui/card";

interface pageProps {}
const page: React.FC<pageProps> = () => {
  return (
    <div className="grid lg:grid-cols-2 border border-black min-h-screen">
      <div className="flex items-center justify-center border-none shadow-none">
        <div>
          <LoginForm />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center bg-background">
        <img
          src="/images/undraw_fingerprint_login_re_t71l.svg"
          alt="Login Illustration"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default page;
