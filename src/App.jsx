import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CaseRow from "./components/CaseRow";
import Capabilities from "./components/Capabilities";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FleetCaseNew from "./pages/FleetCaseNew";
import MogoCase from "./pages/MogoCase";
import ProductOSCase from "./pages/ProductOSCase";
import BankingNew from "./pages/BankingNew";
import UKTVCase from "./pages/UKTVCase";
import "./App.css";

const CASES = [
  {
    id: "01",
    title: "Mogo — Loan Application Journey Redesign",
    description: "9→6 steps. Completion 16.7% → 38.8%. Measurable, repeatable improvements.",
    context: "Eleving Group · Product Designer · 2025",
    impact: "Journey redesign + monitoring layer so decisions were data-driven.",
    year: "2025",
    visual: "ds",
    thumbnailSrc: "/eleving/mogo.png",
    bg: "#F6F6F4",
    slug: "mogo",
  },
  {
    id: "03",
    title: "Fleet Operations Platform",
    description: "23% faster data interpretation. 17% less manual reporting. Unified workflows, AI decision support.",
    context: "Mapon · Senior UX/UI Designer · 2023",
    impact: "Redesigned 18-year-old B2B platform with cross-platform design system.",
    year: "2023",
    visual: "fleet",
    thumbnailSrc: "/fleet/fleetapp.png",
    bg: "#F7F6F3",
    slug: "fleet",
  },
  {
    id: "04",
    title: "Banking Platform Efficiency",
    description: "16% faster tasks · 33% fewer clicks · 21% higher satisfaction.",
    context: "2021–2022 · Senior UX/UI Designer",
    impact: "Structural redesign: navigation, compliance flows, accessibility across web and tablet.",
    year: "2021–2022",
    visual: "banking",
    thumbnailSrc: "/db/card-bank.jpg",
    bg: "#F6F6F4",
    slug: "banking",
  },
  {
    id: "05",
    title: "Reimagining the UK's top TV app",
    description: "28M+ users. 9% ↑ engagement · 15% faster handoff · 7% ↑ accessible usage.",
    context: "2021–2022 · Senior UX/UI Designer",
    impact: "Cross-platform rebrand and accessibility overhaul.",
    year: "2020–2021",
    visual: "banking",
    thumbnailSrc: "/ukc4/card-uktv.png",
    bg: "#F6F6F4",
    slug: "uktv",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [page, setPage] = useState(() => (typeof window !== "undefined" ? window.location.hash.slice(1) : "") || "home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = () => setPage(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", handler);
    handler();
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  if (page === "mogo") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <MogoCase />
      </div>
    );
  }
  if (page === "eleving" || page === "product-os") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <ProductOSCase />
      </div>
    );
  }
  if (page === "fleet") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <FleetCaseNew />
      </div>
    );
  }
  if (page === "banking") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <BankingNew />
      </div>
    );
  }
  if (page === "uktv") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <UKTVCase />
      </div>
    );
  }

  return (
    <div className="app">
      <Nav
        scrolled={scrolled}
        hoveredNav={hoveredNav}
        setHoveredNav={setHoveredNav}
      />
      <Hero />

      <section id="work">
        {CASES.map((c, i) => (
          <CaseRow
            key={c.id}
            c={c}
            index={i}
            transitionDelay={i * 0.1}
          />
        ))}
      </section>

      <Capabilities />
      <CTA />
      <Footer />
    </div>
  );
}
