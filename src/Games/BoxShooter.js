import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ".././App.css";

export default function App() {
  return (
    <div>
      <h1>Box Shooter</h1>
      <p className="game-embed">
        <iframe
          title="Box Shooter Game"
          frameborder="0"
          src="https://itch.io/embed-upload/2606687?color=333333"
          allowfullscreen=""
          width="980"
          height="640"
        >
          <a href="https://the-anonymous-man.itch.io/box-shooter">
            Play Box Shooter on itch.io
          </a>
        </iframe>
      </p>
      <h2>Instructions</h2>
      <p>
        Point and shoot at the boxes. You'll have to figure out what boxes do
        what. There are three types of boxes: One that gives point, one that
        gives time and another that deducts time. In the second level, there is
        a bonus type of box too, try to figure out what is is.
      </p>
      <h2>About this game</h2>
      <p>
        Through this game we were supposed to learn how to script in Unity C#.
        This is the first game in which I wrote code from scratch.
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
