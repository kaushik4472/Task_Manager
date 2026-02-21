"use client";

import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Users 
} from "lucide-react";

type VariantType = "default" | "success" | "warning" | "inProgress";

interface CircleProps {
  title: string;
  value: number;
  subTitle: string;
  variant?: VariantType;
}

const variantConfig = {
  default: { color: "text-blue-500", icon: Users, progress: "bg-blue-500" },
  success: { color: "text-emerald-500", icon: CheckCircle2, progress: "bg-emerald-500" },
  warning: { color: "text-red-500", icon: AlertCircle, progress: "bg-red-500" },
  inProgress: { color: "text-amber-500", icon: Clock, progress: "bg-amber-500" },
};

export const CircleProgress = ({
  title,
  subTitle,
  value,
  variant = "default",
}: CircleProps) => {
  const config = variantConfig[variant];
  const Icon = config.icon;
  const safeValue = Math.min(100, Math.max(0, value || 0));

  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-200 border-l-4" style={{ borderLeftColor: variant === 'warning' ? '#ef4444' : variant === 'success' ? '#10b981' : variant === 'inProgress' ? '#f59e0b' : '#3b82f6' }}>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
            <span className="text-2xl font-bold mt-1">{Math.round(safeValue)}%</span>
          </div>
          <div className={`p-2 rounded-full bg-muted/50 ${config.color}`}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
        
        <Progress 
          value={safeValue} 
          className="h-2 mt-2 bg-muted" 
          defaultValue={config.progress} // Assuming your UI library supports this, otherwise defaults to primary
        />
        
        <p className="text-xs text-muted-foreground mt-3 font-medium">
          {subTitle}
        </p>
      </CardContent>
    </Card>
  );
};