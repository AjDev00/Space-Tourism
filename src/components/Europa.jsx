import europa from "../assets/destination/image-europa.png";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Europa() {
  const {
    changeDestinationToMoon,
    changeDestinationToMars,
    changeDestinationToTitan,
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
          <img src={europa} alt="" className="w-60" />
        </div>
        <div
          style={{ fontSize: "20px" }}
          className="text-white flex gap-5 justify-center items-center font-barlow pt-8"
        >
          <div onClick={changeDestinationToMoon}>Moon</div>
          <div onClick={changeDestinationToMars}>Mars</div>
          <div className="border-b-2">Europa</div>
          <div onClick={changeDestinationToTitan}>Titan</div>
        </div>
        <div className="text-white">
          <div className="pb-10 flex flex-col gap-3 justify-center items-center pt-12">
            <h3 className="font-serif text-6xl">EUROPA</h3>
            <p className="font-barlow mt-5 px-5">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </div>
          <hr className="pb-10 opacity-20" />
          <div className="pb-10 flex flex-col justify-center items-center">
            <div style={{ fontSize: "20px" }} className="font-barlow">
              AVG. DISTANCE
            </div>
            <div className="font-mono text-3xl">628 MIL. KM</div>
          </div>
          <div className="pb-10 flex flex-col justify-center items-center">
            <div style={{ fontSize: "20px" }} className="font-barlow">
              EST. TRAVEL TIMECE
            </div>
            <div className="font-mono text-3xl">3 YEARS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
