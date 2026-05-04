"use client";

import { Controller, type FieldValues } from "react-hook-form";
import { Input } from "../input";

import { Container, ErrorMessage } from "./styles";
import type { InputControlledProps } from "./types";

export function InputControlled<T extends FieldValues>({
  control,
  name,
  label,
  type,
}: InputControlledProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => {
        const valueFormatted = field.value || '';

        return (
        <Container>
          <Input {...field} type={type} label={label} value={valueFormatted} />
          {errors.root ? (
            <ErrorMessage>{errors.root?.message}</ErrorMessage>
          ) : null}
        </Container>
      )
      }}
    />
  );
}
