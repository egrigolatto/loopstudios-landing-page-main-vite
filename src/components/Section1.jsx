import imgMobile from "../assets/images/mobile/image-interactive.jpg";
import imgDesktop from "../assets/images/desktop/image-interactive.jpg";
function Section1() {
  return (
    <section className="my-20 mx-6 text-center sm:mx-12 md:mx-16 lg:relative lg:mx-[140px]  ">
      <div className="mb-4  ">
        <img
          className="md:hidden w-full"
          src={imgMobile}
          alt="image-interactive"
        />
        <img
          className="hidden md:block w-full lg:w-[70%]"
          src={imgDesktop}
          alt="image-interactive"
        />
      </div>

      <div className="text-center p-5 lg:p-0 lg:pl-16 lg:pt-16 lg:pr-0 lg:absolute lg:w-[50%] lg:bottom-0 lg:right-0 lg:bg-white lg:h-[60%] lg:text-start overflow-hidden lg:flex flex-col justify-around">
        <h1 className="text-Alata uppercase text-[35px] leading-none mb-3 text-VeryDarkGray lg:text-[2.3rem]">
          The Leader in <br />
          Interactive vr
        </h1>
        <p className="text-DarkGray text-[16px] leading-normal w-[85%] md:w-[60%] lg:w-full m-auto lg:text-[.85rem] ">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}

export default Section1;
