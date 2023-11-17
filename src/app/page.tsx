"use client";
import { MSLayoutHomePage } from "@/components/ms-layout/MSLayoutHomePage";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <MSLayoutHomePage>
      <Box>
        <Typography sx={{ color: "red" }}>Hello</Typography>
      </Box>
    </MSLayoutHomePage>
  );
}
