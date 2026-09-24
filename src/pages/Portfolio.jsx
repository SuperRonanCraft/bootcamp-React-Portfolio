import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDown,
  Braces,
  Database,
  Blocks,
} from "lucide-react";
import projects from "../assets/projects.json";
import Project from "../components/Project";
import { Skills } from "../components/Skills";

const filters = ["All work", "Web applications", "Plugins & tools"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All work");
  const shown = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow">Alain Núñez · Full stack developer</p>
          <h1>
            From the interface
            <br />
            to the <span>inner workings.</span>
          </h1>
          <p className="hero-description">
            I build web applications and Java plugins, connecting thoughtful
            interfaces with the APIs, databases, and logic that make them work.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <Link className="text-link" to="/contact">
              Let’s build something <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div
          className="system-map"
          aria-label="My work connects interfaces, backend systems, and plugin development"
        >
          <div className="map-heading">
            <span className="status-dot" /> A look at my toolkit{" "}
            <Braces size={17} />
          </div>
          <div className="map-layer">
            <span className="map-icon">
              <Blocks size={23} />
            </span>
            <div>
              <span className="map-label">The experience</span>
              <strong>React + TypeScript</strong>
              <small>Components / interfaces / interaction</small>
            </div>
          </div>
          <div className="map-connector">
            <span /> Connected through APIs
          </div>
          <div className="map-layer">
            <span className="map-icon">
              <Database size={23} />
            </span>
            <div>
              <span className="map-label">The foundation</span>
              <strong>Node.js + databases</strong>
              <small>Express / SQL / MongoDB</small>
            </div>
          </div>
          <div className="map-branch">
            <span>Beyond the web</span>
            <strong>Java → Spigot → BetterRTP</strong>
          </div>
          <div className="map-footer">
            Different platforms. The same problem-solving mindset.
          </div>
        </div>
      </section>
      <section className="skills-section" aria-labelledby="skills-title">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Skills, put to work</p>
              <h2 id="skills-title">More than a list of technologies.</h2>
            </div>
            <p>
              What I’ve built is the best way
              <br className="desktop-break" /> to understand what I can do.
            </p>
          </div>
          <Skills />
        </div>
      </section>
      <section
        id="work"
        className="work-section page-width"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2 id="work-title">Ideas turned into working software.</h2>
          </div>
          <span className="project-count">
            {projects.length} projects / web + Java
          </span>
        </div>
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {shown.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </section>
      <section className="about-section page-width">
        <p className="eyebrow">A little about me</p>
        <div>
          <h2>
            Curious about how it works.
            <br />
            Committed to making it work.
          </h2>
          <p>
            My development experience spans full stack web development training,
            community web applications, and Minecraft plugins. I enjoy the whole
            process: shaping an interface, designing the data behind it, and
            connecting the pieces into something useful.
          </p>
          <p>
            My toolkit also includes Twilio API integrations, Stripe payment
            systems, Codex AI, and MCP servers — connecting communications,
            payments, and developer tools to the way I build.
          </p>
          <Link className="text-link" to="/resume">
            View my résumé <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="contact-banner page-width">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let’s make it work.</h2>
        </div>
        <Link className="button-primary" to="/contact">
          Start a conversation <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}
