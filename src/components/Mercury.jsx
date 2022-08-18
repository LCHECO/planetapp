import React from "react";
import MercuryImg from "../starter-code/assets/planet-mercury.svg";
import data from '../starter-code/data.json';


const Mercury = () => {
  const header = data.filter(obj => obj.id==="1");

  return (
    <div className="flex flex-row py-[250px] px-[600px] max-w-full items-center mx-auto space-x-[250px]">
      <div>
        <img className="" src={MercuryImg} alt="/" />
      </div>
      
        <div className="text-white px-5">
          <h1>{header}</h1>
      </div>
        
    </div>
  );
};
export default Mercury;
