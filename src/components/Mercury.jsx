import React from "react";
import FirstPlanet from "./assets/planet-mercury.svg";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const mercuryData = {
  id: 1,
  name: "MERCURY",
  overview: {
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
  },
  structure: {
    content:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
  },
  geology: {
    content:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
  },
  rotation: "58.6 Days",
  revolution: "87.97 Days",
  radius: "2,439.7 KM",
  temperature: "430°c",
  images: {
    planet: "./assets/planet-mercury.svg",
    internal: "./assets/planet-mercury-internal.svg",
    geology: "./assets/geology-mercury.png",
  },
};

const {
  overview: { content },
  name,
} = mercuryData;

const Mercury = () => {
  return (
    <div className="flex container h-screen pt-[50px]">
      <img className="mx-auto h-80 pt-10" src={FirstPlanet} alt="mercury" />
      <div className="flex flex-col mx-auto space-x-2 text-white">
        <h1 className="text-7xl pr-[50px] capitalize">{name}</h1>
        <p className="pt-5 w-48 font-light opacity-50 text-left">{content}</p>
        <p className="flex flex-row pt-5 space-x-3">
          Source:
          <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">Wikipedia</a>
          <BsFillArrowUpRightSquareFill />
        </p>
        <div className="flex flex-col pt-8">
          <button className="border">01 OVERVIEW</button>
          <button className="border">02 INTERNAL STRUCTURE</button>
          <button className="border">03 SURFACE GEOLOGY</button>
        </div>
      </div>
      <div className="absolute bottom-56">
        <div class="grid grid-cols-4 w-max text-white  items-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </div>
    </div>
  );
};

export default Mercury;
