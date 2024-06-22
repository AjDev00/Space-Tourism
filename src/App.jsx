import "./App.css";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Technology from "./components/Technology";

export const AppContext = createContext();

function App() {
  //navbar show and hide.
  const [navClicked, setNavClicked] = useState(false);

  function handleNavClicked() {
    setNavClicked(!navClicked);
  }

  //navbar params.
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
      to: "/crew",
    },
    {
      id: 3,
      link: "Technology",
      to: "/technology",
    },
  ];

  //destination params.
  const [destinations, setDestinations] = useState(0);

  function changeDestinationToMoon() {
    setDestinations(0);
  }

  function changeDestinationToMars() {
    setDestinations(1);
    console.log(destinations);
  }

  function changeDestinationToEuropa() {
    setDestinations(2);
  }

  function changeDestinationToTitan() {
    setDestinations(3);
  }

  //crew params.
  const [crew, setCrew] = useState(0);

  function changeCrewToDouglas() {
    setCrew(0);
  }

  function changeCrewToMark() {
    setCrew(1);
  }

  function changeCrewToVictor() {
    setCrew(2);
  }

  function changeCrewToAnsari() {
    setCrew(3);
  }

  //technology params.
  const [technology, setTechnology] = useState(0);

  function changeTechToVehicle() {
    setTechnology(0);
  }

  function changeTechToSpace() {
    setTechnology(1);
  }

  function changeTechToCapsule() {
    setTechnology(2);
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          navClicked,
          handleNavClicked,
          lists,
          setNavClicked,
          destinations,
          changeDestinationToMars,
          changeDestinationToMoon,
          changeDestinationToEuropa,
          changeDestinationToTitan,
          crew,
          changeCrewToDouglas,
          changeCrewToMark,
          changeCrewToVictor,
          changeCrewToAnsari,
          technology,
          changeTechToVehicle,
          changeTechToSpace,
          changeTechToCapsule,
        }}
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
            <Route path="/crew">
              <Crew />
            </Route>
            <Route path="/technology">
              <Technology />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
