import projects from "../assets/projects.json";
import Project from "../components/Project";
import { Skills } from "../components/Skills";
function AboutPage() {
  // console.log(projects);
  return (
    <div>
      {/* About */}
      <div className="mx-5">
        <div className="max-w-screen-lg mx-auto mt-5 bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2 ">Hello, I'm Alain</h2>
            <p className="text-base">
              A dedicated Full Stack Web Developer with a flair for crafting
              innovative web applications using the latest technologies. Just
              gradutaed from a rigorous web developement bootcamp. Honing my
              skills in various technologies while exploring the realms of UI/UX
              and backend platforms.
            </p>
            <p className="text-base mt-2">
              With a diverse portfolio ranging from intricate mods for games to
              dynamic web applications like payment systems using Stripe and
              telephony solutions, I thrive on the challenge of solving
              real-world problems through code. Recent ventures into React
              applications showcasing a commitment to staying at the forefront
              of industry trends.
            </p>
            <p className="text-base mt-2">
              I'm passionate about seeing my creations come to life in
              production environments, finding fulfillment in the impact of my
              work as it becomes part of users' everyday experiences. With a
              keen eye for detail and a relentless drive for innovation, I'm
              poised to make waves in the ever-evolving landscape of web
              development.
            </p>
          </div>
        </div>
      </div>
      {/* Projects */}
      <section>
        <h2 className="px-3 pt-5 font-bold">Recent Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 py-4">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Skill Icons */}
      <section>
        <h2 className="px-3 pt-5 font-bold">Skills</h2>
        <Skills />
      </section>
    </div>
  );
}

export default AboutPage;
