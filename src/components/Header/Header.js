import React from "react";
import "./Header.scss";
import logo from "../../assets/logos/logo@1x.png";

export const Header = () => {
  return (
    <section className="Header">
      <figure className="Header_figure">
        <img src={logo} alt="playline logo" />
      </figure>
    </section>
  );
};
