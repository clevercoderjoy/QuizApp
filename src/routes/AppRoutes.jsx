import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../pages/Home';
import Quiz from './../pages/Quiz';
import Results from './../pages/Results';
import NotFound from './../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "results",
        element: <Results />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])