import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/shared/logo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FirstCrewMember from "./FirstCrewMember";
import SecondCrewMember from "./SecondCrewMember";
import ThirdCrewMember from "./ThirdCrewMember";
import FourthCrewMember from "./FourthCrewMember";

export default function Crew() {
  const { navClicked, handleNavClicked, lists, setNavClicked, crew } =
    useContext(AppContext);

  function handleClick() {
    setNavClicked(false);
  }

  return (
    <div>
      <div className="bg-mobileCrewBgImage bg-cover bg-center min-h-screen bg-fixed">
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
        <div>
          {crew === 0 && <FirstCrewMember />}
          {crew === 1 && <SecondCrewMember />}
          {crew === 2 && <ThirdCrewMember />}
          {crew === 3 && <FourthCrewMember />}
        </div>
      </div>
    </div>
  );
}
