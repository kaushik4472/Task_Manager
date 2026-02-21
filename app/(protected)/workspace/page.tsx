import { getUserWorkspaces } from "@/app/data/workspace/get-user-workspaces";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const result = await getUserWorkspaces();


  const data = result.data;

  if (data?.onboardingCompleted && data.workspaces.length === 0) {
    redirect("/create-workspace");
  }

  if (!data?.onboardingCompleted) {
    redirect("/onboarding");
  }

  redirect(`/workspace/${data.workspaces[0].workspaceId}`);
};


export default page;