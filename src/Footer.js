import React from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "./App.css";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <i class="fas fa-at"></i>{" "}
        <a href="mailto:contacttheanonymousman@gmail.com">My Email</a> |{" "}
        <i class="fab fa-itch-io"></i>{" "}
        <a href="https://the-anonymous-man.itch.io/">My itch.io Page</a> |{" "}
        <i class="fab fa-github"></i>{" "}
        <a href="https://github.com/TheAnonymousMan">My GitHub Page</a> |{" "}
        <i class="fab fa-discord"></i>{" "}
        <a href="https://discord.com/users/415207243487772673">My Discord ID</a>
        <br />
        <i class="far fa-copyright"></i> Souporno Ghosh 2020
      </Container>
    </div>
  );
}
