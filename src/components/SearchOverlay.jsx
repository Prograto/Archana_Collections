import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, Sparkles, X } from "lucide-react";
import { products } from "@/data/products.js";

const suggestions = ["Silk Sarees", "Wedding", "Organza", "Jhumka", "Festive", "Bangles"];

export function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setQ("");
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return products
      .filter((p) =>
        [p.name, p.category, p.fabric, p.collection, ...p.colors, ...p.occasion]
          .join(" ")
          .toLowerCase()
          .includes(term)
      )
      .slice(0, 6);
  }, [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] animate-[fade-in_0.35s_cubic-bezier(0.16,1,0.3,1)] bg-background/98 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="container-luxe flex h-full flex-col pt-8 pb-12">
        <div className="flex items-center justify-between">
          <span className="eyebrow flex items-center gap-2 text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Search the collection
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="group grid h-11 w-11 place-items-center text-foreground transition-colors hover:text-primary"
          >
            <X className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
          </button>
        </div>

        <div className="mt-10 flex items-center gap-4 border-b border-border pb-5 transition-colors focus-within:border-primary">
          <Search className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search sarees, silk, wedding, jhumka…"
            aria-label="Search products"
            className="display-md w-full bg-transparent outline-none placeholder:text-muted-foreground/60"
          />
          {q ? (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Clear search"
              className="eyebrow shrink-0 text-muted-foreground transition-colors hover:text-primary"
            >
              Clear
            </button>
          ) : null}
        </div>

        <div className="mt-9 overflow-y-auto">
          {!q ? (
            <div>
              <p className="eyebrow">Popular searches</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQ(s)}
                    className="eyebrow group inline-flex items-center gap-2 border border-border px-4 py-2.5 text-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    {s}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {q && results.length === 0 ? (
            <div className="py-16 text-center">
              <p className="display-md">Nothing found in this collection.</p>
              <Link
                to="/collections"
                onClick={onClose}
                className="eyebrow mt-6 inline-block text-primary link-underline"
              >
                Explore all collections
              </Link>
            </div>
          ) : null}

          {results.length ? (
            <>
              <p className="eyebrow mb-6">
                {results.length} {results.length === 1 ? "result" : "results"}
              </p>
              <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((p, i) => (
                  <li key={p.slug} style={{ animationDelay: `${i * 60}ms` }} className="animate-[fade-in_0.5s_both]">
                    <Link
                      to={`/product/${p.slug}`}
                      onClick={onClose}
                      className="group grid grid-cols-[80px_minmax(0,1fr)_auto] items-center gap-4 border border-transparent p-2 transition-colors hover:border-border"
                    >
                      <span className="block overflow-hidden bg-cream">
                        <img
                          src={p.images[0]}
                          alt=""
                          loading="lazy"
                          className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">{p.name}</span>
                        <span className="eyebrow mt-1 block">{p.category}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
