import { useContext } from "react";
import spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import spaceport1 from "../assets/technology/image-spaceport-portrait.jpg";
import { AppContext } from "../App";

export default function SecondTechnology() {
  const { changeTechToVehicle, changeTechToCapsule } = useContext(AppContext);

  return (
    <div>
      <div className="static pt-20 text-white">
        <div
          style={{ fontSize: "18px" }}
          className="text-white font-barlow flex tracking-widest justify-center items-center pt-12 pb-12 md:justify-normal md:items-start md:ml-80 md:tracking-normal"
        >
          <p>
            <span className="text-slate-500 mr-3">03</span> SPACE LAUNCH 101
          </p>
        </div>
        <div className="md:flex flex-row-reverse md:px-44 md:gap-24 md:pb-10">
          <div className="pt-10 md:pt-32 md:hidden">
            <img src={spaceport} alt="" className="h-56" />
          </div>
          <div className="hidden md:flex">
            <img src={spaceport1} alt="" className="w-[420px] h-[470px]" />
          </div>
          <div className="md:flex flex-row md:gap-14">
            <div className="flex flex-row md:flex-col justify-center items-center pt-10 gap-5 md:gap-10">
              <span
                onClick={changeTechToVehicle}
                className="cursor-pointer border-2 border-white font-barlow rounded-full p-3 w-12 h-12 flex items-center justify-center"
              >
                1
              </span>
              <span className="cursor-pointer border-2 border-white font-barlow rounded-full p-3 w-12 h-12 flex items-center justify-center md:font-normal font-bold bg-white text-black">
                2
              </span>
              <span
                onClick={changeTechToCapsule}
                className="cursor-pointer border-2 border-white font-barlow  rounded-full p-3 w-12 h-12 flex items-center justify-center"
              >
                3
              </span>
            </div>
            <div className="flex flex-col justify-center items-center pt-4 pb-12 md:justify-normal md:items-start md:mt-24 md:opacity-70">
              <p className="text-slate-400 md:text-slate-500 text-2xl font-barlow mb-7">
                THE TERMINOLOGY...
              </p>
              <h4 className="font-serif text-3xl">SPACEPORT</h4>
              <div className="ml-3 md:ml-0">
                <p className="font-barlow px-5 mt-5 md:px-0">
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft,
                  <div className="hidden md:flex md:-mb-5">
                    <br />
                  </div>{" "}
                  by analogy to the seaport for ships or airport for aircraft.
                  Based in the famous Cape Canaveral, beyond.{" "}
                  <div className="hidden md:flex md:-mb-5">
                    <br />
                  </div>{" "}
                  Our WEB-X carrier rocket is the most powerful in operation.{" "}
                  <div className="hidden md:flex md:-mb-5">
                    <br />
                  </div>{" "}
                  our spaceport is ideally situated to take advantage of the
                  Earth’s rotation for launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
