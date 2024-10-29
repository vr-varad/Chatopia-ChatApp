/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from "react";

import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"greenyellow"} height={"100%"}>
      <Typography
        p={"2rem"}
        variant="h5"
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Select a Friend to chat with
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
