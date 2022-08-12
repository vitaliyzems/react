import React, { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";

function Form(props) {
  let [messageText, setMessageText] = useState("");
  let [messageAuthor, setMessageAuthor] = useState("");

  const inputEl = useRef(null);

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
      inputEl.current.focus();
    }
    event.preventDefault();
  };

  return (
    <form className="messageForm" onSubmit={handler}>
      <TextField
        value={messageAuthor}
        onChange={authorHandle}
        id="standard-basic"
        label="Ваше имя"
        variant="standard"
        inputRef={inputEl}
      />
      <TextField
        value={messageText}
        onChange={textHandle}
        id="standard-basic"
        label="Сообщение"
        variant="standard"
        margin="normal"
      />
      <Button type="submit" variant="outlined">
        Отправить
      </Button>
    </form>
  );
}

export default Form;
