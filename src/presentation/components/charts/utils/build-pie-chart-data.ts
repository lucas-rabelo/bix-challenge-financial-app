import { Transaction } from "@/presentation/services/transactions/types";

type PieChartData = {
  name: string;
  value: number;
};

export function buildPieChartData(transactions: Transaction[]): PieChartData[] {
  const map = new Map<string, number>();

  for (const t of transactions) {
    if (t.transactionType !== "withdraw") continue;

    const current = map.get(t.industry) ?? 0;
    map.set(t.industry, current + t.amount);
  }

  return Array.from(map.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}