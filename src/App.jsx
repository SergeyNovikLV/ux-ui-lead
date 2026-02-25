import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import CaseRow from "./components/CaseRow";
import Capabilities from "./components/Capabilities";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FleetCase from "./pages/FleetCase";
import ElevingCase from "./pages/ElevingCase";
import BankingCase from "./pages/BankingCase";
import UKTVCase from "./pages/UKTVCase";
import "./App.css";

const CASES = [
  {
    id: "01",
    title: "Eleving — Product Design Operating System",
    description: "Product foundation for 3 fintech brands: shared design language, QA process, and governance so Mogo, Primero, and MyMogo ship consistently.",
    context: "Eleving Group · Senior Product Designer · 2025",
    impact: "Eliminated brand drift across brands. Delivery cycle shortened via standardized handoff and single source of truth.",
    year: "2025",
    visual: "ds",
    bg: "#F6F6F4",
    slug: "eleving",
  },
  {
    id: "02",
    title: "Fleet Operations Platform",
    description: "Redesigned an 18-year-old B2B platform — unified workflows, AI decision support, and cross-platform design system.",
    context: "Mapon · Senior Product Designer · 2023",
    impact: "23% faster data interpretation. 17% reduction in manual reporting after launch.",
    year: "2023",
    visual: "fleet",
    bg: "#F7F6F3",
    slug: "fleet",
  },
  {
    id: "03",
    title: "Banking Platform Efficiency",
    description: "Structural UX redesign for internal banking workflows (navigation + compliance + accessibility).",
    tags: "FINTECH · ENTERPRISE · ACCESSIBILITY",
    context: "2021–2022 · Senior UX/UI Designer · Desktop / Web / Tablet",
    impact: "16% faster tasks · 33% fewer clicks · 21% higher satisfaction",
    year: "2021–2022",
    visual: "banking",
    bg: "#F6F6F4",
    slug: "banking",
  },
  {
    id: "04",
    title: "Reimagining the UK's top TV app",
    description: "Cross-platform rebrand and accessibility overhaul for 28M+ users.",
    tags: "MEDIA · MOBILE · ACCESSIBILITY · DESIGN SYSTEM",
    context: "2020–2022 · Senior Product Designer · iOS / Android",
    impact: "9% ↑ engagement · 15% faster handoff · 7% ↑ accessible usage",
    year: "2020–2022",
    visual: "banking",
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

  if (page === "eleving") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <ElevingCase />
      </div>
    );
  }
  if (page === "fleet") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <FleetCase />
      </div>
    );
  }
  if (page === "banking") {
    return (
      <div className="app">
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <BankingCase />
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
      <ClientLogos />

      <section id="work">
        <div className="work-header">
          <div>
            <p className="work-header__eyebrow">Selected Work</p>
            <h2 className="work-header__title">
              Operational systems &amp; AI-driven platforms
            </h2>
            <p className="work-header__sub">2021 — Present</p>
          </div>
        </div>

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
