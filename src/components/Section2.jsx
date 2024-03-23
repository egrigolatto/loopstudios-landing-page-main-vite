import { imagesDesktop, imagesMobile } from "./fotosGaleria";
import ImgGalery from "./ImgGalery";
import { useState, useEffect } from "react";

function Section2() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isDesktop ? imagesDesktop : imagesMobile;

  return (
    <section
      className="m-6 mb-[100px] grid gap-6 grid-cols-1 md:grid-cols-[2,1] 
    sm:mx-12 md:mx-16 lg:relative lg:mx-[140px]"
    >
      <div>
        <h1 className="text-Alata uppercase text-center text-Black text-[36px] font-light mb-4 sm:mb-0 sm:text-start">
          Our Creations
        </h1>
      </div>

      <div className="text-center order-last sm:order-none">
        <button className="uppercase border-2 border-VeryDarkGray px-16 py-2 text-VeryDarkGray text-[1.1rem] tracking-wider hover:bg-Black hover:border-Black hover:text-White transition-all ">
          See All
        </button>
      </div>

      <div className="grid sm:mt-10 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:col-span-2 mb-5">
        {images.map((img, index) => (
          <ImgGalery key={index} name={img.name} img={img.img} />
        ))}
      </div>
    </section>
  );
}

export default Section2;
