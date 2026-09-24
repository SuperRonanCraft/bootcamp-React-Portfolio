import PropTypes from "prop-types";
import { ArrowUpRight, Github } from "lucide-react";
import images from "../../public/images/tech/index";

export default function Project({
  title,
  github,
  deployment,
  image,
  description,
  tech = [],
  category,
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={`/images/${image}`}
          alt={`${title} project preview`}
          loading="lazy"
          width="800"
          height="450"
        />
      </div>
      <div className="project-copy">
        <span className="eyebrow">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {tech.map((id) => (
            <li key={id}>
              {images.find((icon) => icon.id === id)?.name || id}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {deployment && (
            <a href={deployment} target="_blank" rel="noreferrer">
              View project <ArrowUpRight size={16} />
              <span className="sr-only">: {title} (opens in a new tab)</span>
            </a>
          )}
          <a href={github} target="_blank" rel="noreferrer">
            <Github size={16} /> Source code
            <span className="sr-only">: {title} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  deployment: PropTypes.string,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string.isRequired,
};
