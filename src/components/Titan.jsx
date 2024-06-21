import titan from "../assets/destination/image-titan.png";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Titan() {
  const {
    changeDestinationToMoon,
    changeDestinationToMars,
    changeDestinationToEuropa,
  } = useContext(AppContext);

  return (
    <div>
      <div className="static pt-20">
        <div
          style={{ fontSize: "18px" }}
          className="text-white font-barlow flex tracking-widest justify-center items-center pt-8"
        >
          <p>
            <span className="opacity-60 mr-3">01</span> PICK YOUR DESTINATIONS
          </p>
        </div>
        <div className="flex justify-center items-center pt-8">
          <img src={titan} alt="" className="w-60" />
        </div>
        <div
          style={{ fontSize: "20px" }}
          className="text-white flex gap-5 justify-center items-center font-barlow pt-8"
        >
          <div onClick={changeDestinationToMoon}>Moon</div>
          <div onClick={changeDestinationToMars}>Mars</div>
          <div onClick={changeDestinationToEuropa}>Europa</div>
          <div className="border-b-2">Titan</div>
        </div>
        <div className="text-white">
          <div className="pb-10 flex flex-col gap-3 justify-center items-center pt-12">
            <h3 className="font-serif text-6xl">TITAN</h3>
            <p className="font-barlow mt-5 px-5">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
          </div>
          <hr className="pb-10 opacity-20" />
          <div className="pb-10 flex flex-col justify-center items-center">
            <div style={{ fontSize: "20px" }} className="font-barlow">
              AVG. DISTANCE
            </div>
            <div className="font-mono text-3xl">1.6 BIL. KM</div>
          </div>
          <div className="pb-10 flex flex-col justify-center items-center">
            <div style={{ fontSize: "20px" }} className="font-barlow">
              EST. TRAVEL TIMECE
            </div>
            <div className="font-mono text-3xl">7 YEARS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
