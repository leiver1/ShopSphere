import prisma from "@/lib/prisma/prismaClient";
import { passwordValidation } from "@/utils/validations/passwordValidation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  const newUser = await req.json();
  console.log("INCOMING User @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", newUser);

  if (req.method !== "POST") {
    return NextResponse.json({ error: "Wrong Method" }, { status: 500 });
  }

  if (!passwordValidation(newUser.password)) {
    return NextResponse.json(
      { error: "Password Validation False " },
      { status: 500 }
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: newUser.email },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "User already exists " },
      { status: 400 }
    );
  }

  const { confirmPassword, password, ...rest } = newUser;
  const salt = 10;
  const hashedPassword = bcrypt.hashSync(password, salt);

  const newDbUser = await prisma.user.create({
    data: { ...rest, password: hashedPassword },
  });

  return NextResponse.json({ data: newDbUser }, { status: 200 });
};
