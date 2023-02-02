import React from "react";
import { Typography, Container, Paper } from "@mui/material";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Section.css";
import { useSearchParams } from "react-router-dom";

import { sectionData } from "../../data/mockApi";

function Section() {
  const [searchParams] = useSearchParams();

  const sectionNum = searchParams.get("sno");

  console.log("sectionData: ", sectionData);

  console.log("searchParams.get('sno'): ", searchParams.get("sno"));
  const section = sectionData.filter(
    (section) => section.sectionNum == searchParams.get("sno")
  );

  console.log("points: ", section);
  return (
    <Container class="chapter">
      <Typography variant="h3">
        Chapter {section[0].chapterNum}: {section[0].chapterTitle}
      </Typography>
      <Typography variant="h4" sx={{ margin: "0.5rem 0 1.5rem 0" }}>
        Section {section[0].sectionNum}: {section[0].sectionTitle}
      </Typography>
      <Typography
        variant="h5"
        style={{
          whiteSpace: "pre-line",
          textAlign: "justify",
          textDecoration: "",
        }}
      >
        {section[0].points}
      </Typography>
    </Container>
  );
}

export default Section;
