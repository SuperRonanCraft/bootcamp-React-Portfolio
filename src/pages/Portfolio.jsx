import projects from '../assets/projects.json';
import Project from '../components/Project';
import Skills from '../components/Skills';
function AboutPage() {
  console.log(projects);
  return (
    <div>
      <section>
        <h2 className="px-3 pt-5 font-bold">Recent Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 py-4">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="px-3 pt-5 font-bold">Skills</h2>
        <Skills />
      </section>
    </div>
  );
}

export default AboutPage;
