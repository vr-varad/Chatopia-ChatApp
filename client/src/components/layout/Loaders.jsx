import React from "react";
import { Grid2, Skeleton } from "@mui/material";

export const LayoutLoader = () => {
  return (
    <Grid2 spacing={"1rem"} margin={"1rem"} container height={"calc(100vh - 4rem)"}>
      <Grid2
        size={{ xs: 5, md: 3 }}
        sx={{
          display: { xs: "none", sm: "block", md: "block" },
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid2>
      <Grid2 size={{ xs: 7, md: 6 }}>
      <Skeleton variant="rectangular" height={"100vh"} />
      </Grid2>
      <Grid2
        size={3}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid2>
    </Grid2>
  );
};
