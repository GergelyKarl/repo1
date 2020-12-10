import React from "react";
import "./Profile.css";
import RecentItem from "./RecentItem"
function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />

        <div className="profile__topLeftDetails">
          <h1>Profle name</h1>
          <h3>100k followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v "></i>
      </div>
      <div className="profile__menu">

          <h2 className="active">Home</h2>
          <h2>About</h2>
          <h2>Schedule</h2>
          <h2>Videos</h2>
          <h2><i className="fas fa-arrow-up"></i></h2>
          <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent Broadcasts</h2>
        <div className="profile__recentItems">
<RecentItem />
        </div>
      </div>
    </div>
  );
}

export default Profile;
