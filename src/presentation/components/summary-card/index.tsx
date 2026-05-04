"use client";

import { formatCurrency } from "@/presentation/utils/format-currency";
import {
  AccessTime,
  AccountBalanceWallet,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import type { ReactNode } from "react";
import { SUMMARY_CARDS_KEY } from "./constants";
import { Container, Currency, Header, Name } from "./styles";
import type { SummaryCardKeyProps, SummaryCardProps } from "./types";
import { Grid } from "@mui/material";

export function SummaryCard({ type, currency }: SummaryCardProps) {
  const summaryCardTitle: Record<SummaryCardKeyProps, string> = {
    [SUMMARY_CARDS_KEY.PENDING]: "Pending",
    [SUMMARY_CARDS_KEY.INCOME]: "Incomes",
    [SUMMARY_CARDS_KEY.EXPENSE]: "Expenses",
    [SUMMARY_CARDS_KEY.BALANCE]: "Balance",
  };

  const summaryCardIcon: Record<SummaryCardKeyProps, ReactNode> = {
    [SUMMARY_CARDS_KEY.PENDING]: <AccessTime />,
    [SUMMARY_CARDS_KEY.INCOME]: <TrendingUp />,
    [SUMMARY_CARDS_KEY.EXPENSE]: <TrendingDown />,
    [SUMMARY_CARDS_KEY.BALANCE]: <AccountBalanceWallet />,
  };

  return (
    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
      <Container>
        <Header>
          {summaryCardIcon[type]}
          <Name>{summaryCardTitle[type]}</Name>
        </Header>
        <Currency>{formatCurrency(currency)}</Currency>
      </Container>
    </Grid>
  );
}
