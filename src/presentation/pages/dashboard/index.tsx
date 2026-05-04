"use client";

import { useState, useMemo } from 'react';
import { Stack, CircularProgress } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Drawer } from "@/presentation/components/drawer";
import { FilterDashboard } from "@/presentation/components/forms/filter-dashboard";
import { SummaryCardList } from "@/presentation/components/summary-card-list";
import type { SummaryCardListProps } from "@/presentation/components/summary-card-list/types";
import { IncomeVsExpenseChart } from "@/presentation/components/charts/income-vs-expense-chart";
import { SUMMARY_CARDS_KEY } from "@/presentation/components/summary-card/constants";
import { useFilters } from "@/presentation/hooks/use-filters";
import { useTransactions } from "@/presentation/hooks/use-transaction";
import { buildPieChartData } from '@/presentation/components/charts/utils/build-pie-chart-data';
import { buildChartData } from '@/presentation/components/charts/utils/build-chart-data';
import { ExpensesPieChart } from '@/presentation/components/charts/all-industries-expense-chart';

import { Container, Content, Section, ButtonMenu } from "./styles";

export function DashboardPage() {
  const { filters } = useFilters();
  const { transactions, summary, isPending } = useTransactions(filters);
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const summaryCards: SummaryCardListProps["data"] = useMemo(() => [
    { type: SUMMARY_CARDS_KEY.PENDING, currency: summary.pending },
    { type: SUMMARY_CARDS_KEY.INCOME, currency: summary.income },
    { type: SUMMARY_CARDS_KEY.EXPENSE, currency: summary.expense },
    { type: SUMMARY_CARDS_KEY.BALANCE, currency: summary.balance },
  ], [summary]);

  const pieData = useMemo(() => buildPieChartData(transactions), [transactions]);
  const chartData = useMemo(() => buildChartData(transactions), [transactions]);

  const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer);

  return (
    <Container>
      <Drawer open={isOpenDrawer} onClose={toggleDrawer} />

      <Content>
        <Stack>
          <ButtonMenu onClick={toggleDrawer}>
            <Menu />
          </ButtonMenu>
        </Stack>

        <FilterDashboard />

        {isPending ? (
          <CircularProgress />
        ) : (
          <>
            <SummaryCardList data={summaryCards} />

            <Section>
              <IncomeVsExpenseChart data={chartData} />
              <ExpensesPieChart data={pieData} />
            </Section>
          </>
        )}
      </Content>
    </Container>
  );
}