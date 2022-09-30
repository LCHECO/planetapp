import React from "react";
import FirstPlanet from "./assets/planet-mercury.svg";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import PlanetsData from "../starter-code/data";

const MercuryData = PlanetsData.filter(function (PlanetData) {
  return PlanetData.name === "Mercury";
});
console.log(MercuryData);

const Mercury = () => {
  return (
    <section id="hero">
      <div className="section-container my-40">
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">
          <img src={FirstPlanet} alt="/" className="left-[50%]" />
           {/* Content of Planet */}
          <div className="flex flex-col space-y-6 md:w-1/2 items-center md:flex-row md:space-y-0 md:space-x-6 right-[50%]">
            <h1 className="text-white ">Mercury</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mercury;
