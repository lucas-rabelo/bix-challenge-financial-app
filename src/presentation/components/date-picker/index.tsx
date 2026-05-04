"use client";

import type { DatePickerProps } from "./types";
import { DatePickerWrapper } from "./styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export function DatePicker({ ...rest }: DatePickerProps) {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerWrapper>
        <MuiDatePicker
          {...rest}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: "outlined",
            },
          }}
        />
      </DatePickerWrapper>
    </LocalizationProvider>
  );
}
