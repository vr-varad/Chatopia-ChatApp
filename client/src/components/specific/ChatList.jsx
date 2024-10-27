/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessages = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const newMessageAlert = newMessages.find(
          (message) => message.chatId === _id
        );
        const isOnline = members.some((member) => onlineUsers.includes(member));
        return (
          <ChatItem
            key={index}
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            _id={_id}
            name={name}
            groupChat={groupChat}
            handleDeleteChat={handleDeleteChat}
            sameSender={_id === chatId} 
          />
        );
      })}

    </Stack>
  );
};

export default ChatList;
