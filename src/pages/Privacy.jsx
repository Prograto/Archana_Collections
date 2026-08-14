import { useEffect } from "react";
import { site } from "@/lib/site.js";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — Archana Collections";
  }, []);

  return (
    <article className="container-luxe max-w-2xl pt-16 pb-28 md:pt-24">
      <p className="eyebrow">Legal</p>
      <h1 className="display-lg mt-5">Privacy Policy</h1>
      <div className="rule-gold mt-8 max-w-[160px]" />
      <div className="luxe-card mt-10 space-y-6 p-8 md:p-10 text-[0.95rem] leading-relaxed text-muted-foreground">
        <p>
          This website does not require an account and does not collect payment information. Pieces you save
          to your wishlist are stored only in your own browser.
        </p>
        <p>
          When you contact us through WhatsApp, phone or email, we receive the details you choose to send and
          use them solely to answer your enquiry about our collection.
        </p>
        <p>
          We do not sell or share your details with third parties. For any question about this policy, write
          to{" "}
          <a href={`mailto:${site.email}`} className="link-underline text-foreground">
            {site.email}
          </a>
          .
        </p>
        <p className="text-xs">This page is a working draft and should be reviewed before publication.</p>
      </div>
    </article>
  );
}
