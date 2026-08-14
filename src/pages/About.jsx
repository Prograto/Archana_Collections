import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Gem, HeartHandshake, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site.js";
import { Reveal, GoldRule } from "@/components/Reveal.jsx";
import storeImg from "@/assets/store.jpg";
import catSarees from "@/assets/cat-sarees.jpg";

export default function About() {
  useEffect(() => {
    document.title = "About Archana Collections — Saree Boutique in Narsapur";
  }, []);

  return (
    <div className="pb-28">
      <section className="container-luxe pt-16 md:pt-24">
        <Reveal>
          <p className="eyebrow">About the house</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="display-xl mt-6 max-w-[15ch]">Tradition, curated with a modern eye.</h1>
        </Reveal>
        <GoldRule className="mt-12 max-w-[320px]" />
      </section>

      <section className="container-luxe mt-16 grid gap-12 md:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal variant="mask">
          <img
            src={catSarees}
            alt="Folded silk sarees with gold zari borders"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <div className="space-y-6 text-[0.95rem] leading-relaxed text-muted-foreground lg:pt-10">
          <Reveal>
            <p className="font-display text-xl leading-snug text-foreground">
              Archana Collections is a saree and adornment boutique in {site.city}, {site.state}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              The shelves are built around one idea: a saree should be chosen in person, with someone who
              knows how the fabric behaves. We keep silk, tissue, organza and handloom side by side so a
              customer can feel the difference in weight and fall before deciding.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Alongside the drapes sits a considered selection of gold-plated articles — jhumkas, kadas and
              temple necklaces in classical silhouettes, finished so they sit well against woven zari.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              We serve weddings, receptions, festivals, poojas and ordinary days that deserve something
              good. What we cannot promise online, we make up for in the store: time, honesty about a piece,
              and help choosing.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <Link to="/contact" className="eyebrow inline-block text-primary link-underline">
              Plan a visit
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe mt-24 md:mt-32">
        <div className="textile-divider mb-14" />
        <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {[
            ["Narsapur", "Where we are"],
            ["12+", "Curated collections"],
            ["7 days", "Open every week"],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 90}>
              <dt className="display-lg text-primary">{k}</dt>
              <dd className="eyebrow mt-3">{v}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="mt-24 bg-wine-deep text-ivory md:mt-32">
        <div className="container-luxe grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal variant="mask">
            <div className="gold-frame overflow-hidden">
              <img
                src={storeImg}
                alt="Inside the Archana Collections store in Narsapur"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-gold-soft">Our approach</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-lg mt-5">What we hold ourselves to.</h2>
            </Reveal>
            <dl className="mt-10 divide-y divide-ivory/12 border-y border-ivory/12">
              {[
                [Gem, "Curated, not stocked", "Each piece is chosen for fabric, finish and detail — not simply to fill a shelf."],
                [HeartHandshake, "Personal assistance", "Tell us the occasion and we will narrow the choice down with you."],
                [ShieldCheck, "Honest description", "We describe what a piece is. No invented claims, no inflated language."],
              ].map(([Icon, k, v], i) => (
                <Reveal
                  key={k}
                  delay={i * 90}
                  className="grid gap-2 py-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"
                >
                  <dt className="flex items-center gap-3 font-display text-lg">
                    <Icon className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                    {k}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ivory/70">{v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
