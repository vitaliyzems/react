import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInitiate } from "../redux/actionCreators";

export function HomePage() {
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = user?.displayName;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleClick = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <>
      <div style={{ fontSize: "30px", marginBottom: "10px" }} fontSize="30px">
        Hello {name}
      </div>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}
