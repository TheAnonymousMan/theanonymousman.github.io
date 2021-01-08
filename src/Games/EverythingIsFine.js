import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ".././App.css";

export default function App() {
  return (
    <div>
      <h1>Everything is Fine</h1>
      <p className="game-embed">
        <iframe
          src="https://itch.io/embed-upload/2841166?color=005434"
          allowfullscreen=""
          width="960"
          height="560"
          frameborder="0"
        >
          <a href="https://the-anonymous-man.itch.io/everything-is-fine">
            Play Everything is Fine on itch.io
          </a>
        </iframe>
      </p>
      <h2>Instructions</h2>
      <p>
        Marvin is a broken robot. Help him navigate the desolate post
        apocalyptic wasteland to find his creators for some answers.
      </p>
      <h2>About this Game</h2>
      <p>
        I am really proud of this game and how it turned out. We made it during
        the 48 hours of Game Maker's Toolkit (GMTK) Gam Jam 2020. It was my
        third <i>game</i> and my first game that had presentable art (kudos to
        our artist, who also helped design this website). Moreover, everything
        in this game, music, art, design, code, etc. was made from scratch. In
        the 48 hours.
      </p>
      <p>
        One of the projects that I had most fun working on. I believe this work
        to be the crown jewel of my portfolio. Also, there is a little surprise
        at the end of the game.
      </p>
      <h2>Credits</h2>
      <b>Game Designed by</b> Souporno Ghosh and Shubhankar Amitabh <br />
      <b>Gameplay Programming by</b> Souporno Ghosh and Shubhankar Amitabh
      <br />
      <b>Story and Direction by</b> Souporno Ghosh
      <b>Art and Animation by</b> Noyonika Saha
      <b>Music by</b> Shubhankar Amitabh
    </div>
  );
}
