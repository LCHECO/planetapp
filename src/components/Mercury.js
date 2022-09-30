import React from "react";
import FirstPlanet from "./assets/planet-mercury.svg";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import PlanetsData from "../starter-code/data";


const MercuryData = PlanetsData.filter(function(PlanetData) {
  return PlanetData.name === "Mercury";
});
console.log(MercuryData);

const Mercury = () => {
  
  return (
    <div className="flex container h-screen pt-[50px]">
      <img className="mx-auto h-80 pt-10" src={FirstPlanet} alt="mercury" />
      <div className="flex flex-col mx-auto space-x-2 text-white">
        <h1 className="text-7xl pr-[50px] capitalize">Mercury</h1>
        <p className="pt-5 w-48 font-light opacity-50 text-left">Content</p>
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
        <div className="grid grid-cols-4 w-max text-white  items-center">
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
