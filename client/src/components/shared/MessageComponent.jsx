/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { memo } from "react";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const isSender = sender._id === user._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: isSender ? "flex-end" : "flex-start",
        backgroundColor: isSender ? "#f3f3f3" : "#e5e5e5",
        borderRadius: 8,
        padding: 8,
        margin: 8,
        maxWidth: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {!isSender && (
        <Typography color="grey" fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const { url } = attachment;
          const fileExt = fileFormat(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {RenderAttachment(fileExt, url)}
              </a>
            </Box>
          );
        })}
      <Typography color={"text.secondary"} fontWeight={"500"} variant="caption">
        {timeAgo}
      </Typography>
    </div>
  );
};

export default MessageComponent;
