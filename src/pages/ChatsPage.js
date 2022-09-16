import ChatList from "../components/ChatList";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../store/profileReducer/selectors";

function ChatsPage() {
  const user = useSelector(getUser);

  if (!user) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <>
      <div className="container">
        <ChatList />
      </div>
    </>
  );
}

export default ChatsPage;
