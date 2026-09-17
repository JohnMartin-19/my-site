import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java(SpringBoot)", "Django", "Fast API", "PostgreSQL", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "Practices",
    items: ["System Design", "API Design", "Code Review", "Tech Leadership", "Agile"],
  },
];

const PROJECTS = [
  {
    title: "DEWCIS Archiver & LDAP System",
    description:
      "Linux file archiving system with REST API, real-time dashboard, and LDAP query integration. Packaged as a Debian release with Docker Compose environment.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "LDAP"],
    year: "2026",
    link: "https://github.com/JohnMartin-19/DEWCIS",
  },
  {
    title: "Linka Africa",
    description:
      "Transparent fundraising platform connecting donors directly to verified beneficiaries with real-time donation tracking and local mobile money integration (M-Pesa, Airtel).",
    tags: ["TypeScript", "React", "Django", "PostgreSQL", "AWS"],
    year: "2025",
    link: "https://github.com/JohnMartin-19/Linka-Africa",
  },
  {
    title: "Turnquest Life",
    description:
      "Microservice-based insurance management system mimicking enterprise core software. Features dynamic service discovery, localized authentication, policy handling, and claims routing.",
    tags: ["Java", "Spring Boot", "Spring Cloud Gateway", "Eureka"],
    year: "2026",
    link: "https://github.com/JohnMartin-19/turnquest-life",
  },
];

const EXPERIENCE = [
  {
    role: "Backend Software Engineer",
    company: "Caava Group",
    period: "2026 — Present",
    description:
      "Engineering enterprise REST APIs and microservices for the Financial Control Platform (v6) using Spring Boot. Built and maintained payment orchestration services across 5 African insurance markets. Contributed to a complete backend migration from monolith to microservices with zero customer-facing downtime.",
  },
  {
    role: "FullStack Engineer",
    company: "Dubu Huru Ltd",
    period: "2025 — 2026",
    description:
      "Led a team of 4 building a high-availability Fintech SaaS platform using Django, React, and Redis. Architected multi-currency payment workflows (M-Pesa, Stripe, PayPal) on AWS ECS Fargate, decoupled async tasks via Celery, and implemented automated GitHub Actions CI/CD pipelines.",
  },
  {
    role: "Software Engineer",
    company: "Jambo Pay",
    period: "2024 — 2025",
    description:
      "Developed a multi-tenant E-Revenue Management System serving 10 Kenyan counties across parking fees, land rates, business permits, unstructured revenue and e-wallets. Migrated legacy monolith modules to REST APIs cutting latency by 30%, implemented PostGIS geospatial tracking, and integrated USSD payment flows.",
  },
  {
    role: "Software Developer Intern",
    company: "Jambo Pay",
    period: "2023",
    description:
      "Developed backend Python/Django REST Framework projects assigned by executive engineering leadership, collaborating across teams to deliver functional prototypes and core feature assignments.",
  },
];

function Nav() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-light tracking-tight">
          JM<span style={{ color: "var(--primary)" }}>.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:john@mburunkonge.com"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2 border border-white/10 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080808] border-b border-white/5 px-6 pb-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-mono text-xs tracking-widest uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 max-w-6xl mx-auto relative">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-xs tracking-widest uppercase text-[var(--primary)] mb-6 animate-fade-up delay-100">
          Available for opportunities
        </p>

        <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] font-light leading-[0.92] tracking-tight text-balance animate-fade-up delay-200">
          John
          <br />
          <span className="italic">Mburu</span>
          <span style={{ color: "var(--primary)" }}>.</span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="font-display text-xl md:text-2xl font-light text-[var(--muted-foreground)] italic animate-fade-up delay-300 max-w-xs">
            IT Specialist<br />& Fullstack Engineer
          </p>

          <p className="font-light text-[var(--muted-foreground)] max-w-sm leading-relaxed animate-fade-up delay-400 text-sm md:text-base">
            I build systems that scale — from API design to distributed infrastructure.
            Based in Nairobi, working with teams across Africa and beyond.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 animate-fade-up delay-500">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-[var(--primary)] text-[var(--primary-foreground)] font-mono text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-white transition-colors duration-200"
          >
            View my work
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-white/10 font-mono text-xs tracking-widest uppercase px-6 py-3.5 hover:border-white/30 transition-colors duration-200 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            Get in touch
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-3 gap-8 md:w-2/3">
          {[
            { n: "3+", label: "Years building" },
            { n: "4M+", label: "Users served" },
            { n: "5", label: "Countries shipped" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-light" style={{ color: "var(--primary)" }}>
                {s.n}
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-[var(--muted-foreground)] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
        <div className="md:col-span-4">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--primary)] mb-4">
            001 / About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Built for<br /><span className="italic">scale.</span>
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6">
          <p className="text-[var(--muted-foreground)] leading-relaxed font-light">
            I'm a mid-level fullstack engineer with deep roots in African fintech and
            insuretech infrastructure. I've spent the last three years shipping
            software that real people depend on — payment systems, insurance systems, 
            event ticketing platforms — and building the teams that maintain them.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed font-light">
            My technical work spans the full stack: I'm equally at home designing
            database schemas, reviewing distributed systems architecture, or shipping a
            polished React interface. I believe good engineering is fundamentally about
            clarity — in code, in communication, and in product decisions.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed font-light">
            Outside of work I mentor developers through the Andela network and contribute
            to open-source projects focused on African developer tooling. I also love hiking.
          </p>

          {/* Skills grid */}
          <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
            {SKILLS.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-xs tracking-widest uppercase text-[var(--primary)] mb-3">
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--muted-foreground)] font-light flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--muted-foreground)] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-8">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--primary)] mb-3">
            002 / Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Selected<br /><span className="italic">projects</span>
          </h2>
        </div>
        <p className="hidden md:block font-mono text-xs text-[var(--muted-foreground)] tracking-widest uppercase">
          {PROJECTS.length} projects
        </p>
      </div>

      <div className="space-y-0">
        {PROJECTS.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            className="group block border-b border-white/5 py-10 hover:bg-white/[0.02] transition-colors duration-200 -mx-6 px-6"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-[var(--muted-foreground)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className={`font-display text-2xl md:text-3xl font-light transition-colors duration-200 ${hovered === i ? "text-[var(--primary)]" : ""}`}>
                  {project.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm text-[var(--muted-foreground)] font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 border border-white/8 text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-1 flex justify-end items-start">
                <div className={`transition-all duration-200 ${hovered === i ? "translate-x-1 -translate-y-1 text-[var(--primary)]" : "text-[var(--muted-foreground)]"}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--primary)] mb-4">
            003 / Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Where I've<br /><span className="italic">worked</span>
          </h2>
        </div>

        <div className="md:col-span-8 space-y-0">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company}
              className="border-t border-white/5 py-10 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display text-xl font-light">{exp.role}</h3>
                  <p className="font-mono text-sm text-[var(--primary)] mt-1">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest whitespace-nowrap mt-1">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}

          <div className="border-t border-white/5 pt-8">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[var(--primary)] hover:gap-4 transition-all duration-200"
            >
              Download full resume
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v6M3 6l3 4 3-4" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("john@mburunkonge.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-12 items-end gap-12">
        <div className="md:col-span-7">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--primary)] mb-6">
            004 / Contact
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] font-light leading-[0.92] tracking-tight">
            Let's build<br /><span className="italic">something</span><br />together
            <span style={{ color: "var(--primary)" }}>.</span>
          </h2>
          <p className="mt-8 text-[var(--muted-foreground)] font-light leading-relaxed max-w-md">
            I'm open to backend engineering roles, fullstack positions, and select freelance
            engagements. If you're working on something interesting, let's talk.
          </p>
        </div>

        <div className="md:col-span-5 space-y-6">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
              Email
            </p>
            <button
              onClick={handleCopy}
              className="font-display text-xl md:text-2xl font-light hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-3 group"
            >
              johnnkonge2020@gmail.com
              <span className="font-mono text-xs text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors">
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>

          <div className="border-t border-white/5 pt-6">
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
              Elsewhere
            </p>
            <div className="flex gap-6">
              {[
                { label: "GitHub", href: "https://github.com/mburunkonge" },
                { label: "LinkedIn", href: "https://linkedin.com/in/mburunkonge" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest uppercase text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 max-w-6xl mx-auto border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest">
        © {new Date().getFullYear()} John Mburu
      </p>
      <p className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest">
        Nairobi, Kenya
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="noise-overlay">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
