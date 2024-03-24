import logo from "../assets/images/logo.svg";
import hambur from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import fondoMobile from "../assets/images/mobile/image-hero.jpg";
import fondoDesktop from "../assets/images/desktop/image-hero.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    // <header
    //   className={`${
    //     menuOpen
    //       ? "bg-black "
    //       : "bg-fondoHeaderMobile bg-center bg-cover bg-no-repeat"
    //   } h-[90vh] relative px-6 pt-12 md:px-10 md:bg-fondoHeaderDesktop lg:px-[140px]`}
    // >
    <header
      className="bg-black h-[90vh] relative px-6 pt-12 md:px-10 lg:px-[140px]"
      style={{
        backgroundImage: menuOpen ? 'none' : `url(${isMobile ? fondoMobile : fondoDesktop})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
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
