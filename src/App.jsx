import "./App.css";
import Destination from "./components/Destination";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

export const AppContext = createContext();

function App() {
  //navbar show and hide.
  const [navClicked, setNavClicked] = useState(false);

  function handleNavClicked() {
    setNavClicked(!navClicked);
  }

  const lists = [
    {
      id: 0,
      link: "Home",
      to: "/",
    },
    {
      id: 1,
      link: "Destination",
      to: "/destination",
    },
    {
      id: 2,
      link: "Crew",
    },
    {
      id: 3,
      link: "Technology",
    },
  ];

  return (
    <div className="App">
      <AppContext.Provider
        value={{ navClicked, handleNavClicked, lists, setNavClicked }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
              <NavBar />
            </Route>
            <Route path="/destination">
              <Destination />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
