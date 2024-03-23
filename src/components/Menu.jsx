function Menu({ menuStyles }) {
  const ul_styles = {
    color: "DarkGray",
    ...menuStyles,
  };

  const menuNombre = [
    { nombre: "About", path: "#" },
    { nombre: "Careers", path: "#" },
    { nombre: "Events", path: "#" },
    { nombre: "Products", path: "#" },
    { nombre: "Support", path: "#" },
  ];

  return (
    <ul style={ul_styles} className="md:flex gap-x-3 md:items-center md:justify-center">
      {menuNombre.map((nombre, index) => (
        <li
          className="pt-5 md:pt-0 md:relative group md:text-white "
          key={index}
        >
          {nombre.nombre}
          <span className="md:absolute left-1/2 transform -translate-x-1/2 w-[30%] h-0.5 bg-white md:transform md:scale-x-0 md:transition-transform duration-300 -bottom-3 group-hover:scale-x-100"></span>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
