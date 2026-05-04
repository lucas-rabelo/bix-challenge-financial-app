import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import type { Control, FieldValues, Path } from "react-hook-form";

export type InputControlledProps<T extends FieldValues> = DatePickerProps & {
  control: Control<T>;
  name: Path<T>;
  label: string;
};