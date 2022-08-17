import { Alert, Button } from "@mui/material";

function ModalBotAnswer({ author, handler }) {
  if (author) {
    return (
      <div className="modalBotAnswer">
        <div className="modalContent">
          <Alert severity="success">
            Сообщение пользователя {author} успешно отправлено
          </Alert>
          <Button
            className="modalButton"
            onClick={() => handler([])}
            variant="outlined"
          >
            Закрыть
          </Button>
        </div>
      </div>
    );
  } else return <></>;
}

export default ModalBotAnswer;
