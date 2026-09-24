const capabilities = [
  {
    title: "Interfaces people can use",
    description:
      "Responsive layouts, reusable React components, and form validation. Bringing the interface and the interaction together.",
    tools: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"],
    evidence: "In practice: this portfolio & Minecentral",
  },
  {
    title: "The systems behind the screen",
    description:
      "REST APIs, resource uploads, relational data, and database-backed workflows for browsing, ordering, and managing information.",
    tools: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"],
    evidence: "In practice: Minecentral & Arlington Food Shelf",
  },
  {
    title: "Beyond the browser",
    description:
      "Minecraft plugins built with Java and the Spigot API, plus command-line tools that make data easier to manage.",
    tools: ["Java", "Maven", "Spigot API", "Git & GitHub"],
    evidence: "In practice: BetterRTP & Employee Tracker",
  },
  {
    title: "Connected tools & AI workflows",
    description:
      "Twilio API and Stripe integrations, alongside Codex AI and MCP servers in my development toolkit.",
    tools: ["Twilio API", "Stripe", "Codex AI", "MCP servers"],
    evidence: "Focus: communications, payments & developer tooling",
  },
];
export function Skills() {
  return (
    <div className="capability-grid">
      {capabilities.map(({ title, description, tools, evidence }) => (
        <article className="capability" key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul className="tags">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <p className="evidence">{evidence}</p>
        </article>
      ))}
    </div>
  );
}
