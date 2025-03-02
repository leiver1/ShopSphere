import prisma from "../lib/prisma/prismaClient";
import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";
import { faker } from "@faker-js/faker";

const UserFactory = async () => {
  await prisma.productReview.deleteMany();
  await prisma.user.deleteMany();

  const salt = 10;
  const hashedPassword = bcrypt.hashSync("password", salt);

  const customer = {
    firstname: "Patrick",
    lastname: "Jürs",
    password: hashedPassword,
    email: "test@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const vendor = {
    firstname: "Thomas",
    lastname: "Manfred",
    password: hashedPassword,
    email: "t.manfred@gmail.com",
    role: Role.VENDOR,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await prisma.user.create({
    data: customer,
  });

  await prisma.user.create({
    data: vendor,
  });

  const randomIndex = Math.floor(Math.random() * 15) + 1;
  const randomRoleIndex = Math.floor(Math.random() * 2);

  const roles = [Role.CUSTOMER, Role.VENDOR];

  for (let i = 0; i < randomIndex; i++) {
    const randomUser = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      role: roles[randomRoleIndex],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await prisma.user.create({
      data: randomUser,
    });
  }
  console.log("... Users created");
};

export default UserFactory;
