import React from "react";
import "./Chats.css";
import Chat from "./components/Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hey Bro"
        timestamp="40 min ago"
        profilePic="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      />
      <Chat
        name="Gavin"
        message="hi"
        timestamp="20 min ago"
        profilePic="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
      <Chat
        name="Melanie"
        message="Ok"
        timestamp="15 min ago"
        profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
    </div>
  );
}

export default Chats;
