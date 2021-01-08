import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import BoxShooter from "./images/Box Shooter.png";
import RollerMadness from "./images/Roller Madness.png";
import SolarSystemSimulation from "./images/Solar System Simulation.png";
import BackHome from "./images/Back Home.png";
import KeepCliveAlive from "./images/Keep Clive Alive.png";
import EverythingIsFine from "./images/Everything Is Fine.png";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div>
      <Container>
        <h2>My Games</h2>
        <p>
          This page contains all my games. All the games are PC web games.
          You'll need a PC to play them.
        </p>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={EverythingIsFine} />
              <Card.Title>Everything is Fine</Card.Title>
              <Card.Text>
                Help the heavily bugged robot Marvin navigate the post
                apocalyptic wasteland to find the reason for his bugs.
              </Card.Text>
              <Card.Link>
                <Link to="./MyGames/EverythingIsFine">
                  Play Everything Is Fine
                </Link>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={KeepCliveAlive} />
              <Card.Title>Keep Clive Alive</Card.Title>
              <Card.Text>
                Prevent Clive from killing himself by changing the environment
                around him. Follow the story of Clive.
              </Card.Text>
              <Card.Link>
                <Link to="./MyGames/KeepCliveAlive">Play Keep Clive Alive</Link>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={BackHome} />
              <Card.Title>Back Home</Card.Title>
              <Card.Text>
                Help the spaceman repair the ship and get back home before his
                oxygen runs out.
              </Card.Text>
              <Card.Link>
                <Link to="./MyGames/BackHome">Play Back Home</Link>
              </Card.Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={BoxShooter} />
              <Card.Title>Box Shooter</Card.Title>
              <Card.Text>
                Shoot the boxes as they appear before the timer runs out.
                Collect enough points to get to the next level.
              </Card.Text>
              <Card.Link>
                <Link to="./MyGames/BoxShooter">Play Box Shooter</Link>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={RollerMadness} />
              <Card.Title>Roller Madness</Card.Title>
              <Card.Text>
                Use the ball to collect coins. Collect enough coins to get to
                the next level.
              </Card.Text>
              <Card.Link>
                <Link to="./MyGames/RollerMadness/">Play Roller Madness</Link>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={SolarSystemSimulation} />
              <Card.Title>Solar Sytem Simulation</Card.Title>
              <Card.Text>
                An interactive model of the solar system with as accurate as
                possible relative speeds of rotation and revolution.
              </Card.Text>
              <Card.Link>
                <Link to="./MyGames/SolarSystemSimulation/">
                  Start the Solar System Simulation
                </Link>
              </Card.Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
