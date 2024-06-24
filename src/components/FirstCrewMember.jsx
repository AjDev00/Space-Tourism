import { useContext } from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";
import { AppContext } from "../App";

export default function FirstCrewMember() {
  const { changeCrewToMark, changeCrewToVictor, changeCrewToAnsari } =
    useContext(AppContext);

  return (
    <div>
      <div className="static pt-20 text-white">
        <p
          style={{ fontSize: "18px" }}
          className="text-white font-barlow flex tracking-widest justify-center items-center md:justify-normal md:ml-72 pt-8 md:pt-14"
        >
          <span className="text-slate-400 mr-4">02</span> MEET YOUR CREW
        </p>
        <div className="flex flex-col justify-center items-center pt-12 md:flex-row md:gap-10">
          <div className="md:ml-36 flex flex-col justify-center items-center md:justify-normal md:items-start">
            <p className="text-slate-400 text-2xl font-barlow mb-1">
              COMMANDER
            </p>
            <h4 className="font-serif text-3xl">DOUGLAS HURLEY</h4>
            <div className="ml-3 md:-ml-4">
              <p className="font-barlow mt-6 px-5">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former{" "}
                <div className="hidden md:flex md:-mb-5">
                  <br />
                </div>{" "}
                NASA astronaut. He launched into space for the third time as
                commander of Crew{" "}
                <div className="hidden md:flex md:-mb-5">
                  <br />
                </div>{" "}
                Dragon Demo-2.
              </p>
            </div>
            <div className="flex flex-row gap-4 pt-12">
              <div className="cursor-pointer border border-white rounded-full w-3 h-3 bg-white"></div>
              <div
                onClick={changeCrewToMark}
                className="cursor-pointer border border-white rounded-full w-3 h-3"
              ></div>
              <div
                onClick={changeCrewToVictor}
                className="cursor-pointer border border-white rounded-full w-3 h-3"
              ></div>
              <div
                onClick={changeCrewToAnsari}
                className="cursor-pointer border border-white rounded-full w-3 h-3"
              ></div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-14 pb-3 md:pt-0 md:mt-[-30px]">
            <img src={douglas} alt="" className="w-60 md:w-80" />
          </div>
        </div>
      </div>
    </div>
  );
}
