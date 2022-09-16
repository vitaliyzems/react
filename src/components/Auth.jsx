import { useState } from "react";
import { Signup } from "../components/Signup";
import { Signin } from "../components/Signin";
import { Button } from "@mui/material";

export function Auth() {
  const [signup, setSignup] = useState(false);

  return (
    <>
      {signup ? (
        <>
          <Signup />
          <div className="authWrapper">
            <p>Already have an account?</p>
            <Button
              onClick={() => setSignup(false)}
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "rgb(43, 129, 129)",
                marginTop: 5,
              }}
            >
              Sign in
            </Button>
          </div>
        </>
      ) : (
        <>
          <Signin />
          <div className="authWrapper">
            <p>Need an account?</p>
            <Button
              onClick={() => setSignup(true)}
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "rgb(43, 129, 129)",
                marginTop: 5,
              }}
            >
              Sign up
            </Button>
          </div>
        </>
      )}
    </>
  );
}
