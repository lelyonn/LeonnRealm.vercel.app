import {
  Bug,
  Clapperboard,
  Code2,
  Flag,
  Globe,
  Mic2,
  Music2,
  Shield,
  Terminal,
} from "lucide-react";
import pentestReportPdf from "@/imports/Pentest_Report_PTVulnapp_LeonardJonathanSaputra.pdf";
import honeypotPreview from "@/imports/GambarHoneyPot.png";
import awsCloudFoundationsJpg from "@/imports/certificates/cloudfoundations.jpg";
import ccnaIntroductionJpg from "@/imports/certificates/CCNA.jpg";
import databaseDesignJPG from "@/imports/certificates/database-design-english.jpg";
import itEssentialsJpg from "@/imports/certificates/ITessen.jpg";
import redHatJpg from "@/imports/certificates/redhat.jpg";
import researchParticipationPng from "@/imports/certificates/vr-research-participation.png";
import operatingSystemJpg from "@/imports/certificates/Sistemoperasi.jpg";
import type { Skill } from "../types";

export const techSkills: Skill[] = [
  {
    label: "Cyber Security",
    icon: Shield,
    role: "Security Analyst — in training",
    summary:
      "Mapping how systems fail so I can help them fail less. I focus on threat modeling, hardening web stacks, and writing readable incident notes.",
    highlights: [
      "Hands-on with OWASP Top 10 in lab + classroom settings",
      "Active CTF participant across web, forensics, and reversing categories",
      "Wrote a campus-wide phishing awareness workshop",
    ],
    subAreas: [
      { label: "Penetration Testing", icon: Terminal },
      { label: "Capture the Flag", icon: Flag },
      { label: "Bug Bounty", icon: Bug },
    ],
    tools: ["Burp Suite", "Wireshark", "Kali Linux",],
    links: [
      {
        label: "See my full project here",
        href: "/#/projects",
        note: "Project i create about cyber security",
      },
      {
        label: "Read my security-focused blog posts",
        href: "/#/blog",
        note: "CTF writeups, bug bounty reports, and lab notes",
      }
    ],
  },
  {
    label: "Full-Stack Dev",
    icon: Code2,
    role: "Full-Stack Engineer",
    summary:
      "I build small, considered web products end-to-end — from schema to pixel. Comfortable owning a feature from RFC to deploy.",
    highlights: [
      "TypeScript-first across React, Node, and Bun runtimes",
      "Comfortable shipping with Postgres, Redis, and SQLite",
      "Care a lot about loading states, empty states, and error states",
    ],
    tools: ["React", "Next.js", "Node.js", "Tailwind"],
  },
  {
    label: "Web Development",
    icon: Globe,
    role: "Frontend & Web Engineer",
    summary:
      "Marketing sites, internal tools, learning platforms. I enjoy the part where performance, accessibility, and taste have to agree.",
    highlights: [
      "Built sites with Astro, Next.js, and vanilla Vite + React",
      "Lighthouse-conscious — perf budgets aren't decoration",
      "Care about keyboard nav, focus states, and reduced motion",
    ],
    tools: ["Next.js", "Tailwind", "Cloudflare"],
  },
];

export const otherSkills: Skill[] = [
  {
    label: "Public Speaking",
    icon: Mic2,
    role: "Speaker, MC, and Community Communicator",
    summary:
      "I have experience speaking in front of diverse audiences through campus organization programs and church services. These experiences helped me build confidence in public communication, audience engagement, structured delivery, and clear message presentation.",
    highlights: [
      "Served as MC for several student association programs, including general meetings, department anniversary events, and first meetings for new committee members.",
      "Delivered sermons in church settings, focusing on clear message structure, audience connection, and confident public delivery.",
      "Experienced in guiding event flow, maintaining audience attention, and creating a professional atmosphere.",
      "Comfortable speaking in formal, semi-formal, and community-based environments.",
    ],
    tools: [
      "Public Speaking", "Event Hosting", "Audience Engagement",
      "Storytelling", "Message Structuring", "Leadership Communication",
    ],
  },
  {
    label: "Music Performance",
    icon: Music2,
    role: "Guitarist & Live Music Performer",
    summary:
      "Music has been part of how I build discipline, focus, and collaboration. I have experience performing as a guitarist in church services and campus events, especially in live music settings that require teamwork, timing, and stage awareness.",
    highlights: [
      "Served as a guitarist in church worship services.",
      "Performed as a guitarist for campus department events with live music sessions.",
      "Experienced in playing within a team, following song arrangements, and maintaining performance flow.",
      "Able to adapt to different event atmospheres, from worship settings to campus entertainment programs.",
      "Have basic skills in piano and cajon as supporting instruments.",
    ],
    tools: [
      "Acoustic Guitar", "Electric Guitar", "Basic Piano", "Basic Cajon",
      "Live Performance", "Team Collaboration", "Worship Music", "Event Music",
    ],
  },
];

export const projectCategories = ["Cyber Security", "Web Development"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

type Project = {
  n: string;
  title: string;
  category: ProjectCategory;
  blurb: string;
  tags: string[];
  year: string;
  image: string;
  credit: string;
  github: string | null;
  live: string | null;
};

export const projectCategoryColors: Record<ProjectCategory, string> = {
  "Cyber Security": "#7692ff",
  "Web Development": "#abd2fa",
};

export const projects: Project[] = [
  {
    n: "01",
    title: "Deception Honeypot Intelligence Platform",
    category: "Cyber Security",
    blurb:
      "A lightweight Node.js honeypot that captures suspicious login attempts, classifies attacker behavior, builds actor fingerprints, groups attack sessions, enriches IP metadata, and generates incident reports.",
    tags: ["Cybersecurity", "Honeypot", "Threat Intelligence", "Deception", "Incident Response"],
    year: "2026",
    image: honeypotPreview,
    credit: "Project preview",
    github: "https://github.com/lelyonn/fake-admin-login-honeypot",
    live: null,
  },
  {
    n: "02",
    title: "Church Profile Website",
    category: "Web Development",
    blurb:
      "A church profile website built to present church identity, worship information, ministries, and contact access through a clean responsive public-facing web experience.",
    tags: ["Web Development", "Church Profile", "Responsive Design", "Vercel", "Frontend"],
    year: "2026",
    image: "https://opengraph.githubassets.com/1/lelyonn/ChurchWebsite",
    credit: "GitHub repository preview",
    github: "https://github.com/lelyonn/ChurchWebsite",
    live: "https://church-website-snowy-zeta.vercel.app/",
  },
];

export const footerLinks = [
  { label: "about me", href: "#/about" },
  { label: "projects", href: "#/projects" },
  { label: "blog", href: "#/blog" },
  { label: "contact me", href: "mailto:leonardjhth091@gmail.com" },
];

export const competitions = [
  {
    index: "01",
    name: "Cyber Academy — Penetration Testing Challenge",
    batch: "Batch 2",
    year: "2026",
    category: "Penetration Testing",
    organizer: "Cyber Academy",
    description:
      "Completed a structured penetration testing challenge against a target web application (PT Vulnapp). Delivered a full professional report covering vulnerability discovery, exploitation, risk rating, and remediation recommendations.",
    highlights: [
      "Performed black-box web application penetration test on PT Vulnapp",
      "Identified and documented vulnerabilities with CVSS scoring",
      "Produced a professional pentest report with proof-of-concept and mitigations",
    ],
    tags: ["Web AppSec", "Pentest", "Report Writing"],
    proofHref: pentestReportPdf,
  },
];

export type Certificate = {
  index: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  tags: string[];
  credential: string;
  mediaHref: string;
  mediaType: "pdf" | "image";
};

export const certificates: Certificate[] = [
  {
    index: "01",
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2026",
    description:
      "Completed AWS Academy Cloud Foundations training, covering cloud concepts, AWS core services, security, architecture, pricing, and support fundamentals.",
    tags: ["Cloud Computing", "AWS", "Foundations"],
    credential: "Graduate training badge",
    mediaHref: awsCloudFoundationsJpg,
    mediaType: "image",
  },
  {
    index: "02",
    title: "Database Design",
    issuer: "Oracle Academy",
    year: "2026",
    description:
      "Earned an English award of completion for Database Design, strengthening relational modeling, entity relationships, normalization, and schema planning.",
    tags: ["Database", "Data Modeling", "SQL"],
    credential: "Award of completion",
    mediaHref: databaseDesignJPG,
    mediaType: "image",
  },
  {
    index: "03",
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description:
      "Completed foundational IT training covering computer hardware, operating systems, networking basics, security, troubleshooting, and technical support workflows.",
    tags: ["IT Support", "Hardware", "Troubleshooting"],
    credential: "Course certificate",
    mediaHref: itEssentialsJpg,
    mediaType: "image",
  },
  {
    index: "04",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2026",
    description:
      "Completed Cisco's introductory networking course covering network models, Ethernet, IP addressing, switching, routing basics, and connectivity troubleshooting.",
    tags: ["Networking", "Cisco", "CCNA"],
    credential: "Course certificate",
    mediaHref: ccnaIntroductionJpg,
    mediaType: "image",
  },
  {
    index: "05",
    title: "Virtual Reality Multi User Research",
    issuer: "Universitas Sebelas Maret",
    year: "2026",
    description:
      "Recognized as a research participant for a study analyzing user comfort in multi-user virtual reality classes using EEG signals and deep learning algorithms.",
    tags: ["Research", "Virtual Reality", "EEG"],
    credential: "Certificate of participation",
    mediaHref: researchParticipationPng,
    mediaType: "image",
  },
  {
    index: "06",
    title: "Red Hat System Administration",
    issuer: "Red Hat Academy",
    year: "2025",
    description:
      "Completed Linux system administration training focused on command-line workflows, users and permissions, file systems, services, and essential server operations.",
    tags: ["Linux", "Red Hat", "System Administration"],
    credential: "Course certificate",
    mediaHref: redHatJpg,
    mediaType: "image",
  },
  {
    index: "07",
    title: "Operation System Basic Course",
    issuer: "Universitas Sebelas Maret",
    year: "2025",
    description:
      "Completed operating systems coursework covering process management, memory, file systems, scheduling, and core concepts behind modern computer systems.",
    tags: ["Operating Systems", "Computer Science", "Systems"],
    credential: "Course certificate",
    mediaHref: operatingSystemJpg,
    mediaType: "image",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "CTF Writeup" | "Bug Bounty" | "Research" | "General";
  excerpt: string;
  readingTime: string;
  tags: string[];
  content?: string;
  proofHref?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cyber-academy-penetration-testing-challenge",
    title: "Web Vulnerability Writeup: Cyber Academy's PT Vulnapp Challenge",
    date: "17-04-2026",
    category: "CTF Writeup",
    excerpt:
      "A penetration testing writeup based on Cyber Academy's PT Vulnapp Challenge, covering vulnerability discovery, exploitation, risk rating, and remediation.",
    readingTime: "4 min",
    tags: ["CTF", "Web", "Pentest"],
    content: `
Web Vulnerability Writeup: Cyber Academy's PT Vulnapp Challenge


This writeup summarizes my penetration testing report for PT Vulnapp, a vulnerable job portal web application used in the Cyber Academy Penetration Testing Challenge.
The assessment was conducted on 17 April 2026 - 18 April 2026 using a grey-box testing approach. The main objective was to identify, validate, and document security weaknesses that could affect the confidentiality, integrity, and availability of the application.

Scope

The assessment focused on the main web application and several critical security areas, including:

- Authentication bypass
- Account takeover risk
- SQL Injection
- Sensitive data exposure
- File upload security
- Access control
- Session management
- Security header configuration
- Information disclosure

Methodology

The test followed a structured penetration testing workflow:

1. Reconnaissance and application mapping
2. Parameter analysis and request interception
3. Fuzzing and exploitation
4. Risk assessment using CVSS
5. Documentation and remediation planning


Vulnerability List

| No | Finding | Severity | Status |
| 1 | SQL Injection - Login Bypass | Critical | Open |
| 2 | SQL Injection - Error Based | Critical | Open |
| 3 | Time-Based Blind SQL Injection - Search Job | Critical | Open |
| 4 | Sensitive Data Exposure | Critical | Open |
| 5 | Unrestricted File Upload - Stored Arbitrary File | High | Open |
| 6 | Insecure Direct Object Reference - Job Enumeration | High | Open |
| 7 | Insecure Session Termination | Medium | Open |
| 8 | Weak Password Policy | Medium | Open |
| 9 | Missing Security Headers | Medium | Open |
| 10 | Information Disclosure - Nginx Version | Low | Open |


Through this challenge, I practiced:

- Web application penetration testing
- SQL Injection testing
- Access control analysis
- Session security review
- File upload security testing
- Security header review
- CVSS-based risk assessment
- Technical report writing

Final Note
This is a public summary of the assessment. The full technical report is available in PDF format through the attached writeup link.
`,
    proofHref: pentestReportPdf,
  },
];

export const categoryColors: Record<BlogPost["category"], string> = {
  "CTF Writeup": "#7692ff",
  "Bug Bounty": "#7fa67a",
  "Research": "#8a9fc8",
  "General": "#91a6cc",
};
