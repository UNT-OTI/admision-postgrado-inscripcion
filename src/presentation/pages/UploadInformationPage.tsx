import { useContext } from "react";
import AdmissionContext from "../context/AdmissionProvider";
import { RadioButtonsGroupByQuestion } from "../components/ui";

export const UploadInformationPage = () => {
  const admissionContext = useContext(AdmissionContext);

  if (!admissionContext)
    throw new Error(
      "UploadInfomationPage.tsx debe estar dentro del provider AdmissionProvider.tsx"
    );

  const { questionnaire, submitCVDataForm } = admissionContext;

  return (
    <>
      <h2 className="text-[#00439e] uppercase text-[30px] text-center font-normal">
        Evaluación de cv
      </h2>
      <div className="flex flex-col gap-y-5 mt-5">
        {questionnaire.map((question, mainIndex) => (
          <RadioButtonsGroupByQuestion key={mainIndex} question={question} />
        ))}
      </div>
      <button
        onClick={submitCVDataForm}
        className="px-5 py-3 uppercase bg-[#195CD2] text-white mt-3 font-light transition-colors duration-300 hover:bg-[#00439E] cursor-pointer "
      >
        Grabar
      </button>
    </>
  );
};
