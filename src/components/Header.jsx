import Navigation from './Navigation';
import { Moon, Sun } from 'lucide-react';

function Header({ darkmode, darkModeHandler }) {
  return (
    <div className="flex flex-row px-4 py-2 ">
      <Navigation />
      <h1 className="mx-auto text-lg font-bold">Alains React Portfolio</h1>
      <button className="hover:text-red-500" onClick={() => darkModeHandler()}>
        {darkmode && <Moon size={32} />}
        {!darkmode && <Sun size={32} />}
      </button>
    </div>
  );
}

export default Header;
