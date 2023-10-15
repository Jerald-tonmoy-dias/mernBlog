import React from "react";
import { Container, Box } from "@mui/material";
export default function Footer() {
  return (
    <Box
      sx={{
        padding: "40px 0px",
        background: (theme) => theme.palette.secondary.dark,
        color: (theme) => theme.palette.common.white,
      }}
    >
      <Container>
        <h2>this footer</h2>
      </Container>
    </Box>
  );
}
