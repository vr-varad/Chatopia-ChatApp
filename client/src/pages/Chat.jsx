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
        {/* Messages */}
      </Stack>
      <form
        style={{
          height: "7%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          alignItems={"center"}
          padding={"1rem"}
          position={"relative"}
        >
          <IconButton sx={{
            position: "absolute",
            left: "1.5rem",
            
          }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Here....." />
          <IconButton type="submit" sx={{
            backgroundColor: "#FFF1DB",
            color: "black",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              backgroundColor: "#D4BDAC",
              color: "white",
            },
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout()(Chat);
