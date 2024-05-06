import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Router from './pages/Router';

//Bootstrap css

import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
);
