import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ".././App.css";

export default function App() {
  return (
    <div>
      <h1>Solar System Simulation</h1>
      <p className="game-embed">
        <iframe
          title="Solar System Simulation Game"
          frameborder="0"
          src="https://itch.io/embed-upload/2606529?color=333333"
          allowfullscreen=""
          width="980"
          height="640"
        >
          <a href="https://the-anonymous-man.itch.io/solar-system-simulation">
            Play Solar System Simulation on itch.io
          </a>
        </iframe>
      </p>
      <h2>Instructions</h2>
      <p>
        Click on the planets and the moons to follow the planets and the moons.
        Click on the Sun to follow the Sun (which is actually stationary).
      </p>
      <h2>About the Game</h2>
      <p>
        I wouldn't really call this a game. It was however the first project I
        made in Unity3D. Something I am really proud of. It was the begining of
        my life as an amateur video game designer.
      </p>
      <p>
        The relative speeds of the planets are almost accurate. The sizes are
        not that accurate, but they do correspond a little to real data.
      </p>
      <p>
        This project was the part of the Introduction to Game Development course
        by Michigan State University on Coursera.{" "}
        <a href="https://www.coursera.org/learn/game-development">
          This is the link to the course.
        </a>
      </p>
      <h2>Credits</h2>
      <b>Game Designed by</b> Michigan State University <br />
      <b>Game Developed by</b> Souporno Ghosh <br />
      <b>Game Poster by</b> Noyonika Saha
    </div>
  );
}
