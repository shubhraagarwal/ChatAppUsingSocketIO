import React from "react";
import ChatList from "./chatList";
import Chat from "./chat";

export default function Dashboard({ id }) {
  const [activeChat, setActiveChat] = React.useState(false);

  return (
    <div className="flex">
      <ChatList />
      {activeChat ? (
        <Chat />
      ) : (
        <div className="w-6/12 flex justify-center items-center">
          You don't have a conversation selected
        </div>
      )}
    </div>
  );
}
