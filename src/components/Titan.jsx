import titan from "../assets/destination/image-titan.png";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Titan() {
  const {
    changeDestinationToMoon,
    changeDestinationToMars,
    changeDestinationToEuropa,
  } = useContext(AppContext);

  return (
    <div>
      <div className="static pt-20">
        <p
          style={{ fontSize: "17px" }}
          className="text-white font-barlow flex tracking-widest justify-center items-center md:justify-normal md:ml-64 pt-8 md:pt-20"
        >
          <span className="opacity-60 mr-3">01</span> PICK YOUR DESTINATIONS
        </p>
        <div className="md:ml-64 md:mt-12">
          <div className="text-white font-barlow flex flex-col md:flex-row md:gap-20 tracking-widest justify-center items-center pt-8 md:justify-normal md:items-start">
            <div className="pt-0">
              <img src={titan} alt="" className="w-60 md:animate-bounce" />
            </div>
            <div className="flex flex-col">
              <div
                style={{ fontSize: "20px" }}
                className="text-white flex gap-5 justify-center items-center font-barlow pt-8 md:mt-[-80px] md:mr-[513px] tracking-normal md:opacity-70"
              >
                <div
                  className="cursor-pointer"
                  onClick={changeDestinationToMoon}
                >
                  Moon
                </div>
                <div
                  className="cursor-pointer"
                  onClick={changeDestinationToMars}
                >
                  Mars
                </div>
                <div
                  className="cursor-pointer"
                  onClick={changeDestinationToEuropa}
                >
                  Europa
                </div>
                <div className="border-b-2 duration-300 cursor-pointer opacity-100">
                  Titan
                </div>
              </div>
              <div className="pb-10 md:pb-7 flex flex-col justify-center items-center md:justify-normal md:grid">
                <h3 className="font-serif md:ml-5 pt-10 text-6xl md:opacity-70 md:pb-2">
                  TITAN
                </h3>
                <p
                  style={{ fontSize: "15px" }}
                  className="font-barlow md:text-wrap tracking-normal mt-7 md:mt-5 md:opacity-70 px-5 md:px-0"
                >
                  The only moon known to have a dense atmosphere other than
                  Earth,{" "}
                  <div className="hidden md:flex md:-mb-5">
                    <br />
                  </div>{" "}
                  Titan is a home away from home (just a few hundred degrees
                  colder!).
                  <div className="hidden md:flex md:-mb-5">
                    <br />
                  </div>{" "}
                  As a bonus, you get striking views of the Rings of Saturn.
                </p>
              </div>
              <hr className="pb-10 md:pb-7 opacity-20 w-96" />
              <div className="md:flex flex-row md:gap-24 md:opacity-70 md:tracking-normal">
                <div className="pb-10 flex flex-col justify-center items-center md:items-start md:text-nowrap">
                  <div style={{ fontSize: "20px" }} className="font-barlow">
                    AVG. DISTANCE
                  </div>
                  <div className="font-mono text-3xl">1.6 BIL. KM</div>
                </div>
                <div className="pb-10 flex flex-col justify-center items-center md:items-start md:text-nowrap">
                  <div style={{ fontSize: "20px" }} className="font-barlow">
                    EST. TRAVEL TIMECE
                  </div>
                  <div className="font-mono text-3xl">7 YEARS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
