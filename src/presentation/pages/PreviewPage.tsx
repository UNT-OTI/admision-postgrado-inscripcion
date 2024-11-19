import { useContext } from "react";
import { Loader } from "../components/animations/Loader";
import AdmissionContext from "../context/AdmissionProvider";
import { Navigate } from "react-router-dom";

export const PreviewPage = () => {
  const admissionContext = useContext(AdmissionContext);

  if (!admissionContext)
    throw new Error(
      "PreviewPage.tsx debe estar dentro del provider AdmissionProvider.tsx"
    );

  const { isLoading, isUploadConfirmed, setIsLoading } = admissionContext;

  if (isUploadConfirmed)
    return <Navigate to="/resultados-evaluacion" replace />;

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return isLoading ? <Loader /> : <div>PreviewPage</div>;
};
