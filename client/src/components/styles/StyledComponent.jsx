import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisullyHiddenInput = styled("input")({
  position: "absolute",
  width: 0,
  height: 0,
  padding: 0,
  margin: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
});

export const Link = styled(LinkComponent)({
  textDecoration: "none",
  color: "inherit",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});


export const InputBox = styled("input")({
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  padding: "0 3rem",
  borderRadius: "1.5rem",
  
})