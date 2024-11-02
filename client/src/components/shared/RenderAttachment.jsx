/* eslint-disable no-unused-vars */
import { FileOpen as FileOpenIcon } from "@mui/icons-material";
import React from "react";
import { transformImage } from "../../lib/features";

const RenderAttachment = (file, url) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls />;
    case "image":
      return (
        <img
          src={transformImage(url)}
          alt="attachment"
          width={"200px"}
          height={"150px"}
          style={{
            objectFit: "cover",
            borderRadius: 8,
            margin: 8,
          }}
        />
      );
    case "audio":
      return <audio src={url} preload="none" controls />;
    default:
      return <FileOpenIcon />;
  }
};

export default RenderAttachment;
