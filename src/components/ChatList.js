import { DeleteOutline } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getChatList } from "../store/chatReduser/selectors";

function ChatList() {
  let [newChatName, setNewChatName] = useState("");
  const chatList = useSelector(getChatList);
  const dispatch = useDispatch();

  const inputHandle = (event) => {
    setNewChatName(event.target.value);
  };

  const formHandle = (event) => {
    event.preventDefault();
    if (newChatName) {
      addNewChat(newChatName);
    }
    setNewChatName("");
  };

  const addNewChat = (chatName) => {
    dispatch({
      type: "ADD_CHAT",
      payload: { id: getNewChatId(), name: newChatName },
    });
  };

  const getNewChatId = () => {
    if (chatList.length) {
      return chatList.sort((a, b) => b.id - a.id)[0].id + 1;
    }
    return 0;
  };

  const deleteChat = (chat) => {
    dispatch({
      type: "DELETE_CHAT",
      payload: chat,
    });
  };

  return (
    <div className="chatListWrapper">
      <form onSubmit={formHandle} style={{ width: 300, paddingBottom: 50 }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Добавить чат"
          variant="outlined"
          onChange={inputHandle}
          value={newChatName}
        />
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "rgb(43, 129, 129)",
            width: 300,
            marginTop: 5,
          }}
        >
          Добавить
        </Button>
      </form>
      <div className="chatList">
        {chatList.map((chat) => {
          return (
            <div className="linkBox" key={chat.id}>
              <Link className="chatLink" to={`/chats/${chat.id}`}>
                {chat.name}
              </Link>
              <button className="deleteButton" onClick={() => deleteChat(chat)}>
                <DeleteOutline />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatList;
