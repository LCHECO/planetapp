import React from "react";
import FirstPlanet from "./assets/planet-mercury.svg";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import PlanetsData from "../starter-code/data";

const MercuryData = PlanetsData.filter(function (PlanetData) {
  return PlanetData.name === "Mercury";
});

console.log(MercuryData)

const { name } = MercuryData;

console.log(name);




const Mercury = () => {
  return (
    // Global Container
    <section id="features">
      <div className="section-container mt-20">
        <div className="relative flex flex-col items-center md:flex-row md:space-x-64">
          {/* <!-- Image --> */}
          <div className="md:w-1/2">
            <img
              src={FirstPlanet}
              alt="/"
              className="md:absolute top-16 right-[50%]"
            />
          </div>

          {/* <!-- Items Container --> */}
          <div className="flex flex-col  mt-10 mb-24 space-y-6 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16 text-white">
            <div className="text-6xl">
              <p>Mercury</p>
            </div>
            <div>
              {/* Planet Content */}
              <p>Lorem</p>
            </div>
            <div>
              <span>
                <span>Source:</span><a href="#"> Wikipedia </a>
              </span>
            </div>
            <section>
              <div className="space-y-3">
                <div className="border text-center">
                  <button><span>01</span> OVERVIEW</button>
                </div>
                <div className="border text-center">
                  <button><span>02</span> INTERNAL STRUCTURE</button>
                </div>
                <div className="border text-center">
                  <button><span>03</span> SURFACE GEOLOGY</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="section-container text-white">
        <div className="flex flex-col items-center justify-center  md:flex-row md:space-y-0 md:max-w-full md:">
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-8 md:gap-64">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            </div>
        </div>
      </section>
    </section>
  );
};

export default Mercury;
