import React from "react";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Kezdőlap</p>
        
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trend</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Sorozatok</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Kollekció</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>Keresés</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Belépés</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
        alt="Hulu_icon"
      />
    </div>
  );
}

export default Header;
