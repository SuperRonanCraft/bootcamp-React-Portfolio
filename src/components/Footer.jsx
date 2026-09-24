import { Github, Linkedin, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Alain Núñez <span> / Full stack developer</span>
      </p>
      <div>
        <a href="https://github.com/SuperRonanCraft">
          <Github size={16} /> GitHub <ArrowUpRight size={14} />
        </a>
        <a href="https://www.linkedin.com/in/alain-nunez/">
          <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
