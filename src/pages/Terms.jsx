import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Use — Archana Collections";
  }, []);

  return (
    <article className="container-luxe max-w-2xl pt-16 pb-28 md:pt-24">
      <p className="eyebrow">Legal</p>
      <h1 className="display-lg mt-5">Terms of Use</h1>
      <div className="rule-gold mt-8 max-w-[160px]" />
      <div className="luxe-card mt-10 space-y-6 p-8 md:p-10 text-[0.95rem] leading-relaxed text-muted-foreground">
        <p>
          Product images are photographed as accurately as possible. Handloom and hand-finished pieces vary
          slightly in colour and weave; the piece in store is the final reference.
        </p>
        <p>
          Availability changes as pieces are sold in store. Please confirm on WhatsApp before travelling for a
          specific saree or article.
        </p>
        <p>
          Prices shown, where available, are indicative and may change. All content on this site belongs to
          Archana Collections.
        </p>
        <p className="text-xs">This page is a working draft and should be reviewed before publication.</p>
      </div>
    </article>
  );
}
