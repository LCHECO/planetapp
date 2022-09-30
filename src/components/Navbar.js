import React from "react";


const Navbar = () => {
  return (
    <div className="flex font-sans justify-between items-center w-full px-4 text-white border-b-2">
      <div>
        <h1 className="py-3 px-6 text-4xl hover:scale-105 duration-200"><a href="/">THE PLANETS</a></h1>
      </div>
      <ul className="flex space-x-8 pr-8 capitalize text-xl">
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/">MERCURY</a></li>
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/venus">VENUS</a></li>
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/earth">EARTH</a></li>
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/mars">MARS</a></li>
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/jupiter">JUPITER</a></li>
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/saturn">SATURN</a></li>
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/uranus">URANUS</a></li>
        <li className="cursor-pointer hover:scale-105 duration-200"><a href="/neptune">NEPTUNE</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
