"use server";

import { UserDataType } from "@/components/onboardingform";
import { userRequired } from "../data/user/is-user-authenticated"; // Check path
import { userSchema } from "@/lib/schema";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const createUser = async (data: UserDataType) => {
  const { user } = await userRequired();

  // Safety check: ensure critical user data exists
  if (!user || !user.id || !user.email) {
    throw new Error("Authenticated user missing ID or Email.");
  }

  const validatedData = userSchema.parse(data);

  const userData = await db.user.create({
    data: {
      id: user.id, // TypeScript now knows this is a string
      email: user.email, // TypeScript now knows this is a string
      name: validatedData.name,
      about: validatedData.about,
      country: validatedData.country,
      industryType: validatedData.industryType,
      role: validatedData.role,
      onboardingCompleted: true,
      image: user.picture || "",
      subscription: {
        create: {
          plan: "FREE",
          status: "ACTIVE",
          currentPeriodEnd: new Date(),
          cancelAtPeriodEnd: false,
        },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      workspaces: true,
    },
  });

  // TODO: send user welcome email

  if (userData.workspaces.length === 0) {
    redirect("/create-workspace");
  }

  redirect("/workspace");
};
