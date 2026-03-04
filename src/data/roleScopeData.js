/**
 * Per-case Role & Scope data with Lucide icon mapping.
 * Each case: { year, role, platforms, intro, led, shaped, decided }
 * Each card: { title, desc, icon } — icon is Lucide component name string.
 */
import {
  Accessibility,
  ScanSearch,
  Blocks,
  Merge,
  Figma,
  ShieldCheck,
  Layers,
  Type,
  Library,
  Route,
  FileCheck2,
  BarChart3,
  ArrowLeftRight,
  ClipboardCheck,
  Users,
  Scissors,
  MousePointerClick,
  Target,
  Compass,
  ListChecks,
  Network,
  Cable,
  LayoutDashboard,
  BrainCircuit,
  Smartphone,
  Scale,
  Waypoints,
} from 'lucide-react';

const ICONS = {
  Accessibility,
  ScanSearch,
  Blocks,
  Merge,
  Figma,
  ShieldCheck,
  Layers,
  Type,
  Library,
  Route,
  FileCheck2,
  BarChart3,
  ArrowLeftRight,
  ClipboardCheck,
  Users,
  Scissors,
  MousePointerClick,
  Target,
  Compass,
  ListChecks,
  Network,
  Cable,
  LayoutDashboard,
  BrainCircuit,
  Smartphone,
  Scale,
  Waypoints,
};

export function getIcon(name) {
  return ICONS[name] || Blocks;
}

/** UK TV Case — Media & Entertainment */
export const ukMediaRoleScope = {
  year: '2021–2022',
  role: 'Senior Product Designer',
  platforms: 'iOS Native · Android Native',
  intro: 'I led cross-platform rebrand and accessibility overhaul — unifying UX, shaping tooling migration, and deciding release standards.',
  led: [
    { title: 'Accessibility implementation', desc: 'Text resizing, VoiceOver improvements, WCAG patterns.', icon: 'Accessibility' },
    { title: 'UI audit & quality gate', desc: '40+ inconsistencies, design QA, release validation.', icon: 'ScanSearch' },
    { title: 'Design system foundations', desc: 'Tokens, components, parity structure rebuild.', icon: 'Blocks' },
  ],
  shaped: [
    { title: 'Platform unification', desc: 'HIG + Material mapping, parity rules.', icon: 'Merge' },
    { title: 'Figma migration & library', desc: 'Sketch→Figma roadmap, component governance.', icon: 'Figma' },
    { title: 'Accessibility rollout', desc: 'Compliance targets and sequencing alignment.', icon: 'ShieldCheck' },
  ],
  decided: [
    { title: 'Unified design language', desc: 'Parity across iOS and Android with native feel.', icon: 'Layers' },
    { title: 'Text scaling as requirement', desc: '200% scaling mandatory per release.', icon: 'Type' },
    { title: 'Figma as source of truth', desc: 'Shared components; accessibility as gate.', icon: 'Library' },
  ],
};

/** Mogo / Eleving Funnel Case — Loan application */
export const mogoRoleScope = {
  year: '2025 – Present',
  role: 'Product Designer',
  platforms: 'Web',
  intro: 'I led flow redesign and validation — shaping scope with PO and Engineering, and deciding what to cut vs keep per step.',
  led: [
    { title: 'Flow architecture & step intent', desc: 'Flow structure and intent per step.', icon: 'Route' },
    { title: 'UX specs & edge cases', desc: 'States, acceptance criteria, edge cases.', icon: 'FileCheck2' },
    { title: 'Measurement baseline & validation', desc: 'Pre/post release measurement and validation.', icon: 'BarChart3' },
  ],
  shaped: [
    { title: 'Scope sequencing', desc: 'With PO and Engineering across delivery.', icon: 'ArrowLeftRight' },
    { title: 'Release quality bar', desc: 'Definition of done and handoff standards.', icon: 'ClipboardCheck' },
    { title: 'Stakeholder alignment', desc: 'Decision-ready updates and scope clarity.', icon: 'Users' },
  ],
  decided: [
    { title: 'Cut vs keep per step', desc: 'What to remove vs retain at each step.', icon: 'Scissors' },
    { title: 'CTA hierarchy & disclosure', desc: 'Progressive disclosure and primary action rules.', icon: 'MousePointerClick' },
    { title: 'Success checkpoints', desc: 'Where and how to measure success.', icon: 'Target' },
  ],
};

/** Fleet Case — B2B Fleet ops + AI */
export const fleetRoleScope = {
  year: '2025',
  role: 'Senior UX/UI Designer',
  platforms: 'Web · iOS · Android',
  intro: 'I led end-to-end design across 6 modules — from discovery to delivery, shaping scope and alignment with product and engineering.',
  led: [
    { title: 'End-to-end design delivery', desc: 'Discovery to delivery for core workflows.', icon: 'Compass' },
    { title: 'Design system foundations', desc: 'Tokens, components, usage rules across web and mobile.', icon: 'Blocks' },
    { title: 'Design QA & handoff', desc: 'States, edge cases, acceptance criteria.', icon: 'ShieldCheck' },
  ],
  shaped: [
    { title: 'Scope prioritisation', desc: 'With product owners across delivery streams.', icon: 'ListChecks' },
    { title: 'IA across core modules', desc: 'Navigation and hierarchy for 6 modules.', icon: 'Network' },
    { title: 'Figma ↔ Storybook alignment', desc: 'With engineering for single source of truth.', icon: 'Cable' },
  ],
  decided: [
    { title: 'Dashboard over tables', desc: 'Signals first, details on demand.', icon: 'LayoutDashboard' },
    { title: 'AI as decision support', desc: 'No black-box automation; explainability built in.', icon: 'BrainCircuit' },
    { title: 'Mobile-first parity', desc: 'Same logic across web and mobile surfaces.', icon: 'Smartphone' },
  ],
};

/** Banking Case — Deutsche Bank internal platform */
export const bankingRoleScope = {
  year: '2021–2022',
  role: 'Senior Product Designer',
  platforms: 'Web · Tablet',
  intro: 'I led structural redesign across navigation, compliance flows, and accessibility — shaping scope and alignment with stakeholders.',
  led: [
    { title: 'IA rebuild & navigation model', desc: 'Information architecture for core modules, depth and entry points.', icon: 'Network' },
    { title: 'UX specs & edge cases', desc: 'Compliance flow mapping, steps, branches, required evidence.', icon: 'FileCheck2' },
    { title: 'Accessibility remediation plan', desc: 'Light/dark, focus states, keyboard behavior across surfaces.', icon: 'Accessibility' },
  ],
  shaped: [
    { title: 'Workflow prioritisation', desc: 'Top workflows with PM/BA based on frequency and support load.', icon: 'ListChecks' },
    { title: 'Compliance clarity alignment', desc: 'Stakeholder alignment on minimum acceptable clarity per step.', icon: 'Scale' },
    { title: 'Component & token rollout', desc: 'Updates to prevent cross-surface inconsistencies during rollout.', icon: 'Blocks' },
  ],
  decided: [
    { title: 'Task-path navigation model', desc: 'Structure follows workflows, not feature taxonomy.', icon: 'Route' },
    { title: 'Compliance as guided steps', desc: 'Reduce backtracking, make "next" explicit at each step.', icon: 'Waypoints' },
    { title: 'Accessibility as release gate', desc: 'Parity in light/dark and keyboard-first behavior mandatory.', icon: 'ShieldCheck' },
  ],
};

/** Eleving Case — Product Design OS (not in spec; using relevant icons) */
export const elevingRoleScope = {
  year: '2025 – Present',
  role: 'Lead Product Designer',
  platforms: 'Mogo · Primero · MyMogo',
  intro: 'I established the product design operating system — tokens, QA process, and governance across 3 brands.',
  led: [
    { title: 'Token architecture & system', desc: 'Token rebuild, typography, component foundations.', icon: 'Blocks' },
    { title: 'Design QA process', desc: 'From scratch; states, acceptance criteria.', icon: 'FileCheck2' },
    { title: 'Figma architecture & governance', desc: 'File structure, library contribution.', icon: 'Figma' },
  ],
  shaped: [
    { title: 'Engineering adoption', desc: 'Token system adoption across teams.', icon: 'Cable' },
    { title: 'Figma ↔ Storybook alignment', desc: 'Single source of truth for tokens.', icon: 'Merge' },
    { title: 'Brand migration sequencing', desc: 'Roadmap and rollout alignment.', icon: 'ArrowLeftRight' },
  ],
  decided: [
    { title: 'Theme-based token layering', desc: 'Brand switching architecture.', icon: 'Layers' },
    { title: 'Design-ready standard', desc: 'Definition and QA gate.', icon: 'ShieldCheck' },
    { title: 'Extend vs reuse rules', desc: 'Component governance, AI boundaries.', icon: 'Library' },
  ],
};
