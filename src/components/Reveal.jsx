import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) setInView(true);
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    const t = window.setTimeout(check, 400);
    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({ children, className = "", delay = 0, as, variant = "fade" }) {
  const Tag = as ?? "div";
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      data-inview={inView ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${variant === "mask" ? "mask-reveal" : "reveal"} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function GoldRule({ className = "" }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-inview={inView ? "true" : "false"}
      className={`gold-draw ${className}`}
    />
  );
}
