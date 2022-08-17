import { DeleteOutline } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ChatList({ chatList, setChatList }) {
  let [newChatName, setNewChatName] = useState("");

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
    setChatList([{ id: getNewChatId(), name: chatName }, ...chatList]);
  };

  const getNewChatId = () => {
    if (chatList.length) {
      return chatList.sort((a, b) => b.id - a.id)[0].id + 1;
    }
    return 0;
  };

  const deleteChat = (id) => {
    setChatList(chatList.filter((chat) => chat.id !== id));
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
              <button
                onClick={() => deleteChat(chat.id)}
                className="deleteButton"
              >
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
