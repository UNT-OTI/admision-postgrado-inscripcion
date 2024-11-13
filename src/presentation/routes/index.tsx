import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { PreviewPage, ResultsPage, UploadInformationPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <PreviewPage />,
      },
      {
        path: "/subir-datos",
        element: <UploadInformationPage />,
      },
      {
        path: "/resultados-evaluacion",
        element: <ResultsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
