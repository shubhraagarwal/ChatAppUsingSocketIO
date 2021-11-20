import React from "react";
import "../styles/chat.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import moment from "moment";

export default function Chat({ id }) {
  const [chat, setChat] = useState([
    { message: "", id: "", time: "", chatKey: "" },
  ]);
  const [message, setMessage] = useState("");
  const chatKey = useSelector((state) => state.currentChatId);

  const socketRef = React.useRef();

  React.useEffect(() => {
    console.log("chatKey", chatKey);
    socketRef.current = io("http://127.0.0.1:4000/");
    socketRef.current.on("message", ({ message, id, time, chatKey }) => {
      setChat([...chat, { message, id, time, chatKey }]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [chat, chatKey]);
  function clickHandler() {
    sendMessage(chatKey, message, id);
    setMessage("");
  }

  function sendMessage(chatKey, message, id) {
    console.log(chatKey, message, id);
    socketRef.current.emit("message", {
      message: message,
      id: id,
      time: moment().format("hh:mm A"),
      chatKey: chatKey,
    });
    setChat([
      ...chat,
      { message, id, time: moment().format("hh:mm A"), chatKey },
    ]);
    console.log(chat);
  }

  return (
    <div>
      <div className="chatHeader">
        <img
          src="https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771"
          className="chatHeaderImg"
          alt=""
        />
        {id}
        <div className="chatHeaderName">
          You're chatting with id : {chatKey}
        </div>
        <div className="chatHeaderSettings">
          {" "}
          <img
            src="https://img.icons8.com/external-justicon-flat-justicon/50/000000/external-setting-notifications-justicon-flat-justicon.png"
            alt=""
          />
        </div>
      </div>
      <div className="chatBody">
        {chat.map((data) => {
          console.log(data.chatKey === chatKey, data.id === id);
          if (data.chatKey === chatKey || data.id === id) {
            return (
              <div key={data.index} className="message">
                {data.message}
                {data.id}
                {data.time}
              </div>
            );
          } else if (data.chatKey === id || data.id === chatKey) {
            return (
              <div key={data.index} style={{ color: "blue" }}>
                {data.message}
                {data.id}
                {data.time}
              </div>
            );
          }
        })}
        <div className="inputField">
          <input
            type="text"
            placeholder="Type a message..."
            className="chatInput"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && clickHandler()}
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
