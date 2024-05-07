import projects from '../assets/projects.json';
import Project from '../components/Project';
function AboutPage() {
  console.log(projects);
  return (
    <div className="grid md:grid-cols-2 gap-4 px-4 py-4 dark:bg-gray-600">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default AboutPage;
