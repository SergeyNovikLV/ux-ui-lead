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
import "./App.css";

const CASES = [
  {
    id: "01",
    title: "Mogo — Loan Application Journey Redesign",
    description: "Loan application journey redesign for Eleving Group. Simplified flow and clearer decision points for measurable uplift.",
    context: "Eleving Group · Product Designer · 2025 – Present",
    bullets: [
      { numbers: "9 → 6", text: "steps", desc: "Reduced decision friction" },
      { numbers: "16.7% → 38.8%", text: "completion", desc: "More users finished" },
      { numbers: "", text: "Entry rate stable", desc: "Lift came mid-flow" },
    ],
    year: "2025 – Present",
    visual: "ds",
    thumbnailSrc: import.meta.env.BASE_URL + "eleving/mogo.png",
    bg: "#F6F6F4",
    slug: "mogo",
  },
  {
    id: "03",
    title: "Fleet Operations Platform",
    description: "Fleet operations platform for Mapon. Unified data views, reduced manual reporting, AI-backed decisions.",
    context: "Mapon · Senior UX/UI Designer · 2025",
    bullets: [
      { numbers: "23%", text: "faster", desc: "Data interpretation" },
      { numbers: "17%", text: "less", desc: "Manual reporting reduced" },
      { numbers: "", text: "AI decision support", desc: "Unified workflows" },
    ],
    year: "2025",
    visual: "fleet",
    thumbnailSrc: import.meta.env.BASE_URL + "fleet/fleetapp.png",
    bg: "#F7F6F3",
    slug: "fleet",
  },
  {
    id: "04",
    title: "Banking Platform Efficiency",
    description: "Banking platform UX overhaul. Faster workflows and fewer clicks per task, with measurable satisfaction gains.",
    context: "2021–2022 · Senior UX/UI Designer",
    bullets: [
      { numbers: "16%", text: "faster", desc: "Task completion time" },
      { numbers: "33%", text: "fewer clicks", desc: "Per task reduced" },
      { numbers: "21%", text: "higher", desc: "User satisfaction" },
    ],
    year: "2021–2022",
    visual: "banking",
    thumbnailSrc: import.meta.env.BASE_URL + "db/card-bank.jpg",
    bg: "#F6F6F4",
    slug: "banking",
  },
  {
    id: "05",
    title: "Reimagining the UK's top TV app",
    description: "Reimagined the UK's leading TV streaming app for millions of viewers. Post-release engagement gains and smoother design-to-dev handoff.",
    context: "2021–2022 · Senior UX/UI Designer",
    bullets: [
      { numbers: "28M+", text: "users", desc: "Scale of platform" },
      { numbers: "9%", text: "↑ engagement", desc: "Post-release lift" },
      { numbers: "15%", text: "faster handoff", desc: "Design to dev" },
    ],
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
    const CASE_HASHES = ['mogo', 'eleving', 'product-os', 'fleet', 'banking', 'ukmedia'];
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

  if (page === "mogo") {
    return (
      <div className="app">
        <ScrollToTop location={page} />
        <Nav scrolled={scrolled} hoveredNav={hoveredNav} setHoveredNav={setHoveredNav} />
        <MogoCase />
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
