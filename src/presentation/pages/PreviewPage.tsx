import { Navigate } from "react-router-dom";
import { Loader } from "../components/animations";
import UploadIcon from "../../assets/icons/upload.svg";
import { useAdmission } from "../hooks";

export const PreviewPage = () => {
  const admissionContext = useAdmission();

  const { isLoading, isUploadConfirmed, setIsLoading } = admissionContext;

  if (isUploadConfirmed)
    return <Navigate to="/resultados-evaluacion" replace />;

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h2 className="text-[#00439e] uppercase text-[30px] text-center font-normal">
        Completar requisitos para inscripción virtual
      </h2>
      <table className="border-solid border-[1px] border-gray-200 p-3 mt-8 w-full sm:max-w-[950px] mx-auto">
        {/* Primera fila */}
        <tr>
          <td className="first-row-column w-[50%]">
            <div className="flex flex-col items-center">
              <p className="heading-column">Requisitos</p>
              <p className="text-center font-semibold">
                (Cada requisito en un solo documento)
              </p>
            </div>
          </td>
          <td className="first-row-column w-[50%]">
            <div className="flex flex-col items-center">
              <p className="heading-column">Completar</p>
              <p className="text-center font-semibold">
                (Tamaño máximo del documento: 2MB)
              </p>
            </div>
          </td>
        </tr>
        {/* Segunda fila */}
        <tr className="bg-gray-100">
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <p>
              <span className="uppercase">Foto actual tamaño carnet</span> (Sin
              lentes ni accesorios que dificulten la identificación del
              postulante){" "}
              <a className="capitalize text-red-500" href="#">
                [Ver ejemplo]
              </a>
            </p>
          </td>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <div className="flex flex-col gap-[5px]">
              <button className="bg-[#FD9B2C] text-white px-3 py-2 flex items-center justify-center w-[94.73px]">
                <img src={UploadIcon} alt="Subir Archivo" />
                Cargar
              </button>
              <p className="font-semibold">--Pendiente--</p>
            </div>
          </td>
        </tr>
        {/* Tecera fila */}
        <tr>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <p className="uppercase">
              Formatos de inscripción llenados y firmados.{" "}
              <span className="block">Escaneado en un solo documento.</span>
            </p>
          </td>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <div className="flex flex-col gap-[5px]">
              <button className="bg-[#FD9B2C] text-white px-3 py-2 flex items-center justify-center w-[94.73px]">
                <img src={UploadIcon} alt="Subir Archivo" />
                Cargar
              </button>
              <p className="font-semibold">--Pendiente--</p>
            </div>
          </td>
        </tr>
        {/* Cuarta fila */}
        <tr className="bg-gray-100">
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <p className="uppercase">
              Constancia web del registro del grado - SUNEDU
            </p>
          </td>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <div className="flex flex-col gap-[5px]">
              <button className="bg-[#FD9B2C] text-white px-3 py-2 flex items-center justify-center w-[94.73px]">
                <img src={UploadIcon} alt="Subir Archivo" />
                Cargar
              </button>
              <p className="font-semibold">--Pendiente--</p>
            </div>
          </td>
        </tr>
        {/* Quinta fila */}
        <tr>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <p className="uppercase">Recibo de pago por s/. 280.00</p>
          </td>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <div className="flex flex-col gap-[5px]">
              <button className="bg-[#FD9B2C] text-white px-3 py-2 flex items-center justify-center w-[94.73px]">
                <img src={UploadIcon} alt="Subir Archivo" />
                Cargar
              </button>
              <p className="font-semibold">--Pendiente--</p>
            </div>
          </td>
        </tr>
        {/* Sexta fila */}
        <tr className="bg-gray-100">
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <p>
              <span className="uppercase">Documento de identidad</span> (Ambos
              escaneados en un solo documento){" "}
              <a className="capitalize text-red-500" href="#">
                [Ver ejemplo]
              </a>
            </p>
          </td>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <div className="flex flex-col gap-[5px]">
              <button className="bg-[#FD9B2C] text-white px-3 py-2 flex items-center justify-center w-[94.73px]">
                <img src={UploadIcon} alt="Subir Archivo" />
                Cargar
              </button>
              <p className="font-semibold">--Pendiente--</p>
            </div>
          </td>
        </tr>
        {/* Séptima fila */}
        <tr>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <p className="uppercase">
              Declaración jurada de veracidad de documentos adjuntos{" "}
              <span className="text-blue-400">(Descargar formato)</span>
            </p>
          </td>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <div className="flex flex-col gap-[5px]">
              <button className="bg-[#FD9B2C] text-white px-3 py-2 flex items-center justify-center w-[94.73px]">
                <img src={UploadIcon} alt="Subir Archivo" />
                Cargar
              </button>
              <p className="font-semibold">--Pendiente--</p>
            </div>
          </td>
        </tr>
        {/* Octava fila */}
        <tr className="bg-gray-100">
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <p className="uppercase">
              Enlace o link de google drive donde esté subido el cv completo y
              documentado.
            </p>
          </td>
          <td className="border-solid border-[1px] border-gray-200 pt-1 px-3 pb-8">
            <div className="flex flex-col gap-[5px]">
              <button className="bg-[#FD9B2C] text-white px-3 py-2 flex items-center justify-center w-[94.73px]">
                <img src={UploadIcon} alt="Subir Archivo" />
                Cargar
              </button>
              <p className="font-semibold">--Pendiente--</p>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};
