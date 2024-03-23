function ImgGalery({ name, img }) {
  return (
    <div className="relative">
      <img className="w-full object-cover" src={img} alt={name} />
      <p className="absolute uppercase text-White bottom-7 left-7 text-[29px] w-[130px] leading-none tracking-wider font-light">
        {name}
      </p>
    </div>
  );
}

export default ImgGalery;
