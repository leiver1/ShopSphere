import { Account, AuthOptions, Profile, Session, User } from "next-auth";
import jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { configuredCredentialsProvider } from "./authprovider/credentialsProvider";

import prisma from "@/lib/prisma/prismaClient";

interface UserWithTokens extends User {
  facebookAccessToken?: string | null | undefined;
}

export const authOptions: AuthOptions = {
  providers: [configuredCredentialsProvider],
  pages: {
    signIn: "/login",
    signOut: "/register",
  },

  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      if (!token) {
        throw new Error("no token was set");
      }
      return jwt.sign(token, secret);
    },

    async decode({ secret, token }) {
      if (!token) {
        throw new Error("not token to decode");
      }

      const decodedToken = jwt.verify(token, secret);

      if (typeof decodedToken === "string") {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
      }
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ user, account, token, isNewUser, profile }) {
      if (user) {
        token.email = user.email;
        token.name = `${user.firstname} ${user.lastname}`;
        token.id = user.id;
        token.companyId = user.companyId;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.companyId = token.companyId;
        session.user.role = token.role;
      }

      return session;
    },
  },
};
