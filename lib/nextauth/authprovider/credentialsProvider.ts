import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "../../prisma/prismaClient";
export const configuredCredentialsProvider = CredentialsProvider({
  name: "credentials",
  credentials: {
    email: {
      label: "Email",
      type: "text",
      placeholder: "test@example.com",
    },
    password: {
      label: "Password",
      type: "password",
      placeholder: "*******",
    },
  },
  authorize: async (credentials): Promise<any> => {
    if (!credentials) {
      return null;
    }

    const { email, password } = credentials;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    const userPassword = user.password;

    const isValidPassword = bcrypt.compareSync(
      password,
      userPassword as string
    );

    if (!isValidPassword) {
      console.log("GRRRRRRRRRR WRONG PASSWORD?");
      return null;
    }

    return user;
  },
});
