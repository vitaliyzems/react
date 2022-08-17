import React from "react";

function Message(props) {
  return (
    <h3 className="message">
      <span className="transparent">{props.author}</span>: {props.text}
    </h3>
  );
}

export default Message;
