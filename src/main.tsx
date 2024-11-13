import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/routes";
import "./index.css";
import { AdmissionProvider } from "./presentation/context/AdmissionProvider";

createRoot(document.getElementById("root")!).render(
  <AdmissionProvider>
    <RouterProvider router={router} />
  </AdmissionProvider>
);
