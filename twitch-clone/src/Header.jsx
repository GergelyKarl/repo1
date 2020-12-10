import React from "react";
import { Avatar } from "@material-ui/core/";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG34.png"
          alt=""
        />
        <h2>Követés</h2>
        <h2>Böngészés</h2>
        <div className="header__verticalLine"></div>
        <h2>Esport</h2>
        <h2>Zene</h2>
        <h2>
          <i className="fas fa-ellipsis-h"></i>
        </h2>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Keresés" />
        <div className="header__centerLogoContainer">
          <i className="far fa-search"></i>
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>

          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h4>Bitek beszerzése</h4>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
