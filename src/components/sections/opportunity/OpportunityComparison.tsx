import { WithAiCard } from "./WithAiCard";
import { WithoutAiCard } from "./WithoutAiCard";

export function OpportunityComparison() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2">
      <WithoutAiCard />
      <WithAiCard />
    </div>
  );
}
