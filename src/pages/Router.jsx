import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import AboutPage from './AboutPage';
// import PortfolioPage from './PortfolioPage';
// import ContactPage from './ContactPage';
// import ResumePage from './ResumePage';
// import ErrorPage from './ErrorPage';

const Router = createBrowserRouter([
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      // {
      //   path: '/Portfolio',
      //   element: <PortfolioPage />,
      // },
      // {
      //   path: '/Contact',
      //   element: <ContactPage />,
      // },
      // {
      //   path: '/Resume',
      //   element: <ResumePage />,
      // },
    ],
  },
]);

export default Router;
