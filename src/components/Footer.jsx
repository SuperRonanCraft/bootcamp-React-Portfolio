import { Github } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-200 dark:bg-gray-800 py-2">
      <Github size={32} className="hover:text-red-500" />
    </footer>
  );
}
