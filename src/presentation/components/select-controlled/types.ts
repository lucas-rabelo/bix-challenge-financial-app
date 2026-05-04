import type { TextFieldProps } from "@mui/material";
import type { Control, FieldValues, Path } from "react-hook-form";

export type InputControlledProps<T extends FieldValues> = TextFieldProps & {
  control: Control<T>;
  name: Path<T>;
  label: string;
  options: string[];
};