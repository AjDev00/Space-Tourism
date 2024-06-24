import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/shared/logo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const { navClicked, handleNavClicked, lists, setNavClicked } =
    useContext(AppContext);

  function handleClick() {
    setNavClicked(false);
  }

  return (
    <div>
      <div className="bg-mobileBgImage bg-cover bg-center h-screen bg-fixed md:bg-desktopBgImage">
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

          {/* //larger screens nav. */}
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
          <div className="md:flex flex-col">
            <div className="pb-10">
              <div>
                <h3 className="font-barlow text-white text-2xl opacity-80 flex justify-center items-center pt-8 md:justify-normal">
                  S0, YOU WANT TO TRAVEL TO
                </h3>
              </div>
              <div className="font-serif text-8xl md:text-9xl flex justify-center items-center mt-5 text-white md:justify-normal md:opacity-70 md:tracking-wider">
                <h1>SPACE</h1>
              </div>
            </div>
            <div className="md:text-wrap md:px-36 md:font-barlow">
              <p className="font-barlow text-white opacity-90 px-5 md:justify-normal md:px-0 md:ml-[-148px]">
                Let's face it; if you want to go to space, you might as well
                <div className="hidden md:flex md:-mb-3">
                  <br />
                </div>
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax
                <div className="hidden md:flex md:-mb-3">
                  <br />
                </div>
                because we'll give you a truly out of this world experience!
              </p>
            </div>
          </div>
          <div className="items-center justify-center flex mt-10 md:justify-normal">
            <Link to="/destination">
              <div className="animate-bounce border border-white bg-white p-16 w-40 md:p-24 md:w-56 md:font-light rounded-full flex justify-center items-center">
                <h3 className="font-mono text-2xl md:font-serif">EXPLORE</h3>
              </div>
            </Link>
          </div>
          <div className="md:w-96 md:absolute md:top-[68px] md:mr-[450px] opacity-50">
            <span className="hidden md:grid">
              <hr />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
