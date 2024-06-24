import { useContext } from "react";
import victor from "../assets/crew/image-victor-glover.png";
import { AppContext } from "../App";

export default function ThirdCrewMember() {
  const { changeCrewToDouglas, changeCrewToMark, changeCrewToAnsari } =
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
        <div className="flex flex-col justify-center items-center pt-12 md:pt-28 md:flex-row md:gap-10">
          <div className="md:ml-36 flex flex-col justify-center items-center md:justify-normal md:items-start">
            <p className="text-slate-400 text-2xl font-barlow mb-1">PILOT</p>
            <h4 className="font-serif text-3xl">VICTOR GLOVER</h4>
            <div className="ml-3 md:-ml-4">
              <p className="font-barlow mt-6 px-5">
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station.{" "}
                <div className="hidden md:flex md:-mb-5">
                  <br />
                </div>{" "}
                Glover is a commander in the U.S. Navy where he pilots an
                F/A-18.He was a crew member of Expedition{" "}
                <div className="hidden md:flex md:-mb-5">
                  <br />
                </div>{" "}
                64, and served as a station systems flight engineer.
              </p>
            </div>
            <div className="flex flex-row gap-4 pt-12">
              <div
                onClick={changeCrewToDouglas}
                className="cursor-pointer border border-white rounded-full w-3 h-3"
              ></div>
              <div
                onClick={changeCrewToMark}
                className="cursor-pointer border border-white rounded-full w-3 h-3"
              ></div>
              <div className="cursor-pointer border border-white rounded-full w-3 h-3 bg-white"></div>
              <div
                onClick={changeCrewToAnsari}
                className="cursor-pointer border border-white rounded-full w-3 h-3"
              ></div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-14 pb-3 md:pt-0 md:mt-[-30px]">
            <img src={victor} alt="" className="w-60 md:w-80" />
          </div>
        </div>
      </div>
    </div>
  );
}
