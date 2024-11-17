import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const MainLayout = () => {
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
