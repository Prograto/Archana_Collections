import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { products } from "@/data/products.js";
import { useWishlist } from "@/hooks/use-wishlist.js";
import { ProductCard } from "@/components/ProductCard.jsx";
import { Reveal } from "@/components/Reveal.jsx";

export default function Wishlist() {
  useEffect(() => {
    document.title = "Your Wishlist — Archana Collections";
  }, []);

  const { slugs } = useWishlist();
  const saved = products.filter((p) => slugs.includes(p.slug));

  return (
    <div className="container-luxe pt-14 pb-28 md:pt-20">
      <Reveal>
        <p className="eyebrow">Saved</p>
        <h1 className="display-lg mt-5">Your wishlist.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {saved.length > 0
            ? `${saved.length} ${saved.length === 1 ? "piece" : "pieces"} kept aside for you.`
            : "Tap the heart on any piece to keep it here."}
        </p>
      </Reveal>
      <div className="textile-divider mt-12" />

      {saved.length === 0 ? (
        <Reveal delay={90}>
          <div className="luxe-card mt-16 px-8 py-24 text-center">
            <span className="icon-chip mx-auto">
              <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
            </span>
            <p className="display-md mt-8">Your saved pieces will appear here.</p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Build a shortlist as you browse, then share it with us on WhatsApp or bring it to the store.
            </p>
            <Link to="/sarees" className="eyebrow mt-9 inline-block text-primary link-underline">
              Browse sarees
            </Link>
          </div>
        </Reveal>
      ) : (
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-3">
          {saved.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
