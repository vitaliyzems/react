import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupInitiate } from "../store/profileReducer/actions";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const formHandle = (e) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch(signupInitiate(name, email, password));
    }
  };

  return (
    <form
      onSubmit={formHandle}
      style={{
        width: "400px",
        margin: "10px auto",
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Ваше имя"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        value={name}
        style={{ marginBottom: "5px" }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        style={{ marginBottom: "5px" }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Пароль"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button
        type="submit"
        variant="contained"
        style={{
          backgroundColor: "rgb(43, 129, 129)",
          width: "100%",
          marginTop: 5,
        }}
      >
        Sign up
      </Button>
    </form>
  );
}
