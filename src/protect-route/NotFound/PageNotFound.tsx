import { Stack, Typography } from "@mui/material";
import React from "react";
import { FigmaHeading } from "../../constant/style/themFigma/FigmaHeading";

function PageNotFound() {
  return (
    <Stack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Typography sx={{ ...FigmaHeading.H2, color: "red" }}>
        PageNotFound
      </Typography>
    </Stack>
  );
}

export default PageNotFound;
