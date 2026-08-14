import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";
import { enquiryMessage, whatsappLink } from "@/lib/site.js";
import { useWishlist } from "@/hooks/use-wishlist.js";

const ratios = {
  tall: "aspect-[3/4.4]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function ProductCard({ product, ratio = "portrait", priority }) {
  const { has, toggle } = useWishlist();
  const saved = has(product.slug);

  return (
    <article className="group relative">
      <div className={`relative overflow-hidden bg-cream ${ratios[ratio]}`}>
        <Link
          to={`/product/${product.slug}`}
          className="block h-full w-full"
          aria-label={product.name}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
          />
          {product.images[1] ? (
            <img
              src={product.images[1]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
            />
          ) : null}
        </Link>

        <button
          type="button"
          onClick={() => toggle(product.slug)}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name}`}
          aria-pressed={saved}
          className="absolute right-3 top-3 grid h-11 w-11 place-items-center bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:text-primary"
        >
          <Heart
            className={`h-4 w-4 transition-transform duration-300 ${saved ? "scale-110 fill-primary text-primary" : ""}`}
          />
        </button>

        {product.newArrival ? (
          <span className="eyebrow absolute left-3 top-4 bg-background/85 px-2 py-1 text-foreground">
            New
          </span>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            to={`/product/${product.slug}`}
            className="eyebrow pointer-events-auto block bg-background/92 py-3 text-center text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate font-sans text-[0.9rem] font-medium tracking-tight">
            <Link to={`/product/${product.slug}`} className="link-underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs tracking-wide text-muted-foreground">{product.category}</p>
        </div>
        <a
          href={whatsappLink(enquiryMessage(product.name, product.kind))}
          target="_blank"
          rel="noreferrer"
          className="eyebrow shrink-0 whitespace-nowrap text-primary transition-opacity hover:opacity-70"
        >
          {product.price ? (
            `₹${product.price.toLocaleString("en-IN")}`
          ) : (
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> Enquire
            </span>
          )}
        </a>
      </div>
    </article>
  );
}
