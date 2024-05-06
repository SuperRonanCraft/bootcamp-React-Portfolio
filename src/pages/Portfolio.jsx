import projects from '../assets/projects.json';
import Project from '../components/Project';
function AboutPage() {
  console.log(projects);
  return (
    <div className="grid grid-col-2">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default AboutPage;
