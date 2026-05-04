import type { ComponentProps } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

export type InputControlledProps<T extends FieldValues> = ComponentProps<"input"> & {
  control: Control<T>;
  name: Path<T>;
  label: string;
};