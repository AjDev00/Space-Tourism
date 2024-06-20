import { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function NavBar() {
  const { lists } = useContext(AppContext);
  const { navClicked } = useContext(AppContext);
  const { setNavClicked } = useContext(AppContext);

  function handleClick() {
    setNavClicked(false);
  }

  return (
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
  );
}
