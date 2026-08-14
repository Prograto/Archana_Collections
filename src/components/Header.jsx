import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, MessageCircle, Search, X } from "lucide-react";
import { site, whatsappLink } from "@/lib/site.js";
import { SearchOverlay } from "./SearchOverlay.jsx";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home", short: "Home" },
  { to: "/sarees", label: "Sarees", short: "Sarees" },
  { to: "/gold-plated-articles", label: "Gold-Plated Articles", short: "Gold-Plated" },
  { to: "/collections", label: "Collections", short: "Collections" },
  { to: "/new-arrivals", label: "New Arrivals", short: "New In" },
  { to: "/about", label: "About Us", short: "About" },
  { to: "/contact", label: "Contact", short: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-wine-deep text-[0.68rem] tracking-[0.2em] text-ivory/80 md:block">
        <div className="container-luxe flex h-9 items-center justify-between uppercase">
          <p>Visit Our Store · {site.city}, {site.state}</p>
          <a
            href={whatsappLink(`Hello ${site.name}, I'd like some help choosing a saree.`)}
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-colors duration-500 ${
          scrolled ? "border-border bg-background/95 backdrop-blur-md" : "border-transparent bg-background"
        }`}
      >
        <div className="container-luxe grid h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 md:h-20 xl:gap-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center transition-colors hover:text-primary xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="group justify-self-center flex items-center xl:justify-self-start"
          >
            <img
              src={logo}
              alt="Archana Collections"
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-12"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden min-w-0 justify-self-center xl:flex xl:items-center xl:gap-6 2xl:gap-9"
          >
            {nav.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`eyebrow link-underline whitespace-nowrap text-foreground transition-colors hover:text-primary${
                  location.pathname === item.to ? " [&::after]:scale-x-100 [&::after]:origin-left" : ""
                }`}
                {...(location.pathname === item.to ? { "data-active": "true" } : {})}
              >
                {item.short}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-0.5 justify-self-end sm:gap-1">
            <button
              type="button"
              onClick={() => setSearch(true)}
              aria-label="Search"
              className="grid h-11 w-11 place-items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="grid h-11 w-11 place-items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
            >
              <Heart className="h-[18px] w-[18px]" />
            </Link>
            <a
              href={whatsappLink(`Hello ${site.name}, I would like some assistance.`)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden h-11 w-11 place-items-center transition-all duration-300 hover:-translate-y-0.5 hover:text-primary sm:grid"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[80] bg-background lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="container-luxe flex h-full flex-col pt-6">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-10 flex flex-col gap-5">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="display-md"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-10">
              <div className="rule-gold" />
              <p className="mt-6 text-sm text-muted-foreground">{site.address}</p>
              <a
                href={whatsappLink(`Hello ${site.name}, I'd like some help.`)}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-4 inline-block text-primary link-underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </header>
  );
}
