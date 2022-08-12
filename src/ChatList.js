import React from "react";
import { List, ListItem, ListItemButton } from "@mui/material";

function ChatList({ chatList }) {
  return (
    <List
      sx={{
        width: 450,
      }}
    >
      {chatList.map((chat) => {
        return (
          <ListItem key={chat.id} sx={{ padding: 0, fontSize: 20 }}>
            <ListItemButton>{chat.name}</ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ChatList;
