import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      message: "Whats up",
    },
    {
      name: "Joe",
      image:
        "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      message: "How is going?",
    },
    { message: "Hi" },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p>MATCH DATE 20/08/2020</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" src={message.image} />
            <div>
              <p className="chatScreen__text">{message.message}</p>
            </div>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__text__self">{message.message}</p>
          </div>
        )
      )}

      <div className="chatScreen__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__button"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
