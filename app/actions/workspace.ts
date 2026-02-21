"use server";

import { CreateWorkspaceDataType } from "@/components/workspace/create-workspace-form";
import { userRequired } from "../data/user/is-user-authenticated";
import { workspaceSchema } from "@/lib/schema";
import { db } from "@/lib/db";
import { generateInviteCode } from "@/utils/get-invite-code";

export const createNewWorkspace = async (data: CreateWorkspaceDataType) => {
  try {
    const { user } = await userRequired();

    // 1. Explicit Check: This tells TypeScript 'user' is definitely not null.
    if (!user || !user.id) {
      return { status: 401, message: "Unauthorized" };
    }

    const validatedData = workspaceSchema.parse(data);

    // 2. Database Transaction
    const res = await db.workspace.create({
      data: {
        name: validatedData.name,
        description: validatedData.description,
        ownerId: user.id, // Now TypeScript knows user.id exists
        inviteCode: generateInviteCode(),
        members: {
          create: {
            userId: user.id, // Fixed the squiggle here
            accessLevel: "OWNER",
          },
        },
      },
    });

    return res;
  } catch (error) {
    console.error(error); //
    return {
      status: 500,
      message: "An error occurred while creating the workspace",
    };
  }
};
