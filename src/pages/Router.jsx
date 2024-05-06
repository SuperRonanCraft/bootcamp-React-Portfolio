import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import PortfolioPage from './Portfolio';
import ContactPage from './Contact';
import ResumePage from './Resume';

const Router = createBrowserRouter([
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PortfolioPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      // {
      //   path: '/Resume',
      //   element: <ResumePage />,
      // },
    ],
  },
]);

export default Router;
