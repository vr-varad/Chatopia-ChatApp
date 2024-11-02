/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponent";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/sampleChats";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "1",
  name: "John Doe",
};

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"#FFF1DB"}
        height={"93%"}
        border={"10px solid greenyellow"}
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {sampleMessage.map((message, index) => (
          <MessageComponent message={message} user={user} key={index} />
        ))}
      </Stack>
      <form
        style={{
          height: "8%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          alignItems={"center"}
          padding={"1rem"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Here....." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: "#FFF1DB",
              color: "black",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "#D4BDAC",
                color: "white",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      {/* <FileMenu /> */}
    </>
  );
};

export default AppLayout()(Chat);
