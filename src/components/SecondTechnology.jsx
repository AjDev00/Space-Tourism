import { useContext } from "react";
import spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import { AppContext } from "../App";

export default function SecondTechnology() {
  const { changeTechToVehicle, changeTechToCapsule } = useContext(AppContext);

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
          <img src={spaceport} alt="" className="h-56" />
        </div>
        <div className="flex flex-row justify-center items-center pt-10 gap-5">
          <span
            onClick={changeTechToVehicle}
            className="border-2 border-white font-barlow rounded-full p-3 w-12 h-12 flex items-center justify-center"
          >
            1
          </span>
          <span className="border-2 border-white font-barlow rounded-full p-3 w-12 h-12 flex items-center justify-center font-bold bg-white text-black">
            2
          </span>
          <span
            onClick={changeTechToCapsule}
            className="border-2 border-white font-barlow  rounded-full p-3 w-12 h-12 flex items-center justify-center"
          >
            3
          </span>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 pb-12">
          <p className="text-slate-400 text-2xl font-barlow mb-7">
            THE TERMINOLOGY...
          </p>
          <h4 className="font-serif text-3xl">SPACEPORT</h4>
          <div className="ml-3">
            <p className="font-barlow px-5 mt-5">
              A spaceport or cosmodrome is a site for launching (or receiving)
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth’s rotation for
              launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
