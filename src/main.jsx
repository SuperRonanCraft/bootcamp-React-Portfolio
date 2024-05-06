import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Router from './pages/Router';

//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
);
