import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import Messages from "../components/Messages";
import ModalBotAnswer from "../components/ModalBotAnswer";

function SingleChatPage({ chatList }) {
  let [messageList, setMessageList] = useState([]);
  let [botMessage, setBotMessage] = useState([]);

  const { id } = useParams();
  const name = chatList.find((chat) => chat.id === Number(id))?.name;

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length) {
        setBotMessage([messageList[messageList.length - 1].author]);
      }
    }, 1500);
  }, [messageList]);

  const addNewMessage = (message) => {
    setMessageList((messageList = [...messageList, message]));
  };

  return (
    <div className="chatPageWrapper container">
      <h1 className="chatName">{name}</h1>
      <Form addNewMessage={addNewMessage} />
      <Messages messageList={messageList} />
      <ModalBotAnswer handler={setBotMessage} author={botMessage[0]} />
    </div>
  );
}

export default SingleChatPage;
