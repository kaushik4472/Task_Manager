"use client";

import { userSchema, workspaceSchema } from "@/lib/schema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { countryList } from "@/utils/countriesList";
import { industryTypesList, roleList } from "@/utils";
import { createUser } from "@/app/actions/user";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createNewWorkspace } from "@/app/actions/workspace";
import { useRouter } from "next/navigation";

export type CreateWorkspaceDataType = z.infer<typeof workspaceSchema>;

export const CreateWorkspaceForm = () => {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const form = useForm<CreateWorkspaceDataType>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: CreateWorkspaceDataType) => {
  try {
    setPending(true);
    const res = await createNewWorkspace(data);

    // Check if the response indicates an error
    if ("status" in res) {
      toast.error(res.message || "Something went wrong. Try again");
      return;
    }

    // Now TypeScript knows 'res' must be the workspace object with an 'id'
    toast.success("Workspace created successfully");
    router.push(`/workspace/${res.id}`);
    
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Try again");
  } finally {
    setPending(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create new workspace</CardTitle>
          <CardDescription>
            set up your workspace and start managing your tasks effectively.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>workspace Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter workspace name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="workspace description"
                        className="resize-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-row items-center gap-4">
                <Button type="button" variant={"outline"} disabled={pending}>
                  Cancel
                </Button>
                <Button type="submit" disabled={pending}>
                  Create Workspace
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
