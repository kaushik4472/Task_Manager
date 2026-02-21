import { formatDistanceToNow } from "date-fns";
import { ProfileAvatar } from "../profile-avatar";

// We export this so the Dashboard can use the exact same type definition
export interface ActivityWithUser {
  id: string;
  type: string;
  description: string;
  createdAt: Date | string; // Handled string for JSON-serialized dates
  user: {
    name: string;
    image: string | null;
  };
}

interface ActivityFeedProps {
  activities: ActivityWithUser[];
}

export const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  if (!activities || activities.length === 0) {
    return <p className="text-sm text-muted-foreground">No recent activities.</p>;
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <ProfileAvatar
            url={activity.user.image || undefined}
            name={activity.user.name}
            numOfChars={2}
            size="lg"
          />

          <div className="flex flex-col">
            <p className="text-sm">
              <span className="font-medium text-foreground">
                {activity.user.name}
              </span>{" "}
              <span className="text-muted-foreground">{activity.description}</span>
            </p>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(activity.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;