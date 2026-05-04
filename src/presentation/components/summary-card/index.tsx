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

export function SummaryCard({ type, currency }: SummaryCardProps) {
  const summaryCardTitle: Record<SummaryCardKeyProps, string> = {
    [SUMMARY_CARDS_KEY.PENDING]: "Pendente",
    [SUMMARY_CARDS_KEY.INCOME]: "Receitas",
    [SUMMARY_CARDS_KEY.EXPENSE]: "Despesas",
    [SUMMARY_CARDS_KEY.BALANCE]: "Saldo",
  };

  const summaryCardIcon: Record<SummaryCardKeyProps, ReactNode> = {
    [SUMMARY_CARDS_KEY.PENDING]: <AccessTime />,
    [SUMMARY_CARDS_KEY.INCOME]: <TrendingUp />,
    [SUMMARY_CARDS_KEY.EXPENSE]: <TrendingDown />,
    [SUMMARY_CARDS_KEY.BALANCE]: <AccountBalanceWallet />,
  };

  return (
    <Container>
      <Header>
        {summaryCardIcon[type]}
        <Name>{summaryCardTitle[type]}</Name>
      </Header>
      <Currency>{formatCurrency(currency)}</Currency>
    </Container>
  );
}
