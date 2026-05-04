"use client";

import { Controller, type FieldValues } from "react-hook-form";
import { DatePicker } from "../date-picker";

import { Container, ErrorMessage } from "./styles";
import type { InputControlledProps } from "./types";

export function DatePickerControlled<T extends FieldValues>({
  control,
  name,
  label,
}: InputControlledProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => {
        const valueFormatted = field.value ? new Date(field.value) : null;

        return (
          <Container fullWidth>
            <DatePicker
              {...field}
              label={label}
              value={valueFormatted}
              onChange={(date) => {
                field.onChange(date ? date.getTime() : null);
              }}
              sx={{ width: "100%" }}
            />
            {errors[name] ? (
              <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
            ) : null}
          </Container>
        );
      }}
    />
  );
}