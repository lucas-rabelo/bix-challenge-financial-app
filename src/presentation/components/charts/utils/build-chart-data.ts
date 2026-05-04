import { format } from "date-fns";
import { Transaction } from "@/presentation/services/transactions/types";

export type ChartData = {
  name: string;
  income: number;
  expense: number;
  balance: number;
};

export function buildChartData(transactions: Transaction[]): ChartData[] {
  const map = new Map<string, ChartData & { timestamp: number }>();

  for (const t of transactions) {
    const date = new Date(t.date);
    const dateKey = format(date, "dd/MM/yyyy");

    if (!map.has(dateKey)) {
      map.set(dateKey, {
        name: dateKey,
        income: 0,
        expense: 0,
        balance: 0,
        timestamp: date.getTime(),
      });
    }

    const entry = map.get(dateKey)!;

    if (t.transactionType === "deposit") {
      entry.income += t.amount;
    } else {
      entry.expense += t.amount;
    }

    entry.balance = entry.income - entry.expense;
  }

  return Array.from(map.values())
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(({ timestamp: _, ...rest }) => rest);
}