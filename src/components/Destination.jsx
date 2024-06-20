import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/shared/logo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import moon from "../assets/destination/image-moon.png";

export default function Destination() {
  const { navClicked, handleNavClicked, lists } = useContext(AppContext);
  const { setNavClicked } = useContext(AppContext);

  function handleClick() {
    setNavClicked(false);
  }

  return (
    <div>
      <div className="bg-mobileDestinationBgImage bg-cover bg-center min-h-screen bg-fixed">
        <div className="fixed w-full">
          <div className="flex flex-row justify-between px-5 py-7 items-center">
            <div>
              <img src={logo} alt="" />
            </div>
            <div onClick={handleNavClicked} className="z-10">
              {navClicked ? (
                <FaTimes
                  className="text-white opacity-80 z-10 cursor-pointer"
                  size={45}
                />
              ) : (
                <FaBars
                  className="text-white opacity-80 z-10 cursor-pointer"
                  size={45}
                />
              )}
            </div>
          </div>
          <div>
            {navClicked ? (
              <div
                style={{ fontSize: "20px" }}
                className="absolute text-white font-barlow right-0 top-0 w-72 h-screen bg-slate-900 bg-opacity-40 backdrop-blur-lg border-transparent border-gray-700 frosted-glass"
              >
                {lists.map((list) => (
                  <ul key={list.id} className="px-10">
                    <li className="flex flex-row gap-5 mb-[-380px] py-52">
                      <p>0{list.id}</p>
                      <div onClick={handleClick}>
                        <Link to={list.to}>{list.link}</Link>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
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
            <div className="border-b-2">Moon</div>
            <div>Mars</div>
            <div>Europa</div>
            <div>Titan</div>
          </div>
          <div className="text-white">
            <div className="pb-10 flex flex-col gap-3 justify-center items-center pt-12">
              <h3 className="font-serif text-6xl">MOON</h3>
              <p className="font-barlow mt-5 px-5">
                See our planet as you've never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you're there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
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
    </div>
  );
}
