import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";

function Form({ id }) {
  let [messageText, setMessageText] = useState("");
  let [messageAuthor, setMessageAuthor] = useState("");
  const dispatch = useDispatch();

  const textHandle = (event) => {
    setMessageText((messageText = event.target.value));
  };

  const authorHandle = (event) => {
    setMessageAuthor((messageAuthor = event.target.value));
  };

  const formHandle = (e) => {
    e.preventDefault();
    if (messageText && messageAuthor) {
      dispatch({
        type: "ADD_MESSAGE",
        payload: {
          chatId: id,
          id: Date.now(),
          text: messageText,
          author: messageAuthor,
        },
      });
    }
    setMessageText("");
    setMessageAuthor("");
  };

  return (
    <form className="messageForm" onSubmit={formHandle}>
      <TextField
        value={messageAuthor}
        onChange={authorHandle}
        id="standard-basic"
        label="Ваше имя"
        variant="standard"
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
