import { useEffect } from "react";
import { products } from "@/data/products.js";
import { Catalogue } from "@/components/Catalogue.jsx";
import { PageHero } from "@/components/PageHero.jsx";
import catSilk from "@/assets/cat-silk.jpg";

export default function Sarees() {
  useEffect(() => {
    document.title = "Sarees in Narsapur — Silk, Wedding & Designer | Archana Collections";
  }, []);

  const items = products.filter((p) => p.kind === "saree");
  return (
    <>
      <PageHero
        eyebrow="Sarees"
        title="Drapes for every kind of day."
        intro="Silk, tissue, organza and handloom — selected for fall, finish and the way a border reads in person. Every piece can be seen at our Narsapur store."
        image={catSilk}
        meta={`${items.length} pieces in this edit`}
      />
      <Catalogue items={items} />
    </>
  );
}
