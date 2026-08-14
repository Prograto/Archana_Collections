import { Link } from "react-router-dom";
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site.js";

const shop = [
  { to: "/sarees", label: "Sarees" },
  { to: "/gold-plated-articles", label: "Gold-Plated Articles" },
  { to: "/new-arrivals", label: "New Arrivals" },
  { to: "/collections", label: "Collections" },
];

const about = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/store", label: "Our Store" },
];

export function Footer() {
  return (
    <footer className="bg-wine-deep text-ivory">
      <div className="container-luxe py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-xl tracking-[0.3em] uppercase">Archana Collections</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">{site.tagline}</p>
            <div className="textile-divider mt-8 max-w-[220px]" />
            <p className="mt-8 flex items-center gap-3 text-sm text-ivory/70">
              <Clock className="h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
              {site.hours}
            </p>
          </div>

          <nav aria-label="Shop">
            <p className="eyebrow text-gold-soft">Shop</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              {shop.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="eyebrow text-gold-soft">House</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              {about.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="link-underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="link-underline">
                  Terms
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold-soft">Visit &amp; Contact</p>
            <address className="mt-5 space-y-3 text-sm not-italic text-ivory/75">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                <span>{site.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                <a
                  href={whatsappLink(`Hello ${site.name}, I have an enquiry.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  WhatsApp
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-6 text-sm text-ivory/75">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/25 transition-colors duration-500 hover:border-gold-soft hover:text-gold-soft"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/25 transition-colors duration-500 hover:border-gold-soft hover:text-gold-soft"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/12 pt-7 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Archana Collections. All rights reserved.</p>
          <p>{site.city}, {site.state}, India</p>
        </div>
      </div>
    </footer>
  );
}
