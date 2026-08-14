import { useEffect } from "react";
import { products } from "@/data/products.js";
import { Catalogue } from "@/components/Catalogue.jsx";
import { PageHero } from "@/components/PageHero.jsx";
import jewellery from "@/assets/jewellery-hero.jpg";

export default function GoldPlatedArticles() {
  useEffect(() => {
    document.title = "Gold-Plated Jewellery & Articles in Narsapur | Archana Collections";
  }, []);

  const items = products.filter((p) => p.kind === "article");
  return (
    <>
      <PageHero
        eyebrow="Gold-Plated Articles"
        title="Adornment, reimagined."
        intro="Traditional silhouettes interpreted through refined gold-plated craftsmanship — jhumkas, kadas, temple necklaces and everyday chains."
        image={jewellery}
        meta={`${items.length} pieces in this edit`}
      />
      <Catalogue items={items} />
    </>
  );
}
