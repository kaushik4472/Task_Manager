"use client";

import { PieChart, Label, Pie, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

interface TaskDistributionProps {
  tasks: {
    total: number;
    completed: number;
    inProgress: number;
    overdue: number;
  };
}

const chartConfig = {
  tasks: { label: "Tasks" },
  completed: { label: "Completed", color: "#10b981" }, // Emerald 500
  inProgress: { label: "In Progress", color: "#f59e0b" }, // Amber 500
  overdue: { label: "Overdue", color: "#ef4444" }, // Red 500
  todo: { label: "Todo", color: "#3b82f6" }, // Blue 500
} satisfies ChartConfig;

export const TaskDistributionChart = ({ tasks }: TaskDistributionProps) => {
  const data = [
    { name: "Completed", value: tasks.completed, fill: "#10b981" },
    { name: "In Progress", value: tasks.inProgress, fill: "#f59e0b" },
    { name: "Overdue", value: tasks.overdue, fill: "#ef4444" },
    {
      name: "Todo",
      value: tasks.total - (tasks.completed + tasks.inProgress + tasks.overdue),
      fill: "#3b82f6", // Muted blue for Todo
    },
  ].filter((item) => item.value > 0);

  // If no data, show a grey placeholder
  if (tasks.total === 0) {
    data.push({ name: "No Tasks", value: 1, fill: "#3f3f46" }); // Zinc-700
  }

  return (
    <Card className="flex flex-col h-full shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Task Distribution</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-0 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={75} // Thinner ring (Higher value = thinner)
              outerRadius={100} 
              strokeWidth={0} // Removes the ugly white border between slices
              paddingAngle={2} // Adds small gap between slices for modern look
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {tasks.total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-xs uppercase tracking-wider"
                        >
                          Tasks
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};