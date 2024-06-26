import { Outlet } from 'react-router-dom';

// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function updateDark(dark) {
  if (dark) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
}

function App() {
  const [dark, setDark] = useState(localStorage.getItem('dark') === 'true');

  const darkModeHandler = () => {
    setDark((dark) => !dark);
  };

  //Called when setDark is used
  useEffect(() => {
    localStorage.setItem('dark', dark);
    updateDark(dark);
  }, [dark]);

  return (
    <div className="h-screen flex flex-col justify-between dark:bg-gray-600">
      <Header darkmode={dark} darkModeHandler={darkModeHandler} />
      <main className="dark:bg-gray-600">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
