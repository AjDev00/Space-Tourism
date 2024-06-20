import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/shared/logo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const { navClicked, handleNavClicked } = useContext(AppContext);

  return (
    <div>
      <div className="bg-mobileBgImage bg-cover bg-center h-screen bg-fixed">
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
        <div className="">
          <div>
            <div className="pb-10">
              <div>
                <h3 className="font-barlow text-white text-2xl opacity-80 flex justify-center items-center pt-8">
                  S0, YOU WANT TO TRAVEL TO
                </h3>
              </div>
              <div className="font-serif text-8xl flex justify-center items-center mt-5 text-white">
                <h1>SPACE</h1>
              </div>
            </div>
            <div>
              <p className="font-barlow text-white opacity-90 px-5">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          <div className="items-center justify-center flex mt-10">
            <Link to="/destination">
              <div className="animate-bounce border border-white bg-white p-16 w-40 rounded-full flex justify-center items-center">
                <h3 className="font-mono text-2xl">EXPLORE</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
