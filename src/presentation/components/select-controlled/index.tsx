"use client";

import { Controller, type FieldValues } from "react-hook-form";
import { Input } from "../input";

import { Container, ErrorMessage } from "./styles";
import type { InputControlledProps } from "./types";
import { MenuItem } from "@mui/material";

export function SelectControlled<T extends FieldValues>({
  control,
  name,
  label,
  options,
  errorMessage,
}: InputControlledProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const valueFormatted = field.value || '';

        return (
        <Container fullWidth>
          <Input {...field} fullWidth select label={label} value={valueFormatted}>
            {options.map((acc) => (
              <MenuItem key={acc} value={acc}>
                {acc}
              </MenuItem>
            ))}
          </Input>
          {errorMessage ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : null}
        </Container>
      )
      }}
    />
  );
}
