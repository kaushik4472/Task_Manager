import { User } from "@/lib/generated/prisma/client";
import { AppSidebarDataProps } from "./app-sidebar-container";
import { ProjectProps, WorkspaceMembersProps } from "@/utils/types";
import {
  Sidebar,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarContent,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { WorkspaceSelector } from "./workspace-selector";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-project-list";

export const AppSidebar = ({
  data,
  projects,
  workspaceMembers,
  user,
}: {
  data: AppSidebarDataProps;
  projects: ProjectProps[];
  workspaceMembers: WorkspaceMembersProps[];
  user: User;
}) => {
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader className="bg-background">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={"/public/vercel.svg"} />
            </Avatar>
            <SidebarGroupLabel>
              <span className="text-xl font-bold">DailyTM</span>
            </SidebarGroupLabel>
          </div>

          <div className="flex justify-between mb-0">
            <SidebarGroupLabel className="mb-2 text-sm font-semibold text-muted-foreground uppercase">
              Workspace
            </SidebarGroupLabel>

            <Button asChild size={"icon"} className="size-5">
              <Link href="/create-workspace">
                <Plus />
              </Link>
            </Button>
          </div>
          <WorkspaceSelector workspaces={data.workspaces} />
        </SidebarHeader>

        <SidebarContent>
          <NavMain />
          <NavProjects
  projects={projects} workspaceMembers={workspaceMembers}
  />
        </SidebarContent>
      </Sidebar>
    </>
  );
};
