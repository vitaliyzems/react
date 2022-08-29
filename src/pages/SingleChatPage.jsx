import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import Messages from "../components/Messages";
import ModalBotAnswer from "../components/ModalBotAnswer";
import { getChatList } from "../store/chatReduser/selectors";

function SingleChatPage() {
  let [botMessage, setBotMessage] = useState([]);
  const chatList = useSelector(getChatList);

  const { id } = useParams();
  const name = chatList.find((chat) => chat.id === Number(id))?.name;

  return (
    <div className="chatPageWrapper container">
      <h1 className="chatName">{name}</h1>
      <Form id={id} />
      <Messages id={id} />
      <ModalBotAnswer handler={setBotMessage} author={botMessage[0]} />
    </div>
  );
}

export default SingleChatPage;
