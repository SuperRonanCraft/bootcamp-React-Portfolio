import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, ArrowUpRight } from "lucide-react";

export default function Header({ darkmode, darkModeHandler }) {
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Alain Núñez home">
        alain<span>.dev</span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          Work
        </NavLink>
        <NavLink to="/resume">Résumé</NavLink>
        <NavLink to="/contact">
          Let’s talk <ArrowUpRight size={15} />
        </NavLink>
      </nav>
      <button
        className="theme-toggle"
        onClick={darkModeHandler}
        aria-label={`Switch to ${darkmode ? "light" : "dark"} mode`}
      >
        {darkmode ? <Sun size={19} /> : <Moon size={19} />}
      </button>
    </header>
  );
}

Header.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  darkModeHandler: PropTypes.func.isRequired,
};
