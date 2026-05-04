import type { Transaction } from "@/presentation/services/transactions/types";
import type { Dispatch, SetStateAction } from "react";

export type Summary = {
  income: number;
  expense: number;
  balance: number;
  pending: number;
};

export type UseTransactionsReturn = {
  transactions: Transaction[];
  summary: Summary;
  isPending: boolean;
  setIsPending: Dispatch<SetStateAction<boolean>>
};