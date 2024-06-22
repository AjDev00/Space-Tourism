import { useContext } from "react";
import victor from "../assets/crew/image-victor-glover.png";
import { AppContext } from "../App";

export default function ThirdCrewMember() {
  const { changeCrewToDouglas, changeCrewToMark, changeCrewToAnsari } =
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
          <p className="text-slate-400 text-2xl font-barlow mb-1">PILOT</p>
          <h4 className="font-serif text-3xl">VICTOR GLOVER</h4>
          <div className="ml-2">
            <p className="font-barlow mt-6 px-5">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
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
          <div className="flex justify-center items-center pt-14 pb-3">
            <img src={victor} alt="" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
