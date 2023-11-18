import { StatusForntEnd } from "@/constant/Constant";
import { z } from "zod";

export const SchemaCreateIssue = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
});

export const SchemaUpdateIssue = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
  status: z.nativeEnum(StatusForntEnd),
});
export const SchemaGetIssues = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  createAt: z.date(),
  updatedAt: z.date(),
});
