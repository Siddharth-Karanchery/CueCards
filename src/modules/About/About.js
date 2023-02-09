import React from "react";
import { Typography, Container } from "@mui/material";

import "./About.css";

function About() {
  return (
    <Container class="chapter">
      <Typography variant="h3">About</Typography>

      <Typography variant="h4" sx={{ margin: "0.5rem 0 1.5rem 0" }}>
        This Web app was built by the developer to help his friend in order to
        aid their preparation for the Trademarks Agent Exam. This app is meant
        for learning and education purposes only.
      </Typography>
    </Container>
  );
}

export default About;
