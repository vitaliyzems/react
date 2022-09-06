import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../redux/actionCreators";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginInitiate(email, password));
    }
  };

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={"email"}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={"password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: "18px" }}>
        Need an account?
        <button style={{ marginLeft: "10px" }} onClick={handleClick}>
          SignUp
        </button>
      </div>
    </div>
  );
}
