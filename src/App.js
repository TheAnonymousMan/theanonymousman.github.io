import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  Dropdown,
  Button,
  ButtonGroup,
  Navbar,
  Container,
} from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import RaymondEdmund from "./images/RaymondEdmund.png";
import Home from "./Home";
import MyGames from "./MyGames";
import SolarSystemSimulation from "./Games/SolarSystemSimulation";
import RollerMadness from "./Games/RollerMadness";
import BoxShooter from "./Games/BoxShooter";
import BackHome from "./Games/BackHome";
import KeepCliveAlive from "./Games/KeepCliveAlive";
import EverythingIsFine from "./Games/EverythingIsFine";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <img alt="Souporno Ghosh" src={RaymondEdmund} />{" "}
              <Link to="/">The Anonymous Man</Link>
            </Navbar.Brand>
            <Nav variant="pills">
              <Nav.Link>
                <Button>
                  <Link to="/">Home</Link>
                </Button>
              </Nav.Link>
              <Dropdown as={ButtonGroup}>
                <Button>
                  <Link to="/MyGames">My Games</Link>
                </Button>
                <Dropdown.Toggle split />
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/MyGames/SolarSystemSimulation">
                      Solar System Simulation
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/MyGames/RollerMadness">Roller Madness</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/MyGames/BoxShooter">Box Shooter</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/MyGames/BackHome">Back Home</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/MyGames/KeepCliveAlive">Keep Clive Alive</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/MyGames/EverythingIsFine">
                      Everything Is Fine
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link>
                <Button>
                  <Link to="/AboutMe">About Me</Link>
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <hr />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/MyGames/">
              <MyGames />
            </Route>
            <Route path="/MyGames/SolarSystemSimulation">
              <SolarSystemSimulation />
            </Route>
            <Route path="/MyGames/RollerMadness">
              <RollerMadness />
            </Route>
            <Route path="/MyGames/BoxShooter">
              <BoxShooter />
            </Route>
            <Route path="/MyGames/BackHome">
              <BackHome />
            </Route>
            <Route path="/MyGames/KeepCliveAlive">
              <KeepCliveAlive />
            </Route>
            <Route path="/MyGames/EverythingIsFine">
              <EverythingIsFine />
            </Route>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>
          </Switch>
          <hr />
        </div>
      </div>
      <Footer />
    </Router>
  );
}
