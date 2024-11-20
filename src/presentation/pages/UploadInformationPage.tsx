import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdmissionContext from "../context/AdmissionProvider";
import { RadioButtonsGroupByQuestion } from "../components/ui";
import {
  isFormValid,
  isMarkedQuestionWithItemValue,
} from "../../config/helpers";

export const UploadInformationPage = () => {
  const admissionContext = useContext(AdmissionContext);
  const navigate = useNavigate();

  if (!admissionContext)
    throw new Error(
      "UploadInfomationPage.tsx debe estar dentro del provider AdmissionProvider.tsx"
    );

  const { markedQuestions, questionnaire, setTotalQualification } =
    admissionContext;

  const submitCVDataForm = () => {
    if (!isFormValid(markedQuestions, questionnaire)) {
      Swal.fire({
        title: "¡Error!",
        icon: "error",
        html: `
        <p>Debe llenar todos los campos del formulario.</p>
        `,
        confirmButtonColor: "#00439E",
        showConfirmButton: true,
      });
    } else {
      Swal.fire({
        title: "¿Está seguro?",
        icon: "question",
        html: `
        <p>Las respuestas no podrán ser modificadas.</p>
        `,
        confirmButtonColor: "#00439E",
        confirmButtonText: "Ok",
        denyButtonText: `Cancelar`,
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const total = markedQuestions.reduce(
            (totalByQuestion, currentQuestion) => {
              if (isMarkedQuestionWithItemValue(currentQuestion)) {
                return totalByQuestion + (currentQuestion?.itemValue ?? 0);
              } else {
                return totalByQuestion + (currentQuestion?.subItemValue ?? 0);
              }
            },
            0
          );
          setTotalQualification(total);
          Swal.fire("Datos Grabados Correctamente!", "", "success").then(
            (result) => {
              if (result.isConfirmed) {
                window.open(
                  `${window.location.origin}/resultados-evaluacion`,
                  "_blank",
                  "noopenner"
                );
                navigate("/documentos-previsualizacion", {
                  replace: true,
                });
              }
            }
          );
        }
      });
    }
  };

  return (
    <>
      <h2 className="text-[#00439e] uppercase text-[30px] text-center font-normal">
        Declaración Jurada de documentos presentados por Postulante
      </h2>
      <div className="flex flex-col gap-y-5 first-of-type:mt-8 mt-5">
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
