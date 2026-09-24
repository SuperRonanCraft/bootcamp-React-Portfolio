import { Outlet, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function updateDark(dark) {
  if (dark) document.body.classList.add("dark");
  else document.body.classList.remove("dark");
}

function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark") === "true");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const darkModeHandler = () => {
    setDark((dark) => !dark);
  };

  //Called when setDark is used
  useEffect(() => {
    localStorage.setItem("dark", dark);
    updateDark(dark);
  }, [dark]);

  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header darkmode={dark} darkModeHandler={darkModeHandler} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
