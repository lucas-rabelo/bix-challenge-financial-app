import type { ButtonProps as MuiButtonProps } from "@mui/material";
import type { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & MuiButtonProps & {
  label: string;
};