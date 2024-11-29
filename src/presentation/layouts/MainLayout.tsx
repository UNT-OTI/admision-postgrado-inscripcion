import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/partials";
import { useAdmission } from "../hooks";

export const MainLayout = () => {
  const admissionContext = useAdmission();

  return (
    <>
      <Header />
      <div className="py-10 mb-[55px] px-5 lg:px-[340px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
