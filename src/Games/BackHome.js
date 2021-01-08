import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ".././App.css";

export default function App() {
  return (
    <div>
      <h1>Back Home</h1>
      <p className="game-embed">
        <iframe
          title="Back Home Game"
          frameborder="0"
          src="https://itch.io/embed-upload/1951221?color=333333"
          allowfullscreen=""
          width="960"
          height="560"
        >
          <a href="https://the-anonymous-man.itch.io/back-home">
            Play Back Home on itch.io
          </a>
        </iframe>
      </p>
      <h2>Instructions</h2>
      <p>
        Help the spaceman to fix his broken ship to leave outer space. WASD to
        move, E to pick up and drop items. Oh, remember, oxygen is running out,
        so keep refilling your tanks.
      </p>
      <h2>About this Game</h2>
      <p>
        This is my first <i>game</i> game ever. It was made during the 48 hours
        of Global Game Jam 2020. I had asked quite a few of my friends to
        accompany me to the event. Everyone of them, including the members of
        the Game Dev Track of GCELT Tech Club (my college's technology club)
        were either busy or weren't simply interested. So I went alone.
      </p>
      <p>
        I formed a team there and worked on the game. I have always considered
        this game to be my first practical learning experience in game
        development for me. I loved every second of those 48 hours. I worked
        with many people who were not only passionate but also knew about video
        games and making them.
      </p>
      <p>
        By the way, the game was originally supposed to be a mischeivous boy who
        had broken the stuff in his house and had to fix them before his parents
        returned home.
      </p>
      <h2>Credits</h2>
      <b>Game Designed by</b> Souporno Ghosh <br />
      <b>Gameplay Programming by</b> Indrajit Adhikary <br />
      <b>Art by</b> Dwaipayan Ghosh
    </div>
  );
}
