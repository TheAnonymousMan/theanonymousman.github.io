import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ".././App.css";

export default function App() {
  return (
    <div>
      <h1>Roller Madness</h1>
      <p className="game-embed">
        <iframe
          title="Roller Madness Game"
          frameborder="0"
          src="https://itch.io/embed-upload/2606638?color=333333"
          allowfullscreen=""
          width="980"
          height="640"
        >
          <a href="https://the-anonymous-man.itch.io/roller-madness">
            Play Roller Madness on itch.io
          </a>
        </iframe>
      </p>
      <h2>Instructions</h2>
      <p>
        Use WASD or the arrow keys to move the tennis ball. Avoid touching the
        orange capsules, they are bad. Collect the golden coins, they are nice.
      </p>
      <h2>About the game</h2>
      <p>
        This was the first "game" game that I made. I had a lot of fun making
        it, especially the second level (which we had to design ourselves). Most
        of the resources here are Unity provided. The game has no start menus
        and a very funky music. But it was still my first game.
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
