import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../store/profileReducer/selectors";

function HomePage() {
  const user = useSelector(getUser);

  if (!user) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div
      className="container"
      style={{ fontSize: 50, width: "fit-content", marginTop: 50 }}
    >
      WELCOME {user?.displayName}
    </div>
  );
}

export default HomePage;
