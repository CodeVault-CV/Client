import React, { PropsWithChildren } from "react";
import { Container, Stack, CssBaseline } from "@mui/material";

import Navbar from "../../components/Navbar";
import Banner from "./Banner";

function MainTemplate({ children }: PropsWithChildren) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Stack>
        <Navbar />
        <Banner />
        <Container maxWidth="md">{children}</Container>
      </Stack>
    </React.Fragment>
  );
}

export default MainTemplate;
