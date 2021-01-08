import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import wholesomeImage from "./images/Le Moi drawing Le Moi.png";

export default function App() {
  return (
    <div>
      <h1>Welcome to the website of The Anonymous Man!</h1>
      <hr />
      <h4>Who am I?</h4>
      <p>
        I am Souporno Ghosh (so much for the Anonymous). I make video games.
        Among other stuff.
      </p>
      <h4>What is this?</h4>
      <p>This is my website. I use it to show off all the games I have made.</p>
      <h4>So you can make games on your own?</h4>
      <p>
        Yes. Most of the games I have made are present here. I use Unity and C#
        to make games. I also design these games. I can do small time art and
        animation with Unity too, but nothing too major.
      </p>
      <h4>And you made this website on your own?</h4>
      <p>
        From scratch. I am familiar with HTML, CSS, JavaScript, ReactJS, etc. I
        can even host them on multiple places including AWS, GCP, etc. This one
        is hosted on Github.io, because Github.io is cost effective.
      </p>
      <h4>You mentioned that you do other stuff. What is this other stuff?</h4>
      <p>
        <ul>
          <li>Making Websites</li>
          <li>Programming in various languages and exploring said languages</li>
          <li>Machine Learning with Python</li>
          <li>Drawing cartoons and animation, once in a while</li>
        </ul>
      </p>
      <h4>What would you like to say to everyone?</h4>
      <p>Something I told myself when I first started drawing cartoons.</p>
      <img
        alt="You will get better with practice"
        src={wholesomeImage}
        style={{ width: "40%" }}
      />
      <hr />
      <p>
        By the way, thanks a lot Noyonika Saha to help design the website and
        some of the posters of the games presented here.
      </p>
    </div>
  );
}
