import React, { useEffect } from "react";
import "../styles/chatList.css";
import { useDispatch } from "react-redux";
import { currentChat } from "../actions";
function ChatList() {
  const dispatch = useDispatch();
  const [contact, setContact] = React.useState("");
  const [chatList, setChatList] = React.useState([]);

  function addContact() {
    setChatList([
      {
        name: contact,
        key: contact,
        height: "5'10",
        location: "New York",
        profilePic:
          "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
      },
      ...chatList,
    ]);
    localStorage.setItem("chatList", JSON.stringify(chatList));
  }

  function openChat(key) {
    dispatch(currentChat(key));
  }
  return (
    <div className="chatlistContainer">
      <div className="chatContact">
        <input
          type="text"
          placeholder="Enter ID to chat"
          className="w-full border-solid border-gray-500"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button className="bg-blue-600" onClick={addContact}>
          Add contact
        </button>
      </div>
      <div className="chatlist">
        {chatList.map((chat) => {
          return (
            <div className="chatlistItem" key={chat.key}>
              <img src={chat.profilePic} alt="" />
              <div className="chatlistPersonDetails">
                <div className="chatlistItemName">{chat.name}</div>
                <div className="chatlistAHL">
                  <div className="chatlistItemAge">{chat.age} | </div>
                  <div className="chatlistItemHeight">{chat.height} | </div>
                  <div className="chatlistItemLocation">{chat.location} |</div>
                  <button
                    onClick={() => openChat(chat.key)}
                    style={{ color: "blue" }}
                  >
                    Chat
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatList;
