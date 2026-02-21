import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const userRequired = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isUserAuthenticated = await isAuthenticated();

  // If not authenticated, redirect immediately
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  const user = await getUser();

  // TypeScript Guard: 
  // Even if authenticated, 'getUser' might theoretically return null in some edge cases.
  // We explicitly check for user and user.id to satisfy TypeScript.
  if (!user || !user.id) {
    redirect("/api/auth/login");
  }

  return {
    user: user, // Now TypeScript knows 'user' is not null
    isUserAuthenticated,
  };
};