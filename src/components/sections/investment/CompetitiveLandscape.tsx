import { competitors } from "@/content/home/investment/InvestmentContent";

const comparisonHeadings = [
  "AI Depth",
  "Interpretation",
  "Family Layer",
  "Marketplace",
] as const;

export function CompetitiveLandscape() {
  return (
    <div className="mt-12 rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_10px_32px_rgba(17,24,39,0.05)]">
      <div className="mb-6 space-y-2">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
          Competitive Landscape
        </div>
        <h3 className="font-[family:var(--font-display)] text-[clamp(1.4rem,2.4vw,2rem)] font-bold tracking-[-0.04em] text-[var(--color-ink)]">
          Afia AI fills the gap no competitor covers
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full">
          <thead>
            <tr className="border-b border-black/5">
              <th className="pb-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                Platform
              </th>
              {comparisonHeadings.map((heading) => (
                <th
                  key={heading}
                  className="px-2 pb-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-subtle)]"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((row) => {
              const metrics = [
                row.aiDepth,
                row.interpretation,
                row.familyLayer,
                row.marketplace,
              ];

              return (
                <tr
                  key={row.name}
                  className={`border-b border-black/5 last:border-none ${
                    row.isAfia ? "bg-[rgba(39,174,96,0.05)]" : ""
                  }`}
                >
                  <td className="py-4 pr-4 text-sm font-semibold text-[var(--color-ink)]">
                    {row.name}
                  </td>
                  {metrics.map((metric, index) => (
                    <td key={`${row.name}-${index}`} className="px-2 py-4">
                      <div className="mx-auto max-w-28">
                        <div className="h-2 overflow-hidden rounded-full bg-black/5">
                          <div
                            className={`h-full rounded-full ${
                              row.isAfia
                                ? "bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]"
                                : "bg-[var(--color-cloud)]"
                            }`}
                            style={{ width: `${metric}%` }}
                          />
                        </div>
                        <div
                          className={`mt-2 text-center text-[10px] font-bold ${
                            row.isAfia
                              ? "text-[var(--color-green)]"
                              : "text-[var(--color-subtle)]"
                          }`}
                        >
                          {metric}%
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-[color:var(--color-green-soft-border)] bg-[var(--color-green-soft)] p-4">
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          <span className="font-semibold text-[var(--color-green)]">
            The AI gap is clear:
          </span>{" "}
          existing platforms collect and display data, but none use AI to
          interpret it, guide decisions, or serve families as a unit.
        </p>
      </div>
    </div>
  );
}
