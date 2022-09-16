import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/profileReducer/selectors";

function Form({ id }) {
  let [messageText, setMessageText] = useState("");
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const textHandle = (event) => {
    setMessageText((messageText = event.target.value));
  };

  const formHandle = (e) => {
    e.preventDefault();
    if (messageText) {
      dispatch({
        type: "ADD_MESSAGE",
        payload: {
          chatId: id,
          id: Date.now(),
          text: messageText,
          author: user.displayName,
        },
      });
    }
    setMessageText("");
  };

  return (
    <form className="messageForm" onSubmit={formHandle}>
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
