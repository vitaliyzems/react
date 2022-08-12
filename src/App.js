import React, { useEffect, useState } from "react";
import Form from "./Form";
import Message from "./Message";
import BotAnswer from "./BotAnswer";
import { createTheme, ThemeProvider } from "@mui/material";
import ChatList from "./ChatList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e4620",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  let [messageList, setMessageList] = useState([]);
  let [botMessage, setBotMessage] = useState([]);
  let [chatList] = useState([
    { id: 1, name: "Виктор" },
    { id: 2, name: "Дмитрий" },
    { id: 3, name: "Екатерина" },
    { id: 4, name: "Тимур" },
    { id: 5, name: "Анастасия" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length) {
        setBotMessage([messageList[messageList.length - 1].author]);
      }
    }, 1500);
  }, [messageList]);

  useEffect(() => {
    setTimeout(() => {
      if (botMessage.length) {
        setBotMessage([]);
      }
    }, 3000);
  }, [botMessage]);

  const addNewMessage = (message) => {
    setMessageList((messageList = [...messageList, message]));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Form addNewMessage={addNewMessage} />
        <ChatList chatList={chatList}></ChatList>
        <div>
          {messageList.map((message) => {
            return (
              <Message
                key={message.id}
                text={message.text}
                author={message.author}
              />
            );
          })}
        </div>
        <div className="botAnswer">
          <BotAnswer author={botMessage} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
