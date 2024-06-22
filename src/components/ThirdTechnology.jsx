import { useContext } from "react";
import capsule from "../assets/technology/image-space-capsule-landscape.jpg";
import { AppContext } from "../App";

export default function ThirdTechnology() {
  const { changeTechToVehicle, changeTechToSpace } = useContext(AppContext);

  return (
    <div>
      <div className="static pt-20 text-white">
        <div
          style={{ fontSize: "18px" }}
          className="text-white font-barlow flex tracking-widest justify-center items-center pt-12 pb-12"
        >
          <p>
            <span className="text-slate-400 mr-3">03</span> SPACE LAUNCH 101
          </p>
        </div>
        <div className="pt-10">
          <img src={capsule} alt="" className="h-56" />
        </div>
        <div className="flex flex-row justify-center items-center pt-10 gap-5">
          <span
            onClick={changeTechToVehicle}
            className="border-2 border-white font-barlow rounded-full p-3 w-12 h-12 flex items-center justify-center"
          >
            1
          </span>
          <span
            onClick={changeTechToSpace}
            className="border-2 border-white font-barlow rounded-full p-3 w-12 h-12 flex items-center justify-center"
          >
            2
          </span>
          <span className="border-2 border-white font-barlow rounded-full p-3 w-12 h-12 flex items-center justify-center font-bold bg-white text-black">
            3
          </span>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 pb-12">
          <p className="text-slate-400 text-2xl font-barlow mb-7">
            THE TERMINOLOGY...
          </p>
          <h4 className="font-serif text-3xl">SPACE CAPSULE</h4>
          <div className="ml-3">
            <p className="font-barlow px-5 mt-5">
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
