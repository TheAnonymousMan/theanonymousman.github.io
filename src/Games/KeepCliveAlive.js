import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ".././App.css";

export default function App() {
  return (
    <div>
      <h1>Keep Clive Alive</h1>
      <p className="game-embed">
        <iframe
          title="Keep Clive Alive Game"
          frameborder="0"
          src="https://itch.io/embed-upload/2154312?color=333333"
          allowfullscreen=""
          width="960"
          height="560"
        >
          <a href="https://the-anonymous-man.itch.io/keep-clive-alive">
            Play Keep Clive Alive on itch.io
          </a>
        </iframe>
      </p>
      <h2>Instructions</h2>
      <p>
        Save Clive from killing himself by changing stuff around him. Telling
        anymore will give the fun away.
      </p>
      <h2>About this Game</h2>
      <p>
        I made this game with two of my friends from school during the 72 hours
        of the Ludum Dare Game Jam 46. One of them interested in programming,
        and the other in art. To be honest, even though we had more time than my
        last jam (where I only had 48 hours), I wasn't sure we, with our very
        limited knowledge would be able to finish making the game.
      </p>
      <p>
        When we heard the theme (Keep It Alive), our mind directly went to
        preventing someone form commiting suicide. Suicide (and mental health)
        has always been a subject close to me. I thought it to be a good
        opportunity to send a message as well. Now, the problem we faced was
        that we didn't simply want to have someone save someone else just by
        talking. That wasn't fun. We might have wanted to make a game that sends
        a message about suicide, but we still wanted it to be fun. Humour came
        into play here. We wanted to save clive in humorous ways.
      </p>
      <p>
        Now, the primary problem here was not that the game was not fun to play.
        It was something that we were satisfied with. But we also didn't want to
        take something as serious as suicide this lightly. Which is why we
        decided to slowly escalate the scenarios. Slowly, through this process
        of iteration and testing, came into being, Keep Clive Alive.
      </p>
      <h2>Credits</h2>
      <b>Game Designed and Directed by</b> Souporno Ghosh and Shubhankar Amitabh <br />
      <b>Gameplay Programming by</b> Souporno Ghosh and Shubhankar Amitabh<br />
      <b>Sound and Art by</b> Kaustav Mukherjee
      <b>Special Thanks to</b> Noyonika Saha
    </div>
  );
}
