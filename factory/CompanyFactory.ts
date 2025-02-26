import prisma from "../lib/prisma/prismaClient";
import { SubscriptionPlan } from "@prisma/client";

const CompanyFactory = async () => {
  await prisma.company.deleteMany();
  const company = {
    name: "Huemmer Elektrotechnik GmbH",

    allowedSocialAccounts: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await prisma.company.create({
    data: company,
  });

  console.log("comapny was created");
};

export default CompanyFactory;
