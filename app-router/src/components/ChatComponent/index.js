"use client";

// import styles from "./chat_component.module.scss";

// import PrivateRoute from "../PrivateRoute";
import React, { useState } from "react";
import { postChat } from "@/api/chatgpt";
// import { useAuth } from "@/hooks/auth_hook";

const ChatData = {
}

const ChatComponent = () => {
  // const { username, isLoading } = useAuth();

  /** ユーザーが入力したメッセージのstate */
  const [content, setContent] = useState("");
  /** 現在のセッションでの会話履歴のstate */
  const [chatList, setChatList] = useState([]);

  // if (isLoading) return <h1>Loading...</h1>;

  const onChangeContent = (event) =>
    setContent(event.target.value);

  /**  
   *  ユーザー名とユーザーが入力したメッセージをパラメータとして、APIを呼び出す
   *  会話履歴を表示するために、ユーザーのメッセージとAPIのレスポンスをchatListに追加する
   */
  const postMessage = async () => {
    const data = {
      message: content,
      sessionId: username,
    };

    /** ユーザーの入力した内容をchatListに追加 */
    setChatList((prevChatList) => [
      ...prevChatList,
      { actor: "human", content: data.message },
    ]);

    try {
      const res = await postChat(data);
      /** chatGPTのメッセージをchatListに追加  */
      setChatList((prevChatList) => [
        ...prevChatList,
        { actor: "ai", content: res.data },
      ]);
    } catch (error) {
      console.log(error);
    }

    setContent("");
  };

  /** ユーザーのメッセージとChatGPTのメッセージでスタイルを変えている
   * （某メッセージアプリをイメージ） 
   */
  return (
    <div>
      <div className="chatArea">
        {chatList.map((item, index) => {
          return (
            <div className="chatContainer" key={index}>
              <p
                key={index}
                className={
                  item.actor === "ai" ? "chatAi" : "chatHuman"
                }
              >
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
      <div className="postChat">
        <input
          id="postChatContent"
          type="text"
          placeholder="投稿内容"
          value={content}
          onChange={onChangeContent}
        />
        <button id="postBtn" onClick={postChat}>
          投稿
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;