import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site.js";
import { Reveal } from "@/components/Reveal.jsx";
import storeImg from "@/assets/store.jpg";

export default function Store() {
  useEffect(() => {
    document.title = "Our Narsapur Store — Archana Collections";
  }, []);

  return (
    <div className="pb-28">
      <section className="container-luxe pt-16 md:pt-24">
        <Reveal>
          <p className="eyebrow">The store</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display-xl mt-6 max-w-[14ch]">See it in person.</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Photographs only carry a saree so far. In {site.city}, you can hold the fabric, see the border in
            daylight and take your time. We keep the full collection on the shelves.
          </p>
        </Reveal>
      </section>

      <section className="container-luxe mt-14">
        <Reveal variant="mask">
          <div className="gold-frame overflow-hidden">
            <img
              src={storeImg}
              alt="Interior of the Archana Collections boutique in Narsapur"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
            />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [MapPin, "Address", site.address],
            [Clock, "Hours", site.hours],
            [Phone, "Phone", site.phone],
          ].map(([Icon, k, v], i) => (
            <Reveal key={k} delay={i * 90} className="luxe-card p-6">
              <span className="icon-chip">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="eyebrow mt-4">{k}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="eyebrow inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-wine-deep"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
          </a>
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like to visit your store.`)}
            target="_blank"
            rel="noreferrer"
            className="eyebrow inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-4 transition-colors hover:border-accent"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
          </a>
          <Link
            to="/contact"
            className="eyebrow inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-4 transition-colors hover:border-accent"
          >
            Contact details
          </Link>
        </div>
      </section>
    </div>
  );
}
