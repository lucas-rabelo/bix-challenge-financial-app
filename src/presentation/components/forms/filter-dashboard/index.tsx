"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { useTransactions } from "@/presentation/hooks/use-transaction";
import { useFilters } from "@/presentation/hooks/use-filters";
import { getOptions } from "@/presentation/utils/options";

import { DatePickerControlled } from "../../datepicker-controlled";
import { SelectControlled } from "../../select-controlled";

import { filterDashboardZodSchema } from "./schema";
import { Form, Section } from "./styles";
import type { FilterDashboardSchema } from "./types";

export function FilterDashboard() {
  const { filters, setFilter, clearFilters } = useFilters();
  const { accounts, industries, states } = getOptions();
  const { setIsPending } = useTransactions(filters);

  const { control, watch, reset } = useForm<FilterDashboardSchema>({
    resolver: zodResolver(filterDashboardZodSchema),
    mode: "all",
    defaultValues: {
      accounts: filters.accounts?.[0] ?? undefined,
      industries: filters.industries?.[0] ?? undefined,
      states: filters.states?.[0] ?? undefined,
      startDate: filters.startDate ?? undefined,
      endDate: filters.endDate ?? undefined,
    },
  });

  const setFilterRef = useRef(setFilter);
  useEffect(() => {
    setFilterRef.current = setFilter;
  });

  const previousValues = useRef<Partial<FilterDashboardSchema>>({});

  useEffect(() => {
    setIsPending(true);
    const subscription = watch((values) => {
      const prev = previousValues.current;
      
      if (values.accounts !== prev.accounts) {
        setFilterRef.current("accounts", values.accounts ? [values.accounts] : []);
      }
      if (values.industries !== prev.industries) {
        setFilterRef.current("industries", values.industries ? [values.industries] : []);
      }
      if (values.states !== prev.states) {
        setFilterRef.current("states", values.states ? [values.states] : []);
      }
      if (values.startDate !== prev.startDate && values.startDate) {
        setFilterRef.current("startDate", values.startDate);
      }
      if (values.endDate !== prev.endDate && values.endDate) {
        setFilterRef.current("endDate", values.endDate);
      }
      
      previousValues.current = { ...values };
    });
    
    return () => subscription.unsubscribe();
    setIsPending(false);
  }, [watch]);

  const handleClearFilters = () => {
    clearFilters();  
    reset({
      accounts: undefined,
      industries: undefined,
      states: undefined,
      startDate: undefined,
      endDate: undefined,
    });
  }

  return (
    <Section>
      <Typography variant="h6">Filters</Typography>

      <Form>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 2 }}>
            <SelectControlled
              control={control}
              name="accounts"
              label="Account"
              options={accounts}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 2 }}>
            <SelectControlled
              control={control}
              name="industries"
              label="Industry"
              options={industries}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 2 }}>
            <SelectControlled
              control={control}
              name="states"
              label="State"
              options={states}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 2 }}>
            <DatePickerControlled
              control={control}
              name="startDate"
              label="Start Date"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 2 }}>
            <DatePickerControlled
              control={control}
              name="endDate"
              label="End Date"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 2 }}>
            <Button
              onClick={handleClearFilters}
              variant="outlined"
              sx={{ height: "100%", borderRadius: 3 }}
            >
              Clear filters
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Section>
  );
}