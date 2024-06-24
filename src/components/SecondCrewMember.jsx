import { useContext } from "react";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import { AppContext } from "../App";

export default function SecondCrewMember() {
  const { changeCrewToDouglas, changeCrewToVictor, changeCrewToAnsari } =
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
          <div className="md:ml-24 md:mt-16 flex flex-col justify-center items-center md:justify-normal md:items-start">
            <p className="text-slate-400 text-2xl font-barlow mb-1">
              MISSION SPECIALIST
            </p>
            <h4 className="font-serif text-3xl">MARK SHUTTLEWORTH</h4>
            <div className="ml-3 md:-ml-4">
              <p className="font-barlow mt-6 px-5">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind
                <div className="hidden md:flex md:-mb-5">
                  <br />
                </div>{" "}
                the Linux-based Ubuntu operating system. Shuttleworth became the
                first South African
                <div className="hidden md:flex md:-mb-5">
                  <br />
                </div>{" "}
                to travel to space as a space tourist.
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
          </div>
          <div className="flex justify-center items-center pt-14 pb-3 md:mt-[-30px]">
            <img src={mark} alt="" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
