import prisma from "../lib/prisma/prismaClient";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client"; // Prisma-Enum importieren

const UserFactory = async () => {
  await prisma.user.deleteMany();
  const company = await prisma.company.findFirst();

  const salt = 10;
  const hashedPassword = bcrypt.hashSync("password", salt);

  const user = {
    firstname: "Patrick",
    lastname: "Jürs",
    password: hashedPassword,
    email: "test@example.com",
    test: "helloworld",
    companyId: company?.id as number,
    role: Role.ADMIN,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await prisma.user.create({
    data: user,
  });

  console.log("Initial User is created...");
};

export default UserFactory;
