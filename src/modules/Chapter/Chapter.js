import React from "react";
import { Typography, Container, Paper } from "@mui/material";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Chapter.css";
import { overview } from "../../data/mockApi";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";

function Chapter() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const chapter = overview.filter(
    (chapter) => chapter.chapterNum === searchParams.get("cno")
  );

  const sections = chapter[0].sections.map((section) => {
    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{
          width: "25%",
          height: "15rem",
        }} /// these are optional style, it is not necessary
      >
        <FrontSide>
          <Typography variant="h4" className="sectionText">
            Section {section.sectionNum}
          </Typography>
        </FrontSide>
        <BackSide>
          <Typography
            variant="h5"
            class="sectionText"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate({
                pathname: "/CueCards/section",
                search: `?${createSearchParams({
                  sno: section.sectionNum,
                })}`,
              });
            }}
          >
            {section.sectionTitle}
          </Typography>
        </BackSide>
      </Flippy>
    );
  });

  return (
    <Container class="chapter">
      <Typography variant="h3">
        Chapter {chapter[0].chapterNum}: {chapter[0].chapterTitle}
      </Typography>
      <Container class="chapter__body">{sections}</Container>
    </Container>
  );
}

export default Chapter;
