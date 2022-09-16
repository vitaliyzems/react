import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../components/Auth";
import { getUser } from "../store/profileReducer/selectors";
import { Button } from "@mui/material";
import { signoutInitiate } from "../store/profileReducer/actions";
import { getProfileLoading } from "../store/profileReducer/selectors";
import { Loader } from "../components/Loader";

function ProfilePage() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(getProfileLoading);

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Auth />;
  }

  return (
    <div
      style={{
        margin: "10px auto",
        width: "fit-content",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "40px" }}>Hello {user?.displayName}</p>
      <Button
        onClick={() => dispatch(signoutInitiate())}
        variant="contained"
        style={{
          backgroundColor: "rgb(43, 129, 129)",
          width: "300px",
          marginTop: 5,
        }}
      >
        Sign out
      </Button>
    </div>
  );
}

export default ProfilePage;
