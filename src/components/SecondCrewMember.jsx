import { useContext } from "react";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import { AppContext } from "../App";

export default function SecondCrewMember() {
  const { changeCrewToDouglas, changeCrewToVictor, changeCrewToAnsari } =
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
          <p className="text-slate-400 text-2xl font-barlow mb-1">
            MISSION SPECIALIST
          </p>
          <h4 className="font-serif text-3xl">MARK SHUTTLEWORTH</h4>
          <div className="ml-3">
            <p className="font-barlow mt-6 px-5">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
          <div className="flex flex-row gap-4 pt-12">
            <div
              onClick={changeCrewToDouglas}
              className="cursor-pointer border border-white rounded-full w-3 h-3"
            ></div>
            <div className="cursor-pointer border border-white rounded-full w-3 h-3 bg-white"></div>
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
            <img src={mark} alt="" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
