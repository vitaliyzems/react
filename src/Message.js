import React from 'react';

function Message(props) {
  return (
    <h1 className="message">Hello {props.name}</h1>
  );
}

export default Message;