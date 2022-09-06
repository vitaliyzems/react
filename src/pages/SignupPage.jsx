import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupInitiate } from "../redux/actionCreators";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const formHandle = (e) => {
    e.preventDefault();
    dispatch(signupInitiate(email, password, displayName));
  };

  return (
    <>
      <h1>SIGN UP</h1>
      <form onSubmit={formHandle}>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Name"
        />
        <input
          type={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">SIGN UP</button>
      </form>
    </>
  );
}
