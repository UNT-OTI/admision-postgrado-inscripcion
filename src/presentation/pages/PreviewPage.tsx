import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdmissionContext from "../context/AdmissionProvider";
import { Loader } from "../components/animations";

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
