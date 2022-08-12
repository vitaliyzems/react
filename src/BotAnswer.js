import React from "react";
import { Alert } from "@mui/material";

function BotAnswer({ author }) {
  if (author.length) {
    return (
      <Alert severity="success">
        Сообщение пользователя {author[author.length - 1]} успешно отправлено
      </Alert>
    );
  } else {
    return <></>;
  }
}

export default BotAnswer;
