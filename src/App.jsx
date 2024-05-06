import { Outlet } from 'react-router-dom';

// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header darkmode={dark} darkModeHandler={darkModeHandler} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
