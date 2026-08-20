import { useEffect, useState, type ReactNode } from "react";
import { experiences, projects, skillGroups } from "./content";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Skills", "skills"],
  ["Education", "education"],
];

function Icon({ name }: { name: "arrow" | "download" | "github" | "linkedin" | "mail" | "moon" | "sun" }) {
  const paths: Record<typeof name, ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></>,
    linkedin: <><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 0 0-4 0"/></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></>,
    moon: <path d="M20 15.5A9 9 0 1 1 8.5 4 7 7 0 0 0 20 15.5Z"/>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
  };

  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="JC — Junjian Chen, home" onClick={closeMenu}><span>JC</span><span className="brand-name">Junjian Chen</span></a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <Icon name="arrow" /></a>
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Use ${theme === "dark" ? "light" : "dark"} theme`}>
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
        <button className={menuOpen ? "menu-button is-open" : "menu-button"} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span/><span/>
        </button>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="top">
        <div className="hero-copy reveal is-visible">
          <div className="availability"><span/>Available in Toronto</div>
          <h1>I build software that makes complex work feel <em>simple.</em></h1>
          <p className="hero-lead">Full-stack software engineer focused on thoughtful product experiences, reliable systems, and AI-powered workflows.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <Icon name="arrow" /></a>
            <a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer"><Icon name="download" /> Download résumé</a>
          </div>
          <div className="social-row">
            <a href="https://github.com/JoeyChen-95" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
            <a href="https://www.linkedin.com/in/junjian-chen-b582791a0/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
            <a href="mailto:junjian.chenc@outlook.com"><Icon name="mail" /> Email</a>
          </div>
        </div>
        <div className="hero-visual reveal is-visible">
          <div className="portrait-frame"><img src="/profile.jpg" alt="Junjian Chen" /></div>
          <div className="floating-card card-code"><span>01</span><p>Product thinking<br/><strong>meets engineering.</strong></p></div>
          <div className="floating-card card-location"><span className="pulse"/><p>Toronto, Canada</p></div>
          <div className="shape shape-one"/><div className="shape shape-two"/>
        </div>
      </section>

      <section className="impact-strip" aria-label="Career highlights">
        <div><strong>5,000+</strong><span>monthly AI document requests</span></div>
        <div><strong>75%</strong><span>estimated reduction in manual entry</span></div>
        <div><strong>50+</strong><span>frontend issues resolved</span></div>
        <div><strong>8,000+</strong><span>employees served by HR APIs</span></div>
      </section>

      <section className="section about" id="about">
        <SectionHeading eyebrow="About" title="Engineering with curiosity and care." />
        <div className="about-grid reveal">
          <p className="about-lead">I’m Junjian (Joey), a Canadian software engineer who enjoys turning complicated workflows into clear, dependable products.</p>
          <div className="about-copy"><p>My work spans frontend systems, backend services, cloud infrastructure, and applied AI. I’m happiest where product context and technical depth meet—understanding the real problem, shaping a maintainable solution, and polishing the details people actually feel.</p><p>I hold an M.Eng. in Computer Engineering from the University of Toronto and a B.Eng. from McGill University.</p></div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionHeading eyebrow="Experience" title="Building across the stack." copy="From legal technology and retail systems to enterprise APIs." />
        <div className="timeline">
          {experiences.map((item, index) => <article className="experience-card reveal" key={item.company}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="experience-main">
              <div className="experience-header"><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><div className="experience-meta"><span>{item.period}</span><span>{item.location}</span></div></div>
              <p className="experience-summary">{item.summary}</p>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="tag-row">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="section work-section" id="work">
        <SectionHeading eyebrow="Selected work" title="Systems with measurable outcomes." />
        <div className="project-grid">
          {projects.map((project, index) => {
            const content = <><div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-eyebrow">{project.eyebrow}</span>{project.href && <Icon name="arrow" />}</div>{project.image && <div className="project-image"><img src={project.image} alt="University Attendance Tracker interface" /></div>}<h3>{project.title}</h3><p>{project.description}</p><strong className="project-metric">{project.metrics}</strong><div className="tag-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></>;
            return project.href ? <a className={`project-card reveal project-${index + 1}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>{content}</a> : <article className={`project-card reveal project-${index + 1}`} key={project.title}>{content}</article>;
          })}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <SectionHeading eyebrow="Toolbox" title="Technologies I use to ship." />
        <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card reveal" key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
      </section>

      <section className="section education-section" id="education">
        <SectionHeading eyebrow="Education" title="A foundation in computer engineering." />
        <div className="education-grid">
          <article className="education-card reveal"><div className="school-mark">U<span>T</span></div><div><span className="education-date">2023 — 2025</span><h3>University of Toronto</h3><p>Master of Engineering · Computer Engineering</p><strong>GPA 3.97 / 4.00</strong><small>Cloud-Based Data Analytics · Deep Learning · Cloud Computing · Quality of Service</small></div></article>
          <article className="education-card reveal"><div className="school-mark mcgill">M</div><div><span className="education-date">2019 — 2023</span><h3>McGill University</h3><p>Bachelor of Engineering · Computer Engineering</p><strong>GPA 3.80 / 4.00</strong><small>Algorithms & Data Structures · Distributed Systems · Software Engineering · Software Validation</small></div></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner reveal"><span className="eyebrow">Let’s connect</span><h2>Have a problem worth solving?</h2><p>I’m always glad to talk about product engineering, full-stack systems, and useful applications of AI.</p><a className="contact-email" href="mailto:junjian.chenc@outlook.com">junjian.chenc@outlook.com <Icon name="arrow" /></a></div>
      </section>
    </main>

    <footer><a className="brand" href="#top"><span>JC</span></a><p>Designed & built by Junjian Chen · {new Date().getFullYear()}</p><div><a href="https://github.com/JoeyChen-95" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/junjian-chen-b582791a0/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </>;
}

export default App;
