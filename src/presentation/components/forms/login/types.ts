import type { ComponentProps } from "react";
import z from "zod";
import { loginFormZodSchema } from "./schema";

export type LoginFormSchema = z.infer<typeof loginFormZodSchema>;

export type LoginFormProps = & ComponentProps<"form">;
