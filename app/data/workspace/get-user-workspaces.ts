import { db } from "@/lib/db";
import { userRequired } from "../user/is-user-authenticated";

export const getUserWorkspaces = async () => {
  try {
    const { user } = await userRequired();
    if (!user) {
      return { data: null, error: "UNAUTHORIZED" };
    }

    const workspaces = await db.user.findUnique({
      where: { id: user.id },
      include: {
        workspaces: {
          select: {
            id: true,
            userId: true,
            workspaceId: true,
            accessLevel: true,
            createdAt: true,
            workspace: {
              select: { name: true },
            },
          },
        },
      },
    });

    return { data: workspaces, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: "FAILED_TO_FETCH" };
  }
};
