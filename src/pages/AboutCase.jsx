import './MogoCase.css';
import './AboutCase.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ZoomableImage from '../components/ZoomableImage';
import CaseCardTitleGroup from '../components/CaseCardTitleGroup';
import { getIcon } from '../data/roleScopeData';

const BASE = import.meta.env.BASE_URL;

const CARDS = [
  {
    title: 'Systems thinking',
    text: "I'm comfortable working with complex rules, dependencies, and operational constraints.",
  },
  {
    title: 'Calm under pressure',
    text: 'I can structure unclear problems without rushing into surface-level solutions.',
  },
  {
    title: 'Outcome-focused design',
    text: 'I care about making products clearer, safer, easier to use, and easier to deliver.',
  },
];

const APPROACH_CARDS = [
  {
    num: '01',
    title: 'Complex flows',
    desc: 'Decision-heavy fintech and operational journeys with multiple states, risks, and dependencies.',
    icon: 'Route',
  },
  {
    num: '02',
    title: 'AI-assisted delivery',
    desc: 'Structured AI workflows supporting framing, validation, prototyping, and delivery preparation.',
    icon: 'Bot',
  },
  {
    num: '03',
    title: 'Systems thinking',
    desc: 'Scalable UX foundations, reusable logic, and operational consistency across products.',
    icon: 'Network',
  },
  {
    num: '04',
    title: 'Analytics-informed UX',
    desc: 'Using GA4, Clarity, and behavioral signals to support product and UX decisions.',
    icon: 'LineChart',
  },
  {
    num: '05',
    title: 'Design systems',
    desc: 'Semantic tokens, scalable components, typography systems, and design/dev alignment.',
    icon: 'Library',
  },
  {
    num: '06',
    title: 'Engineering collaboration',
    desc: 'Implementation-aware workflows with QA thinking, edge cases, and delivery realism.',
    icon: 'Cable',
  },
];

function ApproachCard({ num, title, desc, icon }) {
  const IconComponent = getIcon(icon);
  return (
    <div className="role-scope__card">
      <span className="mogo-takeaways__num-digit">{num}</span>
      <div className="role-scope__card-icon-wrap">
        <IconComponent size={20} strokeWidth={2} className="role-scope__card-icon" aria-hidden />
      </div>
      <div className="role-scope__card-content">
        <div className="role-scope__card-title" data-case-card-title>
          {title}
        </div>
        <p className="role-scope__card-desc">{desc}</p>
      </div>
    </div>
  );
}

export default function AboutCase() {
  return (
    <article className="eleving mogo-case about">
      <section className="case__section eleving-hero about__hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">ABOUT</div>
              <h1 className="eleving-hero__title">From safety-critical systems to product design</h1>
              <p className="eleving-hero__subtitle">
                I&apos;m Sergejs Noviks — a Product Designer with 10+ years of design experience, focused on complex fintech, enterprise, and operational
                products.
              </p>
              <p className="eleving-hero__subtitle">
                Before design, I spent a decade working with safety-critical systems in public security and aviation. That background shaped how I work today:
                calmly, structurally, and with strong attention to real-world consequences.
              </p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          <div className="hero-split about__hero-media">
            <ZoomableImage
              src={`${BASE}ai-case/es.jpg`}
              alt="Sergejs Noviks, Product Designer"
              className="about__hero-img"
            />
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">01 — BACKGROUND</div>
          <h2 className="case__h2">Why this background matters</h2>
          <p className="case__body">
            My earlier career taught me to work inside systems where clarity, reliability, and pressure matter. Product design gave me a better way to use that
            mindset — turning complex workflows into tools people can understand, trust, and use confidently.
          </p>
          <div className="about__card-grid">
            {CARDS.map((c) => (
              <div key={c.title} className="about__card">
                <h3 className="about__card-title">{c.title}</h3>
                <p className="about__card-desc">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">02 — APPROACH</div>
          <h2 className="case__h2">How I work</h2>
          <p className="case__body">
            I work at the intersection of product strategy, operational UX, systems thinking, analytics, and AI-assisted delivery.
          </p>
          <p className="case__body">
            My role is not only designing interfaces, but helping teams turn fragmented requirements, behavioral signals, and business constraints into
            structured product direction and implementation-ready outcomes.
          </p>
          <p className="case__body">
            I focus on reducing ambiguity, improving delivery clarity, and creating scalable systems that support both product quality and operational
            consistency.
          </p>
          <CaseCardTitleGroup className="role-scope__row-cards about__approach-grid">
            {APPROACH_CARDS.map((card) => (
              <ApproachCard key={card.num} {...card} />
            ))}
          </CaseCardTitleGroup>
        </div>
      </section>

      <section className="case__section mogo-section about__personal">
        <div className="case__wrap">
          <div className="case__section-label">03 — OUTSIDE WORK</div>
          <h2 className="case__h2">Outside of work</h2>
          <p className="case__body">
            Running helps me reset, think clearly, and stay consistent. It also mirrors how I approach design: keep moving, reduce noise, and point yourself in the
            right direction even when the path is not fully clear.
          </p>
          <blockquote className="about__quote">
            <p>
              &ldquo;If you can&apos;t run, walk; if you can&apos;t walk, crawl; if you can&apos;t crawl, lie down and point yourself in the right direction.&rdquo;
            </p>
          </blockquote>
          <p className="case__body about__personal-note">
            I completed my first half marathon at the Riga Rimi Marathon and keep running as a way to recharge and stay grounded.
          </p>
        </div>
      </section>

      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link">
            <ArrowLeft size={16} strokeWidth={2} aria-hidden /> Back to Work
          </a>
          <a href="#contact" className="eleving-nav__link">
            Contact <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </nav>
    </article>
  );
}
