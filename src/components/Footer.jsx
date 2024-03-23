import logo from "../assets/images/logo.svg";
import Menu from "./Menu";
import Redes from "./Redes";

function Footer() {
  return (
    <footer className="bg-black text-center py-10 md:flex md:items-center md:justify-between sp:mx-12 md:px-16 lg:relative lg:px-[140px]">
      <div className="mb-8 md:mb-0 md:flex flex-col items-start">
        <div className="md:mb-2">
          <img className="w-[30%] md:w-[120px] mx-auto" src={logo} alt="logo" />
        </div>
        <div>
          <Menu />
        </div>
      </div>

      <div className="text-center md:flex flex-col items-end">
        <div className="mb-2">
          <Redes />
        </div>

        <div>
          <p className="text-DarkGray text-[.9rem]">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
