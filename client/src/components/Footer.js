import React from "react";
import Logo from "../img/$wagGorilla.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made by Jin Kim with <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;