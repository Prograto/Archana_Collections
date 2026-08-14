import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, Minus, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "./ProductCard.jsx";
import { Reveal } from "./Reveal.jsx";

const facets = [
  { key: "category", label: "Category" },
  { key: "fabric", label: "Fabric" },
  { key: "occasion", label: "Occasion" },
  { key: "colors", label: "Colour" },
  { key: "availability", label: "Availability" },
];

function valuesOf(items, key) {
  const set = new Set();
  for (const p of items) {
    const v = p[key];
    if (Array.isArray(v)) v.forEach((x) => set.add(x));
    else if (typeof v === "string") set.add(v);
  }
  return [...set].sort();
}

function countFor(items, key, value) {
  return items.filter((p) => {
    const v = p[key];
    return Array.isArray(v) ? v.includes(value) : v === value;
  }).length;
}

export function Catalogue({ items }) {
  const [active, setActive] = useState({});
  const [sheet, setSheet] = useState(false);
  const [collapsed, setCollapsed] = useState({});

  const filtered = useMemo(
    () =>
      items.filter((p) =>
        facets.every(({ key }) => {
          const sel = active[key];
          if (!sel?.length) return true;
          const v = p[key];
          return Array.isArray(v) ? v.some((x) => sel.includes(x)) : sel.includes(v);
        })
      ),
    [items, active]
  );

  const toggle = (key, value) =>
    setActive((prev) => {
      const cur = prev[key] ?? [];
      return {
        ...prev,
        [key]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value],
      };
    });

  const chips = Object.entries(active).flatMap(([key, vals]) =>
    (vals ?? []).map((value) => ({ key, value }))
  );
  const count = chips.length;

  const panel = (
    <div className="divide-y divide-border/70">
      {facets.map((f) => {
        const open = !collapsed[f.key];
        const selected = active[f.key]?.length ?? 0;
        return (
          <section key={f.key} className="py-5 first:pt-0">
            <button
              type="button"
              onClick={() => setCollapsed((c) => ({ ...c, [f.key]: open }))}
              aria-expanded={open}
              className="group flex w-full items-center justify-between gap-3 text-left"
            >
              <span className="eyebrow flex items-center gap-2 text-foreground">
                {f.label}
                {selected ? (
                  <span className="grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[0.55rem] leading-none text-primary-foreground">
                    {selected}
                  </span>
                ) : null}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-primary ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-1">
                  {valuesOf(items, f.key).map((v) => {
                    const checked = (active[f.key] ?? []).includes(v);
                    return (
                      <label key={v} className="group flex cursor-pointer items-center gap-3 py-1.5 text-sm">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(f.key, v)}
                          className="peer sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`grid h-4 w-4 shrink-0 place-items-center border transition-all duration-300 ${
                            checked
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border group-hover:border-primary"
                          }`}
                        >
                          <Check
                            className={`h-3 w-3 transition-transform duration-300 ${
                              checked ? "scale-100" : "scale-0"
                            }`}
                          />
                        </span>
                        <span
                          className={`flex-1 transition-colors ${
                            checked ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {v}
                        </span>
                        <span className="text-[0.7rem] tabular-nums text-muted-foreground/70">
                          {countFor(items, f.key, v)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {count > 0 ? (
        <div className="pt-5">
          <button
            type="button"
            onClick={() => setActive({})}
            className="eyebrow inline-flex items-center gap-2 text-primary link-underline"
          >
            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
            Clear all filters
          </button>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="container-luxe grid gap-12 pb-24 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
      <aside className="hidden lg:block">
        <div className="sticky top-32">
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="eyebrow text-foreground">Refine</span>
          </div>
          <div className="rule-gold mb-6" />
          {panel}
        </div>
      </aside>

      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="eyebrow">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          <button
            type="button"
            onClick={() => setSheet(true)}
            className="eyebrow inline-flex items-center gap-2 border border-border px-4 py-2.5 transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Filter{count ? ` (${count})` : ""}
          </button>
        </div>

        {chips.length ? (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {chips.map(({ key, value }) => (
              <button
                key={`${key}-${value}`}
                type="button"
                onClick={() => toggle(key, value)}
                className="group inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {value}
                <X className="h-3 w-3 transition-transform duration-300 group-hover:rotate-90" aria-hidden="true" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => setActive({})}
              className="eyebrow ml-1 text-primary link-underline"
            >
              Clear
            </button>
          </div>
        ) : null}

        {filtered.length === 0 ? (
          <div className="border border-border/70 px-6 py-24 text-center">
            <p className="display-md">Nothing found in this collection.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Try removing a filter, or let us help you find the right piece.
            </p>
            <Link to="/collections" className="eyebrow mt-7 inline-block text-primary link-underline">
              Explore all collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProductCard product={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {sheet ? (
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]"
            onClick={() => setSheet(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)] overflow-y-auto bg-background px-5 pb-10 pt-6">
            <div className="flex items-center justify-between">
              <span className="eyebrow flex items-center gap-2 text-foreground">
                <SlidersHorizontal className="h-4 w-4 text-primary" aria-hidden="true" />
                Refine
              </span>
              <button
                type="button"
                onClick={() => setSheet(false)}
                aria-label="Close filters"
                className="grid h-11 w-11 place-items-center transition-colors hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="rule-gold my-6" />
            {panel}
            <button
              type="button"
              onClick={() => setSheet(false)}
              className="eyebrow mt-10 w-full bg-primary py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Show {filtered.length} pieces
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
