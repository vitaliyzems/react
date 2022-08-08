import React, { useState } from "react";

function Form(props) {
  let [messageText, setMessageText] = useState("");
  let [messageAuthor, setMessageAuthor] = useState("");

  const textHandle = (event) => {
    setMessageText((messageText = event.target.value));
  };

  const authorHandle = (event) => {
    setMessageAuthor((messageAuthor = event.target.value));
  };

  const handler = (event) => {
    if (messageText && messageAuthor) {
      const newMessage = {
        text: messageText,
        author: messageAuthor,
        id: Date.now(),
      };
      props.addNewMessage(newMessage);
      setMessageText((messageText = ""));
      setMessageAuthor((messageAuthor = ""));
    }
    event.preventDefault();
  };

  return (
    <form className="messageForm" onSubmit={handler}>
      <input
        className="messageText"
        value={messageText}
        onChange={textHandle}
        placeholder="Введите сообщение"
      />
      <input
        className="messageAuthor"
        value={messageAuthor}
        onChange={authorHandle}
        placeholder="Как вас зовут?"
      />
      <button className="messageSubmit">Отправить</button>
    </form>
  );
}

export default Form;
