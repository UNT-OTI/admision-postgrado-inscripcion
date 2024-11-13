import LocationIcon from "../../assets/icons/map.svg";
import LogoUnt from "../../assets/imgs/logo-unt.png";

export const Header = () => {
  return (
    <header className="bg-[#195CD2] flex flex-row justify-between lg:px-[280px] px-3 items-center py-3">
      <div className="flex flex-row items-center gap-3">
        <img
          className="w-44 h-14 hidden md:block"
          src={LogoUnt}
          alt="Logo UNT"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[33.6px] font-normal text-white">
            EPG<span className="text-[#6FABFE]">UNT</span>
          </p>
          <p className="text-[15px] text-white hidden md:block">
            Sistema de Preinscripción
          </p>
        </div>
      </div>
      <div className="md:self-end">
        <a
          className="text-[14px] text-white flex flex-row items-center gap-2 font-bold"
          href="https://www.google.es/maps/place/Universidad+Nacional+De+Trujillo/@-8.1164815,-79.0454667,17z/data=!3m1!4b1!4m2!3m1!1s0x91ad3d9fb3467261:0x752547ad9a204df6"
          target="_blank"
        >
          <img src={LocationIcon} alt="Logo Ubicación" className="w-5" />
          <p className="hidden md:block text-xs">
            Av. Juan Pablo II s/n, Trujillo / Perú
          </p>
        </a>
      </div>
    </header>
  );
};
