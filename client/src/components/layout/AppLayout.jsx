/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import Footer from "./Footer";
import { Grid2 } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid2 container height={"calc(100vh - 4rem)"}>
          <Grid2
            size={{ xs: 5, md: 3 }} 
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            First
          </Grid2>
          <Grid2 size={{ xs: 7, md: 6 }}>
            <WrappedComponent {...props} />
          </Grid2>
          <Grid2
            size={3}
            sx={{
              backgroundColor: "lightblue",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Third
          </Grid2>
        </Grid2>

        <Footer />
      </>
    );
  };
};

export default AppLayout;
