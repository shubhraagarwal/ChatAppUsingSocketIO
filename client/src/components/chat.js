import React from "react";
import "../styles/chat.css";
import { useState } from "react";

export default function Chat() {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  function clickHandler() {
    setChat(...chat, message);
  }

  return (
    <div>
      <div className="chatHeader">
        <img
          src="https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771"
          className="chatHeaderImg"
          alt=""
        />
        <div className="chatHeaderName">Chat 1 </div>
        <div className="chatHeaderSettings">
          {" "}
          <img
            src="https://img.icons8.com/external-justicon-flat-justicon/50/000000/external-setting-notifications-justicon-flat-justicon.png"
            alt=""
          />
        </div>
      </div>
      <div className="chatBody">
        <div className="inputField">
          <input
            type="text"
            placeholder="Type a message..."
            className="chatInput"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="chatSend" onClick={clickHandler}>
            <img
              src="https://img.icons8.com/glyph-neue/30/000000/sent.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
