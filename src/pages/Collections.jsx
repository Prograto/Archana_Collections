import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections, products } from "@/data/products.js";
import { Reveal } from "@/components/Reveal.jsx";

export default function Collections() {
  useEffect(() => {
    document.title = "Collections — Wedding, Heritage Silks & Festive | Archana Collections";
  }, []);

  return (
    <div className="container-luxe pt-14 pb-28 md:pt-20">
      <Reveal>
        <p className="eyebrow">Collections</p>
      </Reveal>
      <Reveal delay={90}>
        <h1 className="display-lg mt-5 max-w-[14ch]">Explore the collection.</h1>
      </Reveal>

      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {collections.map((c, i) => {
          const count = products.filter((p) => p.collection === c.name).length;
          return (
            <Reveal key={c.slug} delay={(i % 2) * 100}>
              <Link
                to={`/collections/${c.slug}`}
                className={`group block ${i % 3 === 0 ? "md:mt-0" : "md:mt-12"}`}
              >
                <div className="gold-frame relative overflow-hidden bg-cream">
                  <img
                    src={c.cover}
                    alt={c.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <span className="vertical-label absolute left-4 top-4 bg-background/85 px-1.5 py-3 text-foreground">
                    {count} {count === 1 ? "piece" : "pieces"}
                  </span>
                  <span className="chapter-num absolute bottom-4 right-5 bg-background/85 px-2 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex items-end justify-between gap-6">
                  <div>
                    <h2 className="display-md">{c.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                  <span className="eyebrow inline-flex shrink-0 items-center gap-2 text-primary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                  </span>
                </div>
                <div className="mt-4 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
