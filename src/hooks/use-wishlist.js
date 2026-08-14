import { useCallback, useEffect, useState } from "react";

const KEY = "ac_wishlist";

function read() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function useWishlist() {
  const [slugs, setSlugs] = useState([]);

  useEffect(() => {
    setSlugs(read());
    const sync = () => setSlugs(read());
    window.addEventListener("ac:wishlist", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("ac:wishlist", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((slug) => {
    const current = read();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("ac:wishlist"));
  }, []);

  return { slugs, toggle, has: (slug) => slugs.includes(slug) };
}
