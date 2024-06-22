import { useContext } from "react";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import { AppContext } from "../App";

export default function FourthCrewMember() {
  const { changeCrewToDouglas, changeCrewToMark, changeCrewToVictor } =
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
            FLIGHT ENGINEER
          </p>
          <h4 className="font-serif text-3xl">ANOUSHEH ANSARI</h4>
          <div className="ml-2">
            <p className="font-barlow mt-6 px-5">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
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
            <div
              onClick={changeCrewToVictor}
              className="cursor-pointer border border-white rounded-full w-3 h-3"
            ></div>
            <div className="cursor-pointer border border-white rounded-full w-3 h-3 bg-white"></div>
          </div>
          <div className="flex justify-center items-center pt-14 pb-3">
            <img src={ansari} alt="" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
