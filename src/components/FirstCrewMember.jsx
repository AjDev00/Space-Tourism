import { useContext } from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";
import { AppContext } from "../App";

export default function FirstCrewMember() {
  const { changeCrewToMark, changeCrewToVictor, changeCrewToAnsari } =
    useContext(AppContext);

  return (
    <div>
      <div className="static pt-20 text-white">
        <div
          style={{ fontSize: "18px" }}
          className="text-white font-barlow flex tracking-widest justify-center items-center pt-8"
        >
          <p>
            <span className="text-slate-400 mr-3">02</span> MEET YOUR CREW
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-12">
          <p className="text-slate-400 text-2xl font-barlow mb-1">COMMANDER</p>
          <h4 className="font-serif text-3xl">DOUGLAS HURLEY</h4>
          <div className="ml-3">
            <p className="font-barlow mt-6 px-5">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
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
          <div className="flex justify-center items-center pt-14 pb-3">
            <img src={douglas} alt="" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
