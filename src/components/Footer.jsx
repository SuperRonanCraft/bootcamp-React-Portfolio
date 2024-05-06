import { Github } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="flex justify-center">
      <Github
        size={38}
        className="transition-all duration-300 hover:text-red-500"
      />
    </footer>
  );
}
