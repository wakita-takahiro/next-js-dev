"use client";
// import styles from "@/components/ChatComponent/chat.module.scss";
import ChatComponent from "@/components/ChatComponent";

const Chat = () => {
  return (
    <div className="container">
      <h1 className="pageTitle">Chatページ</h1>
+       <ChatComponent />
    </div>
  );
};

export default Chat;