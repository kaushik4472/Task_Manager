import { Task } from "@/lib/generated/prisma";
import { CommentProps, ProjectProps } from "@/utils/types";
import { ProjectHeader } from "./project-header";
import { Card } from "../ui/card";
import { TaskDistributionChart } from "./task-distribution-chart";
import ActivityFeed, { ActivityWithUser } from "./activity-feed"; 
import { CommentList } from "./comment-list";
import { CircleProgress } from "./circle-progress";

interface ProjectDashboardProps {
  project: ProjectProps;
  tasks: {
    completed: number;
    inProgress: number;
    overdue: number;
    total: number;
    items: Task[];
  };
  activities: ActivityWithUser[];
  totalWorkspaceMembers: number;
  comments: CommentProps[];
}

export const ProjectDashboard = ({
  project,
  tasks,
  activities,
  totalWorkspaceMembers,
  comments,
}: ProjectDashboardProps) => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-6 2xl:px-8 py-6 w-full">
      <ProjectHeader project={project} />

      {/* UI FIX: xl:grid-cols-4 ensures all 4 circles stay in one row on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <CircleProgress
          title="Task Completed"
          value={tasks.total > 0 ? (tasks.completed / tasks.total) * 100 : 0}
          subTitle={`${tasks.completed} / ${tasks.total} tasks`}
          variant="success"
        />
        <CircleProgress
          title="In Progress"
          value={tasks.total > 0 ? (tasks.inProgress / tasks.total) * 100 : 0}
          subTitle={`${tasks.inProgress} tasks ongoing`}
          variant="inProgress"
        />
        <CircleProgress
          title="Overdue"
          value={tasks.total > 0 ? (tasks.overdue / tasks.total) * 100 : 0}
          subTitle={`${tasks.overdue} overdue tasks`}
          variant="warning"
        />
        <CircleProgress
          title="Team Members"
          value={100} 
          subTitle={`${project.members.length} members`}
          variant="default"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* UI FIX: No extra <Card> wrapper here; the component is a Card itself */}
        <TaskDistributionChart tasks={tasks} />

        {/* UI FIX: Added h-full and shadow-sm to match the chart card */}
        <Card className="p-6 h-full shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="flex-1">
            <ActivityFeed activities={activities.slice(0, 5)} />
          </div>
        </Card>

        <Card className="p-6 h-full shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Recent Comments</h3>
          <div className="flex-1">
             <CommentList comments={comments.slice(0, 5) as any} />
          </div>
        </Card>
      </div>
    </div>
  );
};