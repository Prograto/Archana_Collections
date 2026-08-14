import { useEffect } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site.js";
import { Reveal } from "@/components/Reveal.jsx";
import storeImg from "@/assets/store.jpg";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact & Store Location — Archana Collections, Narsapur";
  }, []);

  return (
    <div className="pb-28">
      <section className="container-luxe pt-16 md:pt-24">
        <Reveal>
          <p className="eyebrow">Visit us</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display-xl mt-6 max-w-[13ch]">Visit Archana Collections.</h1>
        </Reveal>
      </section>

      <section className="container-luxe mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal variant="mask">
          <div className="gold-frame overflow-hidden">
            <img
              src={storeImg}
              alt="Archana Collections store interior, Narsapur"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              [MapPin, "Address", site.address],
              [Clock, "Hours", site.hours],
              [Phone, "Phone", site.phone],
              [Mail, "Email", site.email],
            ].map(([Icon, k, v], i) => (
              <Reveal as="li" key={k} delay={i * 80} className="luxe-card p-5">
                <span className="icon-chip">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="eyebrow mt-4">{k}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="eyebrow group inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-wine-deep"
            >
              <MapPin className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href={whatsappLink(`Hello ${site.name}, I'd like to plan a visit to your store.`)}
              target="_blank"
              rel="noreferrer"
              className="eyebrow inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-4 transition-colors hover:border-accent"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="eyebrow inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-4 transition-colors hover:border-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Contact details are placeholders until confirmed by the store and can be updated in one place.
          </p>
        </div>
      </section>

      <section className="container-luxe mt-20">
        <div className="textile-divider mb-10" />
        <div className="border border-border">
          <iframe
            title="Map showing Archana Collections in Narsapur, Andhra Pradesh"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full grayscale-[0.35] md:h-[420px]"
          />
        </div>
      </section>
    </div>
  );
}
