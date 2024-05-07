import Navigation from './Navigation';
import { Moon, Sun } from 'lucide-react';

function Header({ darkmode, darkModeHandler }) {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 pt-3 pb-2 content-center bg-gray-200 dark:bg-gray-800">
      <Navigation />
      <h1 className="flex justify-center items-center text-nowrap text-center text-lg md:text-2xl font-semibold">
        Alains React Portfolio
      </h1>
      <button className="justify-self-end" onClick={() => darkModeHandler()}>
        {darkmode && <Moon size={32} />}
        {!darkmode && <Sun size={32} />}
      </button>
    </div>
  );
}

export default Header;
