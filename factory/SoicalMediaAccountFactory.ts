import prisma from "../lib/prisma/prismaClient";
import { SocialMediaAccountType } from "../utils/types/SoicalMediaAccount";

import { faker } from "@faker-js/faker";

const SocialMediaAccountFactory = async () => {
  await prisma.socialMediaAccount.deleteMany();
  const company = await prisma.company.findFirst();

  const platforms = [
    "Facebook",
    "Instagram",
    "Linkedin",
    "TikTok",
    "Youtube",
    "X",
  ];

  for (let i = 1; i < 10; i++) {
    const index = Math.floor(Math.random() * platforms.length);
    const SocialMediaAccount: SocialMediaAccountType = {
      id: i,
      companyId: company?.id as number,
      platform: platforms[index] as
        | "Facebook"
        | "Instagram"
        | "Linkedin"
        | "TikTok"
        | "Youtube"
        | "X",
      userPlatformId: faker.string.nanoid({ min: 13, max: 37 }),
      username: faker.internet.username(),
      accessToken: faker.string.nanoid({ min: 13, max: 37 }),
      createdAt: new Date(),
      type:
        platforms[index] === "TikTok" || platforms[index] === "X"
          ? "Channel"
          : "Account",
      expiresAt: faker.date.future(),
      updatedAt: new Date(),
      refreshToken: "",
    };

    const response = await prisma.socialMediaAccount.create({
      data: SocialMediaAccount,
    });
  }
};

export default SocialMediaAccountFactory;
