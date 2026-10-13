import type { PricingBlock, PricePackage } from "@/data/services";

/**
 * Bloki cennika podstrony usługi: tabela widełek, kafle pakietów
 * albo opis tekstowy. Tabela na mobile zamienia się w karty wierszy.
 */
export default function ServicePricing({ blocks }: { blocks: PricingBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block) => (
        <div
          key={block.title}
          className="rounded-[1.5rem] border border-brand-border bg-brand-card p-6 sm:p-8 lg:p-10 shadow-sm"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-brand-text leading-snug">
            {block.title}
          </h3>
          {"subtitle" in block && block.subtitle && (
            <p className="mt-1.5 text-brand-muted">{block.subtitle}</p>
          )}

          <div className="mt-6">
            {block.kind === "table" && (
              <PriceTable columns={block.columns} rows={block.rows} />
            )}
            {block.kind === "packages" && <PackageGrid packages={block.packages} />}
            {block.kind === "text" && (
              <div className="space-y-4 max-w-3xl">
                {block.paragraphs.map((p) => (
                  <p key={p} className="text-brand-body text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          {"note" in block && block.note && (
            <p className="mt-5 text-sm text-brand-muted leading-relaxed max-w-3xl">
              {block.note}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function PriceTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <>
      {/* Desktop: klasyczna tabela */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              {columns.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="pb-3 pr-6 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted border-b border-brand-border"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-brand-border last:border-0">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th
                      key={i}
                      scope="row"
                      className="py-4 pr-6 font-semibold text-brand-text whitespace-nowrap"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td
                      key={i}
                      className={`py-4 pr-6 whitespace-nowrap tabular-nums ${
                        i === row.length - 1
                          ? "text-magenta-deep font-semibold"
                          : "text-brand-body"
                      }`}
                    >
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: karta na wiersz */}
      <div className="md:hidden space-y-3">
        {rows.map((row) => (
          <div key={row[0]} className="rounded-2xl bg-brand-bg-subtle p-5">
            <p className="font-bold text-brand-text mb-3">{row[0]}</p>
            <dl className="space-y-2">
              {columns.slice(1).map((c, i) => (
                <div key={c} className="flex items-baseline justify-between gap-4 text-[15px]">
                  <dt className="text-brand-muted">{c}</dt>
                  <dd className="text-brand-text font-medium whitespace-nowrap tabular-nums">
                    {row[i + 1]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

function PackageGrid({ packages }: { packages: PricePackage[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {packages.map((p) => (
        <div
          key={p.name}
          className="flex flex-col rounded-2xl border border-brand-border bg-brand-bg-subtle p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-magenta-deep">
            {p.name}
          </p>
          <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
            <span className="text-3xl lg:text-[2.25rem] font-extrabold text-brand-text tracking-tight whitespace-nowrap tabular-nums">
              {p.price}
            </span>
            <span className="text-sm font-medium text-brand-muted">netto</span>
          </p>
          <p className="mt-1 text-brand-body text-[15px] tabular-nums">{p.rate}</p>
          {p.extra && (
            <div className="mt-auto pt-5">
              <div className="pt-4 border-t border-brand-border">
                <p className="text-xs text-brand-muted uppercase tracking-[0.12em]">
                  Dodatkowo
                </p>
                <p className="mt-1 font-semibold text-brand-text">{p.extra}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
