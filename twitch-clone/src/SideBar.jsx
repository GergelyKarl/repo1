import React from "react";
import "./SideBar.css";
import Channel from "./Channel";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Követett Csatornák</h5>
        <Channel
          name="ger"
          followers="850k"
          avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <h5>Ajánlott Csatornák</h5>

        <Channel
          name="ger"
          followers="850k"
          avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <Channel
          name="ger"
          followers="850k"
          avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />

        <Channel
          name="ger"
          followers="850k"
          avatar="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <p className="sidebar__topShowMore">Mutass többet</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Barátok keresése" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
