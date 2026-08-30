import { useState, type ReactNode } from "react";
import { experiences, projects, skillGroups } from "./content";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Skills", "skills"],
];

function Icon({ name }: { name: "arrow" | "download" | "github" | "linkedin" | "mail" }) {
  const paths: Record<typeof name, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
    linkedin: <><rect width="16" height="16" x="4" y="4" rx="2" /><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" /></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  };

  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return <div className="section-heading"><span>{number}</span><h2>{title}</h2></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu}>Junjian Chen</a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
      </nav>
      <button className={menuOpen ? "menu-button is-open" : "menu-button"} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span /><span /></button>
    </header>

    <main id="main">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="intro-label">Full-stack software engineer · Toronto</p>
          <h1>I build clear, dependable software for complex work.</h1>
          <p className="hero-lead">I’m Junjian (Joey) Chen. I work across product interfaces, backend systems, cloud infrastructure, and applied AI.</p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">View selected work <Icon name="arrow" /></a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"><Icon name="download" /> Résumé</a>
          </div>
        </div>
        <img className="portrait" src="/profile.jpg" alt="Junjian Chen" />
      </section>

      <section className="section about" id="about">
        <SectionHeading number="01" title="About" />
        <div className="section-body two-column">
          <p className="lead-copy">I enjoy turning complicated workflows into products that feel straightforward and reliable.</p>
          <div className="body-copy"><p>My experience spans legal technology, retail systems, and enterprise platforms. I care about understanding the problem first, choosing maintainable tools, and polishing the details people actually use.</p><p>I hold an M.Eng. in Computer Engineering from the University of Toronto and a B.Eng. from McGill University.</p></div>
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeading number="02" title="Experience" />
        <div className="section-body experience-list">
          {experiences.map((item) => <article className="experience-item" key={item.company}>
            <div className="experience-meta"><span>{item.period}</span><span>{item.location}</span></div>
            <div className="experience-content">
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p className="summary">{item.summary}</p>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <p className="technologies">{item.technologies.join(" · ")}</p>
            </div>
          </article>)}
        </div>
      </section>

      <section className="section" id="work">
        <SectionHeading number="03" title="Selected work" />
        <div className="section-body project-list">
          {projects.map((project, index) => {
            const content = <><div className="project-index">0{index + 1}</div><div className="project-copy"><p className="project-type">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><p className="project-detail">{project.metrics}</p><p className="technologies">{project.technologies.join(" · ")}</p></div>{project.href && <Icon name="arrow" />}</>;
            return project.href ? <a className="project-item" href={project.href} target="_blank" rel="noreferrer" key={project.title}>{content}</a> : <article className="project-item" key={project.title}>{content}</article>;
          })}
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeading number="04" title="Skills" />
        <div className="section-body skills-list">
          {skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.skills.join(" · ")}</p></div>)}
        </div>
      </section>

      <section className="section education" id="education">
        <SectionHeading number="05" title="Education" />
        <div className="section-body education-list">
          <article><span>2023 — 2025</span><div><h3>University of Toronto</h3><p>Master of Engineering · Computer Engineering · GPA 3.97 / 4.00</p></div></article>
          <article><span>2019 — 2023</span><div><h3>McGill University</h3><p>Bachelor of Engineering · Computer Engineering · GPA 3.80 / 4.00</p></div></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="intro-label">Get in touch</p>
        <h2>Let’s build something useful.</h2>
        <a className="email-link" href="mailto:junjian.chenc@outlook.com">junjian.chenc@outlook.com <Icon name="arrow" /></a>
        <div className="social-links">
          <a href="https://github.com/JoeyChen-95" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
          <a href="https://www.linkedin.com/in/junjian-chen-b582791a0/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
          <a href="mailto:junjian.chenc@outlook.com"><Icon name="mail" /> Email</a>
        </div>
      </section>
    </main>

    <footer><p>© {new Date().getFullYear()} Junjian Chen</p><a href="#top">Back to top ↑</a></footer>
  </>;
}

export default App;
