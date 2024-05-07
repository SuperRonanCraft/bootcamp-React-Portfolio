import projects from '../assets/projects.json';
import Project from '../components/Project';
import Skills from '../components/Skills';
function AboutPage() {
  console.log(projects);
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 py-4 dark:bg-gray-600">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      <Skills />
    </div>
  );
}

export default AboutPage;
