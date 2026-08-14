import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppFab } from "./components/WhatsAppFab.jsx";

import Home from "./pages/Home.jsx";
import Sarees from "./pages/Sarees.jsx";
import GoldPlatedArticles from "./pages/GoldPlatedArticles.jsx";
import Collections from "./pages/Collections.jsx";
import CollectionSlug from "./pages/CollectionSlug.jsx";
import NewArrivals from "./pages/NewArrivals.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Store from "./pages/Store.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";

function BrandLoader() {
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem("ac_loaded")) return;
    setDone(false);
    const t = window.setTimeout(() => {
      window.sessionStorage.setItem("ac_loaded", "1");
      setDone(true);
    }, 1150);
    return () => window.clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[120] grid place-items-center bg-ivory transition-opacity duration-500"
    >
      <div className="text-center">
        <p className="font-display text-sm tracking-[0.42em] uppercase md:text-base">
          Archana Collections
        </p>
        <div className="mx-auto mt-5 h-px w-[180px] origin-left animate-[loaderline_1.05s_cubic-bezier(0.16,1,0.3,1)_forwards] bg-accent" />
      </div>
      <style>{`@keyframes loaderline{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </div>
  );
}

function AnimatedOutlet({ children }) {
  const location = useLocation();
  return (
    <main
      key={location.pathname}
      className="animate-[pagein_0.6s_cubic-bezier(0.16,1,0.3,1)]"
    >
      {children}
      <style>{`@keyframes pagein{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <BrandLoader />
      <Header />
      <AnimatedOutlet key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sarees" element={<Sarees />} />
          <Route path="/gold-plated-articles" element={<GoldPlatedArticles />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<CollectionSlug />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatedOutlet>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
