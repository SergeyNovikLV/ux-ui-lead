import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import CaseRow from "./components/CaseRow";
import Capabilities from "./components/Capabilities";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FleetCaseNew from "./pages/FleetCaseNew";
import MogoCase from "./pages/MogoCase";
import ProductOSCase from "./pages/ProductOSCase";
import BankingNew from "./pages/BankingNew";
import UKMediaCase from "./pages/UKMediaCase";
import AIWorkflowCase from "./pages/AIWorkflowCase";
import DesignSystemsCase from "./pages/DesignSystemsCase";
import AboutCase from "./pages/AboutCase";
import "./App.css";

const CASES = [
  {
    id: "01",
    title: "Mogo — Loan application flow",
    description:
      "Reducing friction in a fintech loan application flow with clearer progression, fewer decision points, and stronger completion.",
    metrics: [
      { value: "9 → 6", text: "steps reduced" },
      { value: "16.7% → 38.8%", text: "completion rate" },
    ],
    context: "Eleving Group · Product Designer · 2025–Present",
    year: "2025 – Present",
    visual: "ds",
    thumbnailSrc: import.meta.env.BASE_URL + "eleving/mogoscreen2.png",
    bg: "#F6F6F4",
    slug: "mogo",
  },
  {
    id: "02",
    title: "DS2, AI workflow & MyPortal MVP",
    description:
      "One multi-brand DS2, Figma ↔ Storybook alignment, an AI-assisted design workflow, and a clickable MyPortal 2.0 MVP.",
    metrics: [
      { value: "", text: "One DS2 across three brands" },
      { value: "", text: "From brief to working prototype" },
    ],
    context: "Eleving Group · Design operations · DS2 · AI · 2025",
    year: "2025",
    visual: "workflow",
    thumbnailVideoSrc: import.meta.env.BASE_URL + "ai-case/myportal20.mp4",
    bg: "#F6F6F4",
    slug: "ai-workflow",
  },
  {
    id: "03",
    title: "Design Systems at scale",
    description:
      "Multi-brand design system operations: semantic tokens, shared foundations, governance, and design-to-development reliability across fintech products.",
    metrics: [
      { value: "", text: "Shared foundations + semantic tokens" },
      { value: "", text: "Theme-driven multi-brand delivery" },
    ],
    context: "Eleving Group · Design systems · Operations · 2024–2025",
    year: "2024–2025",
    visual: "ds",
    thumbnailVideoSrc: import.meta.env.BASE_URL + "ai-case/ds2.mp4",
    bg: "#F6F6F4",
    slug: "design-systems",
  },
  {
    id: "04",
    title: "Fleet Operations Platform",
    description:
      "Unified operational fleet platform focused on faster data interpretation, clearer decisions, and AI-supported operational evaluation.",
    metrics: [
      { value: "23%", text: "faster data interpretation" },
      { value: "17%", text: "less manual reporting" },
    ],
    context: "Mapon · Senior UX/UI Designer · 2025",
    year: "2025",
    visual: "fleet",
    thumbnailSrc: import.meta.env.BASE_URL + "fleet/fleetapp.png",
    bg: "#F7F6F3",
    slug: "fleet",
  },
  {
    id: "05",
    title: "Banking platform efficiency",
    description:
      "Enterprise banking workflow redesign focused on reducing operational friction, improving compliance clarity, and making internal tasks more predictable.",
    metrics: [
      { value: "16%", text: "faster task completion" },
      { value: "33%", text: "fewer operational clicks" },
    ],
    context: "Deutsche Bank · Senior UX/UI Designer · 2021–2022",
    year: "2021–2022",
    visual: "banking",
    thumbnailSrc: import.meta.env.BASE_URL + "db/card-bank.jpg",
    bg: "#F6F6F4",
    slug: "banking",
  },
  {
    id: "06",
    title: "Reimagining the UK’s top TV app",
    description:
      "High-scale accessibility and cross-platform redesign for one of the UK’s largest streaming platforms.",
    metrics: [
      { value: "9%", text: "increase in engagement" },
      { value: "15%", text: "faster design-to-development handoff" },
    ],
    context: "Channel 4 / UKTV · Senior UX/UI Designer · 2021–2022",
    year: "2021–2022",
    visual: "banking",
    thumbnailSrc: import.meta.env.BASE_URL + "ukc4/card-uktv.png",
    bg: "#F6F6F4",
    slug: "ukmedia",
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
    const CASE_HASHES = ['mogo', 'eleving', 'product-os', 'fleet', 'banking', 'ukmedia', 'ai-workflow', 'design-systems', 'about'];
    const handler = () => {
      const hash = window.location.hash.slice(1) || "home";
      if (CASE_HASHES.includes(hash)) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
      setPage(hash);
    };
    window.addEventListener("hashchange", handler);
    handler();
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  if (page === "about") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <AboutCase />
      </div>
    );
  }
  if (page === "mogo") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <MogoCase />
      </div>
    );
  }
  if (page === "ai-workflow") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <AIWorkflowCase />
      </div>
    );
  }
  if (page === "design-systems") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <DesignSystemsCase />
      </div>
    );
  }
  if (page === "eleving" || page === "product-os") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <ProductOSCase />
      </div>
    );
  }
  if (page === "fleet") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <FleetCaseNew />
      </div>
    );
  }
  if (page === "banking") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <BankingNew />
      </div>
    );
  }
  if (page === "ukmedia") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <UKMediaCase />
      </div>
    );
  }

  return (
    <div className="app">
      <ScrollToTop location={page} />
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
