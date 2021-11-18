import React from "react";
import "../styles/chatList.css";

function ChatList() {
  const chatList = [
    {
      key: 1,
      name: "Chat 1",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 2,
      name: "Chat 2",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 3,
      name: "Chat 3",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 4,
      name: "Chat 4",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 5,
      name: "Chat 5",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 6,
      name: "Chat 6",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 7,
      name: "Chat 7",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 8,
      name: "Chat 8",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
    {
      key: 9,
      name: "Chat 9",
      age: "20",
      height: "5'10",
      location: "New York",
      profilePic:
        "https://andwemet-file.sgp1.cdn.digitaloceanspaces.com/files/61094c5ef76afb5f771a5771",
    },
  ];

  return (
    <div className="chatlistContainer">
      <input
        type="text"
        placeholder="Search display name"
        className="w-full border-solid border-gray-500"
      />
      <div className="chatlist">
        {chatList.map((chat) => {
          return (
            <div className="chatlistItem">
              <img src={chat.profilePic} alt="profile" />
              <div className="chatlistPersonDetails">
                <div className="chatlistItemName">{chat.name}</div>
                <div className="chatlistAHL">
                  <div className="chatlistItemAge">{chat.age} | </div>
                  <div className="chatlistItemHeight">{chat.height} | </div>
                  <div className="chatlistItemLocation">{chat.location}</div>
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
