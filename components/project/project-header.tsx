import { ProjectProps } from "@/utils/types";
import { ProjectAvatar } from "./project-avatar";
import { CreateTaskDialog } from "../task/create-task-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const ProjectHeader = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="space-y-6 mb-8">
      {/* --- Top Row: Title & Action --- */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <ProjectAvatar
            name={project.name}
            className="h-12 w-12 text-lg rounded-xl"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {project?.name}
            </h1>
            {project?.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {project?.description}
              </p>
            )}
          </div>
        </div>

        {/* Action Button: Floating Top Right */}
        <CreateTaskDialog project={project} />
      </div>

      {/* --- Bottom Row: The "Info Bar" (Matches your screenshot) --- */}
      {/* This is a dedicated container for context like Team Members */}
      <div className="flex items-center w-full h-16 px-4 rounded-lg border bg-card/50 shadow-sm">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap
">
            Team Members
          </span>

          <div className="flex items-center -space-x-2">
            {project?.members?.map((member) => (
              <Avatar
                key={member.id}
                className="h-8 w-8 border-2 border-background ring-offset-background"
              >
                <AvatarImage src={member?.user.image || undefined} />
                <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
                  {member.user.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
