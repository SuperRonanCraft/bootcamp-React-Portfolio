import { Github } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="flex justify-center background-red">
      <Github size={32} className="hover:text-red-500" />
    </footer>
  );
}
