import React, { useEffect, useState } from "react";
import Form from "./Form";
import Message from "./Message";

function App() {
  let [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length > 0) {
        alert(`Здравствуйте, ${messageList[messageList.length - 1].author}`);
      }
    }, 1500);
  });

  const addNewMessage = (message) => {
    setMessageList((messageList = [...messageList, message]));
  };

  return (
    <>
      <Form addNewMessage={addNewMessage} />
      {messageList.map((message) => {
        return (
          <Message
            key={message.id}
            text={message.text}
            author={message.author}
          />
        );
      })}
    </>
  );
}

export default App;
