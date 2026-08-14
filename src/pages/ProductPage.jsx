import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Gem, Heart, MapPin, MessageCircle, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { getProduct, products } from "@/data/products.js";
import { enquiryMessage, site, whatsappLink } from "@/lib/site.js";
import { useWishlist } from "@/hooks/use-wishlist.js";
import { ProductCard } from "@/components/ProductCard.jsx";
import { Reveal } from "@/components/Reveal.jsx";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const [img, setImg] = useState(0);
  const { has, toggle } = useWishlist();

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Archana Collections, Narsapur`;
    }
  }, [product]);

  if (!product) return <Navigate to="/" replace />;

  const saved = has(product.slug);

  const related = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.collection === product.collection || p.kind === product.kind)
    )
    .slice(0, 3);

  const details = [
    ["Fabric", product.fabric],
    ["Work / Design", product.work],
    ["Occasion", product.occasion.join(", ")],
    ["Colours", product.colors.join(", ")],
    ["Availability", product.availability],
    ["Care", product.care],
  ];

  return (
    <div className="pb-28">
      <div className="container-luxe pt-8">
        <Link
          to={product.kind === "saree" ? "/sarees" : "/gold-plated-articles"}
          className="eyebrow inline-flex items-center gap-2 link-underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          {product.kind === "saree" ? "Sarees" : "Gold-Plated Articles"}
        </Link>
      </div>

      <div className="container-luxe mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <div className="gold-frame overflow-hidden bg-cream" data-inview="true">
            <img
              src={product.images[img]}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
            />
          </div>

          {product.images.length > 1 ? (
            <div className="mt-4 flex gap-4">
              {product.images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setImg(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-current={i === img}
                  className={`w-20 overflow-hidden border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${
                    i === img
                      ? "border-accent opacity-100"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">{product.category}</p>
          <h1 className="display-lg mt-4">{product.name}</h1>
          <div className="rule-gold mt-6 max-w-[140px]" />
          <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="luxe-card mt-8 p-6">
            <p className="font-display text-3xl">
              {product.price ? `₹${product.price.toLocaleString("en-IN")}` : "Price on enquiry"}
            </p>
            <p className="eyebrow mt-2 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {product.availability}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(enquiryMessage(product.name, product.kind))}
                target="_blank"
                rel="noreferrer"
                className="eyebrow group inline-flex flex-1 items-center justify-center gap-2 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-wine-deep"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5" aria-hidden="true" />
                Enquire on WhatsApp
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-4 transition-colors hover:border-accent"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Visit Store
              </a>
            </div>

            <button
              type="button"
              onClick={() => toggle(product.slug)}
              aria-pressed={saved}
              className="eyebrow mt-5 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Heart
                className={`h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 ${
                  saved ? "fill-primary text-primary" : ""
                }`}
              />
              {saved ? "Saved" : "Save to wishlist"}
            </button>
          </div>

          <ul className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[
              [ShieldCheck, "Quality checked"],
              [Truck, "Reserve & collect"],
              [Gem, "Hand-picked"],
            ].map(([Icon, label], i) => (
              <li key={i} className="luxe-card px-2 py-5">
                <Icon className="mx-auto h-4 w-4 text-accent" aria-hidden="true" />
                <p className="eyebrow mt-3 text-[0.6rem]">{label}</p>
              </li>
            ))}
          </ul>

          <dl className="mt-10 divide-y divide-border border-y border-border">
            {details.map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 py-4 text-sm transition-colors hover:bg-cream/60"
              >
                <dt className="eyebrow">{k}</dt>
                <dd className="text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {related.length ? (
        <section className="container-luxe mt-28">
          <div className="textile-divider mb-14" />
          <Reveal>
            <h2 className="display-md">Complete the look</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
