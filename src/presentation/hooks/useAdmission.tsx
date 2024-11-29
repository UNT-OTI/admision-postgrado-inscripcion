import { useContext } from "react";
import AdmissionContext from "../context/AdmissionProvider";

export const useAdmission = () => {
  const admissionContext = useContext(AdmissionContext);

  if (!admissionContext)
    throw new Error("Component should be inside of AdmissionProvider.tsx");

  return admissionContext;
};
