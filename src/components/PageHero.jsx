import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

export function PageHero({ eyebrow, title, intro, image, meta }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-linear-to-b from-cream to-transparent"
      />
      <div className="container-luxe relative pt-12 pb-16 md:pt-16 md:pb-24">
        <Reveal>
          <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-2 text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-foreground">{eyebrow}</span>
          </nav>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal delay={70}>
              <h1 className="display-lg max-w-[13ch]">{title}</h1>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-7 h-px w-16 bg-accent" />
              <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">{intro}</p>
            </Reveal>
            {meta ? (
              <Reveal delay={210}>
                <p className="eyebrow mt-7 text-primary">{meta}</p>
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <Reveal variant="mask" delay={140}>
              <div className="gold-frame overflow-hidden">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ) : null}
        </div>

        <div className="textile-divider mt-14" />
      </div>
    </section>
  );
}
