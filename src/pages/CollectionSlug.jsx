import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { collections, products } from "@/data/products.js";
import { Catalogue } from "@/components/Catalogue.jsx";
import { PageHero } from "@/components/PageHero.jsx";

export default function CollectionSlug() {
  const { slug } = useParams();
  const collection = collections.find((c) => c.slug === slug);

  useEffect(() => {
    if (collection) {
      document.title = `${collection.name} — Archana Collections, Narsapur`;
    }
  }, [collection]);

  if (!collection) return <Navigate to="/collections" replace />;

  const items = products.filter(
    (p) => p.collection === collection.name || (collection.slug === "new-arrivals" && p.newArrival)
  );

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={collection.name}
        intro={collection.description}
        image={collection.cover}
        meta={`${items.length} ${items.length === 1 ? "piece" : "pieces"} in this collection`}
      />
      <Catalogue items={items} />
    </>
  );
}
