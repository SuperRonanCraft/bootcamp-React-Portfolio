import { Github, Linkedin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-200 dark:bg-gray-800 py-2">
      <a className="px-2" href="https://www.linkedin.com/in/alain-nunez/">
        <Linkedin size={32} className="hover:text-red-500" />
      </a>
      <a
        className="px-2"
        href="https://github.com/SuperRonanCraft?tab=repositories"
      >
        <Github size={32} className="hover:text-red-500" />
      </a>
    </footer>
  );
}
