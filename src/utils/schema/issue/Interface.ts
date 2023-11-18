import { z } from "zod";
import { SchemaCreateIssue, SchemaGetIssues } from "./DTO";
export type InterfaceCreateIssue = z.infer<typeof SchemaCreateIssue>;
export type InterfaceGetIssue = z.infer<typeof SchemaGetIssues>;
export interface InterfaceParams {
  params: { id: string };
}
