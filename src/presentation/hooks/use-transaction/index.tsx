"use client";

import { useMemo, useState } from "react";
import { getTransactions,  } from "@/presentation/services/transactions";
import type { UseTransactionsReturn } from "./types";
import type { Filters } from "../use-filters/types";

export function useTransactions(filters: Filters): UseTransactionsReturn {
  const [isPending, setIsPending] = useState<boolean>(false);
  
  const transactions = useMemo(() => {
    let data = getTransactions();

    if (filters.startDate) {
      data = data.filter((t) => t.date >= filters.startDate!);
    }

    if (filters.endDate) {
      data = data.filter((t) => t.date <= filters.endDate!);
    }

    if (filters.accounts?.length) {
      data = data.filter((t) =>
        filters.accounts!.includes(t.account)
      );
    }

    if (filters.industries?.length) {
      data = data.filter((t) =>
        filters.industries!.includes(t.industry)
      );
    }

    if (filters.states?.length) {
      data = data.filter((t) =>
        filters.states!.includes(t.state)
      );
    }

    return data;
  }, [filters]);

  const summary = useMemo(() => {
    let income = 0;
    let expense = 0;
    let pending = 0;

    for (const t of transactions) {
      if (t.transactionType === "deposit") {
        income += t.amount;
      } else {
        expense += t.amount;
      }
    }

    for(const t of transactions) {
      if(t.date > new Date().getTime()) {
        pending += t.amount;
      }
    }

    return {
      income,
      expense,
      pending,
      balance: income - expense,
    };
  }, [transactions]);

  return {
    transactions,
    summary,
    isPending,
    setIsPending,
  };
}