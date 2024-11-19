import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/routes";
import { AdmissionProvider } from "./presentation/context/AdmissionProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AdmissionProvider>
    <RouterProvider router={router} />
  </AdmissionProvider>
);
