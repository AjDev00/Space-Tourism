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

export default function Destination() {
  const { navClicked, handleNavClicked, lists, setNavClicked, destinations } =
    useContext(AppContext);

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
        <div>{destinations === 0 && <Moon />}</div>
        <div>{destinations === 1 && <Mars />}</div>
        <div>{destinations === 2 && <Europa />}</div>
        <div>{destinations === 3 && <Titan />}</div>
      </div>
    </div>
  );
}
