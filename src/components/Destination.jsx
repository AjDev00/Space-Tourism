import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/shared/logo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titan from "./Titan";
import NavBar from "./NavBar";

export default function Destination() {
  const { navClicked, handleNavClicked, lists, setNavClicked, destinations } =
    useContext(AppContext);

  function handleClick() {
    setNavClicked(false);
  }

  return (
    <div>
      <div className="bg-mobileDestinationBgImage bg-cover bg-center min-h-screen bg-fixed md:bg-desktopDestinationBgImage">
        <div className="fixed w-full">
          <div className="flex flex-row justify-between px-5 py-7 items-center md:px-36">
            <div>
              <img src={logo} alt="" />
            </div>
            <div onClick={handleNavClicked} className="z-10 md:hidden">
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

            {/* //larger screen nav. */}
            <div className="hidden md:text-white md:flex gap-4 md:bg-slate-500 md:bg-opacity-15 md:backdrop-blur-lg md:border-transparent md:border-gray-700 md:frosted-glass md:p-7 md:px-36 md:-mr-36">
              {lists.map((list) => (
                <ul key={list.id} className="flex flex-row gap-2 mr-6">
                  <p>0{list.id}</p>
                  <div>
                    <Link to={list.to}>
                      <li>{list.link}</li>
                    </Link>
                  </div>
                </ul>
              ))}
            </div>
          </div>
          <div className="md:flex flex-row md:px-44 md:mt-12 md:justify-center md:items-center">
            <div className="md:w-96 md:absolute md:top-[68px] md:mr-[450px] opacity-50">
              <span className="hidden md:grid">
                <hr />
              </span>
            </div>
          </div>
          <div>{navClicked ? <NavBar /> : ""}</div>
        </div>
        <div>{destinations === 0 && <Moon />}</div>
        <div>{destinations === 1 && <Mars />}</div>
        <div>{destinations === 2 && <Europa />}</div>
        <div>{destinations === 3 && <Titan />}</div>
      </div>
    </div>
  );
}
