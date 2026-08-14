import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { products } from "@/data/products.js";
import { site, whatsappLink } from "@/lib/site.js";
import { ProductCard } from "@/components/ProductCard.jsx";
import { GoldRule, Reveal } from "@/components/Reveal.jsx";
import heroSaree from "@/assets/hero-saree.jpg";
import weddingEdit from "@/assets/wedding-edit.jpg";
import jewellery from "@/assets/jewellery-hero.jpg";
import catSarees from "@/assets/cat-sarees.jpg";
import catSilk from "@/assets/cat-silk.jpg";
import catFestive from "@/assets/cat-festive.jpg";
import catNew from "@/assets/cat-new.jpg";
import storeImg from "@/assets/store.jpg";

const categories = [
  { name: "Sarees", note: "From everyday elegance to grand celebrations.", img: catSarees, to: "/sarees" },
  { name: "Wedding Sarees", note: "For moments that become memories.", img: weddingEdit, slug: "the-wedding-edit" },
  { name: "Silk Sarees", note: "Tradition woven into timeless luxury.", img: catSilk, slug: "heritage-silks" },
  { name: "Gold-Plated Articles", note: "Classic brilliance, beautifully crafted.", img: jewellery, to: "/gold-plated-articles" },
  { name: "Festive Collection", note: "For every celebration.", img: catFestive, slug: "festive-edit" },
  { name: "New Arrivals", note: "Discover what's new.", img: catNew, to: "/new-arrivals" },
];

const occasionList = [
  "Wedding",
  "Reception",
  "Festival",
  "Pooja",
  "Family Celebration",
  "Everyday Elegance",
  "Gifting",
];

const testimonials = [
  { quote: "Add a real customer's words here.", name: "Customer name", place: "Narsapur" },
  { quote: "Add a second verified testimonial here.", name: "Customer name", place: "West Godavari" },
  { quote: "Add a third verified testimonial here.", name: "Customer name", place: "Andhra Pradesh" },
];

export default function Home() {
  useEffect(() => {
    document.title = "Archana Collections — Saree Shop in Narsapur, Andhra Pradesh";
  }, []);

  const featured = products.filter((p) => p.featured);
  const sarees = products.filter((p) => p.kind === "saree");
  const articles = products.filter((p) => p.kind === "article");

  return (
    <>
      {/* HERO */}
      <section className="container-luxe grid min-h-[78vh] items-center gap-10 pt-10 pb-16 lg:min-h-[86vh] lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pt-6">
        <div className="max-w-xl">
          <p className="eyebrow animate-[herofade_0.9s_cubic-bezier(0.16,1,0.3,1)_0.15s_both]">
            Archana Collections · {site.city}
          </p>
          <h1 className="display-xl mt-6">
            <span className="block animate-[herofade_1s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]">
              Timeless Drapes.
            </span>
            <span className="block italic text-primary animate-[herofade_1s_cubic-bezier(0.16,1,0.3,1)_0.45s_both]">
              Modern Elegance.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground animate-[herofade_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_both]">
            Discover sarees and timeless adornments curated for celebrations, traditions and every beautiful
            occasion.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-[herofade_1s_cubic-bezier(0.16,1,0.3,1)_0.75s_both]">
            <Link
              to="/sarees"
              className="eyebrow group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-wine-deep"
            >
              Explore Sarees
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
            </Link>
            <Link
              to="/store"
              className="eyebrow inline-flex items-center justify-center gap-2 border border-foreground/20 px-8 py-4 transition-colors hover:border-accent"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" /> Visit Our Store
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <img
              src={heroSaree}
              alt="Woman in a deep wine Kanjivaram silk saree with antique gold zari border"
              width={1104}
              height={1456}
              className="aspect-[4/5] w-full object-cover animate-[herozoom_1.8s_cubic-bezier(0.16,1,0.3,1)_both] lg:aspect-[4/4.6]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-4 top-6 hidden h-[70%] w-6 bg-[repeating-linear-gradient(180deg,var(--gold)_0_1px,transparent_1px_10px)] opacity-45 animate-[herofade_1.2s_cubic-bezier(0.16,1,0.3,1)_0.9s_both] lg:block"
          />
          <span className="vertical-label absolute -right-2 bottom-8 hidden text-muted-foreground lg:block">
            Est. in Narsapur
          </span>
        </div>
        <style>{`
          @keyframes herofade{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
          @keyframes herozoom{from{opacity:0;transform:scale(1.07)}to{opacity:1;transform:scale(1)}}
        `}</style>
      </section>

      {/* SIGNATURE INTRO */}
      <section className="container-luxe section-y">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <Reveal>
            <p className="chapter-num">Chapter 01 — The house</p>
            <h2 className="display-lg mt-5 max-w-[14ch]">
              Woven for moments worth remembering.
            </h2>
          </Reveal>

          <Reveal delay={140} className="lg:pt-4">
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              Archana Collections brings together beautiful sarees, traditional elegance and contemporary
              styling for weddings, festivals, celebrations and everyday moments — chosen piece by piece, and
              kept where you can see them in person.
            </p>
            <GoldRule className="mt-10 max-w-[240px]" />
          </Reveal>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="container-luxe pb-20 md:pb-28">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="chapter-num">Chapter 02 — The collection</p>
            <h2 className="display-lg mt-4 max-w-[12ch]">Explore the collection</h2>
          </Reveal>

          <Reveal delay={90}>
            <Link to="/collections" className="eyebrow hidden shrink-0 text-primary link-underline sm:block">
              All collections
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-6">
          {categories.map((c, i) => {
            const span =
              i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : i === 2 ? "md:col-span-2" : i === 3 ? "md:col-span-4" : "md:col-span-3";
            const ratio = i === 0 || i === 3 ? "aspect-[16/10]" : "aspect-[3/4]";
            const inner = (
              <>
                <div className="overflow-hidden bg-cream">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className={`${ratio} w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]`}
                  />
                </div>
                <div className="mt-5 flex items-end justify-between gap-5">
                  <div className="min-w-0">
                    <h3 className="display-md transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.note}</p>
                  </div>
                  <span className="eyebrow inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-primary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                  </span>
                </div>
                <div className="mt-4 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </>
            );
            return (
              <Reveal key={c.name} delay={(i % 2) * 90} className={span}>
                {c.slug ? (
                  <Link to={`/collections/${c.slug}`} className="group block">
                    {inner}
                  </Link>
                ) : (
                  <Link to={c.to} className="group block">
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CURATED SAREES */}
      <section className="container-luxe pb-24 md:pb-32">
        <div className="textile-divider mb-16" />
        <Reveal>
          <p className="chapter-num">Chapter 03 — Curated drapes</p>
          <h2 className="display-lg mt-4">Curated sarees</h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="mt-3 text-sm text-muted-foreground">Selected for the moments that matter.</p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ProductCard product={featured[0]} ratio="tall" priority />
          </Reveal>
          <div className="grid gap-14 lg:col-span-5 lg:pt-16">
            {featured.slice(1, 3).map((p, i) => (
              <Reveal key={p.slug} delay={100 + i * 90}>
                <ProductCard product={p} ratio={i === 0 ? "portrait" : "square"} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-3">
          {sarees.slice(3, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Link to="/sarees" className="eyebrow mt-16 inline-block text-primary link-underline">
            View all sarees
          </Link>
        </Reveal>
      </section>

      {/* THE WEDDING EDIT */}
      <section className="relative">
        <img
          src={weddingEdit}
          alt="Bride in a gold and crimson silk wedding saree"
          loading="lazy"
          className="h-[70vh] w-full object-cover md:h-[86vh]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-wine-deep/85 via-wine-deep/45 to-transparent" />
        <div className="container-luxe absolute inset-0 flex items-center">
          <div className="max-w-lg text-ivory">
            <Reveal>
              <p className="chapter-num text-gold-soft">Chapter 04 — The Wedding Edit</p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="display-lg mt-5">Designed for the celebrations you will remember forever.</h2>
            </Reveal>
            <Reveal delay={180}>
              <Link
                to="/collections/the-wedding-edit"
                className="eyebrow group mt-9 inline-flex items-center gap-3 border border-ivory/40 px-7 py-4 text-ivory transition-colors hover:border-gold-soft"
              >
                Explore Wedding Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GOLD-PLATED ARTICLES */}
      <section className="bg-charcoal text-ivory">
        <div className="container-luxe section-y grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="chapter-num text-gold-soft">Chapter 05 — Gold-Plated Articles</p>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="display-lg mt-5 max-w-[13ch]">Adornment, reimagined.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ivory/70">
                Discover traditional silhouettes interpreted through refined gold-plated craftsmanship —
                jhumkas, kadas, temple necklaces and chains that sit quietly against woven zari.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Link to="/gold-plated-articles" className="eyebrow mt-9 inline-block text-gold-soft link-underline">
                Explore adornment
              </Link>
            </Reveal>
            <Reveal delay={280}>
              <img
                src={jewellery}
                alt="Gold-plated temple jhumkas and carved bangles on wine velvet"
                loading="lazy"
                className="mt-12 hidden aspect-[3/2] w-full object-cover lg:block"
              />
            </Reveal>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-12">
            {articles.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 2) * 90}>
                <Link to={`/product/${p.slug}`} className="group block">
                  <div className="overflow-hidden bg-wine-deep">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-4 truncate text-sm font-medium">{p.name}</h3>
                  <p className="eyebrow mt-1 text-ivory/50">{p.category}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="container-luxe section-y">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="display-lg max-w-[10ch]">Dress for the moment</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Tell us the occasion and we'll narrow the shelf down with you — in store or over WhatsApp.
              </p>
            </Reveal>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {occasionList.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 60}>
                <a
                  href={whatsappLink(
                    `Hello ${site.name}, I'm looking for something for a ${o.toLowerCase()} occasion. Could you help me choose?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="font-display text-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:text-3xl">
                    {o}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-cream">
        <div className="container-luxe section-y">
          <Reveal>
            <h2 className="display-lg max-w-[14ch]">Why Archana Collections</h2>
          </Reveal>
          <dl className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Curated collections", "Thoughtfully selected sarees and traditional pieces, not shelf-filler."],
              ["Personal assistance", "Help choosing the right drape for your occasion, colour and comfort."],
              ["Narsapur store", "Visit us and experience the collection in person, in daylight."],
              ["Quality & craftsmanship", "Chosen with attention to fabric, finish and detail."],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 90}>
                <div className="h-px w-10 bg-accent" />
                <dt className="display-md mt-5">{k}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* STORE */}
      <section className="container-luxe section-y grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <Reveal variant="mask">
          <img
            src={storeImg}
            alt="Shelves of folded silk sarees inside the Archana Collections store in Narsapur"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">The store</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-lg mt-5 max-w-[13ch]">Visit Archana Collections</h2>
          </Reveal>
          <Reveal delay={150}>
            <dl className="mt-9 divide-y divide-border border-y border-border text-sm">
              {[
                ["Address", site.address],
                ["Hours", site.hours],
                ["Phone", site.phone],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[86px_minmax(0,1fr)] gap-5 py-4">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-primary-foreground transition-colors hover:bg-wine-deep"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
              <a
                href={whatsappLink(`Hello ${site.name}, I'd like to plan a visit.`)}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center justify-center gap-2 border border-foreground/20 px-7 py-4 transition-colors hover:border-accent"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-background">
        <div className="container-luxe section-y">
          <Reveal>
            <h2 className="display-lg">Loved by our customers</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 text-sm text-muted-foreground">
              Placeholder entries — replace with verified customer words before publishing.
            </p>
          </Reveal>
          <ul className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 100}>
                <blockquote className="font-display text-xl leading-snug text-muted-foreground/80">
                  "{t.quote}"
                </blockquote>
                <p className="eyebrow mt-6">
                  {t.name} · {t.place}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* THE ARCHANA EDIT */}
      <section className="container-luxe section-y">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <h2 className="display-lg">From the Archana Edit</h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="eyebrow hidden shrink-0 text-primary link-underline sm:block"
            >
              Follow Archana Collections
            </a>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {[catSilk, weddingEdit, catFestive, catNew].map((src, i) => (
            <Reveal key={i} delay={i * 80} variant="mask">
              <img
                src={src}
                alt="Archana Collections editorial imagery"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-10 inline-block text-primary link-underline sm:hidden"
          >
            Follow Archana Collections
          </a>
        </Reveal>
      </section>
    </>
  );
}
