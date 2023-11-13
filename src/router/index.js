import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MovieDetails from "../pages/movie-details";
import App from "../App";
import ErrorPage from "../pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie-details/:movieId",
    element: <MovieDetails />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
