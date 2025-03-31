import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      companyId?: string;
      role?: string;
      firstname: string;
      lastname: string;
    };
  }

  interface User extends DefaultUser {
    id: string;
    companyId?: string;
    role?: string;
    firstname: string;
    lastname: string;
  }
}
