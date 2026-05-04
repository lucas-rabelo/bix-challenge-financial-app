import type { SUMMARY_CARDS_KEY } from "./constants";

export type SummaryCardKeyProps = typeof SUMMARY_CARDS_KEY[keyof typeof SUMMARY_CARDS_KEY];

export type SummaryCardProps = {
  type: SummaryCardKeyProps;
  currency: number;
};