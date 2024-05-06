import { Link } from 'lucide-react';
function Project({ title, link, image }) {
  return (
    <>
      <h2>{title}</h2>
      <a href={link}>
        <Link />
      </a>
    </>
  );
}

export default Project;
