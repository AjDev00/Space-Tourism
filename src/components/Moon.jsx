import moon from "../assets/destination/image-moon.png";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Moon() {
  const {
    changeDestinationToMars,
    changeDestinationToEuropa,
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
          <img src={moon} alt="" className="w-60" />
        </div>
        <div
          style={{ fontSize: "20px" }}
          className="text-white flex gap-5 justify-center items-center font-barlow pt-8"
        >
          <div className="border-b-2 duration-300">Moon</div>
          <div onClick={changeDestinationToMars}>Mars</div>
          <div onClick={changeDestinationToEuropa}>Europa</div>
          <div onClick={changeDestinationToTitan}>Titan</div>
        </div>
        <div className="text-white">
          <div className="pb-10 flex flex-col gap-3 justify-center items-center pt-12">
            <h3 className="font-serif text-6xl">MOON</h3>
            <p className="font-barlow mt-5 px-5">
              See our planet as you've never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you're there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <hr className="pb-10 opacity-20" />
          <div className="pb-10 flex flex-col justify-center items-center">
            <div style={{ fontSize: "20px" }} className="font-barlow">
              AVG. DISTANCE
            </div>
            <div className="font-mono text-3xl">384,400 KM</div>
          </div>
          <div className="pb-10 flex flex-col justify-center items-center">
            <div style={{ fontSize: "20px" }} className="font-barlow">
              EST. TRAVEL TIMECE
            </div>
            <div className="font-mono text-3xl">3 DAYS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
