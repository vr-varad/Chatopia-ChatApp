import { styled } from "@mui/material";

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

<VisullyHiddenInput/>