import { useDispatch, useSelector } from "react-redux";

const styles = {
  wrapper: {
    width: "fit-content",
    display: "flex",
    margin: "100px auto 0",
    alignItems: "center",
  },
  button: {
    width: "50px",
    height: "30px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "rgb(43, 129, 129)",
    color: "white",
  },
  counter: {
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "bold",
  },
};

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increaseCounter = () => {
    dispatch({ type: "INCREASE" });
  };

  const decreaseCounter = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div style={styles.wrapper}>
      <button style={styles.button} onClick={() => decreaseCounter()}>
        -
      </button>
      <p style={styles.counter}>{counter}</p>
      <button style={styles.button} onClick={() => increaseCounter()}>
        +
      </button>
    </div>
  );
}

export default App;
