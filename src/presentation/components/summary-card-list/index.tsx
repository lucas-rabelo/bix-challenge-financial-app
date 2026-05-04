import { SummaryCard } from "../summary-card";
import type { SummaryCardListProps } from "./types";
import { Container } from "./styles";

export function SummaryCardList({ data }: SummaryCardListProps) {
  return (
    <Container>
      {data.map((card) => (
        <SummaryCard key={card.type} type={card.type} currency={card.currency} />
      ))}
    </Container>
  );
}
