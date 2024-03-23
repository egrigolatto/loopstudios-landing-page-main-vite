import logo from "../assets/images/logo.svg";
import hambur from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const customMenuStyles = {
    fontSize: "20px",
    fontFamily: "Alata",
    textTransform: "uppercase",
    fontWeight: 400,
  };
  return (
    <header
      className={`${
        menuOpen
          ? "bg-black "
          : "bg-fondoHeaderMobile bg-center bg-cover bg-no-repeat"
      } h-[90vh] relative px-6 pt-12 md:px-10 md:bg-fondoHeaderDesktop lg:px-[140px]`}
    >
      <div className="flex items-center justify-between transition-all">
        <div>
          <img className="w-[70%]" src={logo} alt="logo" />
        </div>

        <nav>
          <div className="md:hidden">
            <img
              src={menuOpen ? close : hambur}
              alt="menu"
              onClick={toggleMenu}
            />
          </div>

          {menuOpen && (
            <div className="absolute top-20 left-6 bottom-0 right-0 flex items-center transition-all">
              <Menu menuStyles={customMenuStyles} />
            </div>
          )}

          <div className="hidden md:block ">
            <Menu />
          </div>
        </nav>
      </div>

      <div
        className={
          menuOpen
            ? "hidden"
            : "flex items-center justify-center align-middle h-full w-full max-w-[327px]"
        }
      >
        <h1 className="text-white border-2 p-5 uppercase font-JosefinSans text-[35px] leading-none font-extralight w-full">
          Immmersive <br />
          Experiences <br />
          That <br />
          Deliver
        </h1>
      </div>
    </header>
  );
}

export default Header;
