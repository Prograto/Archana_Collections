import { useEffect } from "react";
import { products } from "@/data/products.js";
import { Catalogue } from "@/components/Catalogue.jsx";
import { PageHero } from "@/components/PageHero.jsx";
import catNew from "@/assets/cat-new.jpg";

export default function NewArrivals() {
  useEffect(() => {
    document.title = "New Arrivals — Sarees & Jewellery | Archana Collections, Narsapur";
  }, []);

  const items = products.filter((p) => p.newArrival);
  return (
    <>
      <PageHero
        eyebrow="Just In"
        title="Newly arrived at the store."
        intro="Fresh additions to the shelves in Narsapur — added as they arrive, photographed as they are."
        image={catNew}
        meta={`${items.length} new pieces in store`}
      />
      <Catalogue items={items} />
    </>
  );
}
