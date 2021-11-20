import React from "react";
import ChatList from "./chatList";
import Chat from "./chat";
import { useSelector } from "react-redux";

export default function Dashboard({ id }) {
  const currentChat = useSelector((state) => state.currentChatId);

  React.useEffect(() => {
    setActiveChat(currentChat);
  }, [currentChat]);

  const [activeChat, setActiveChat] = React.useState(0);
  return (
    <div className="flex">
      <ChatList />
      {activeChat !== 0 ? (
        <Chat id={id} />
      ) : (
        <div className="w-6/12 flex justify-center items-center">
          You don't have a conversation selected
        </div>
      )}
    </div>
  );
}
