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

function Chapter(props) {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const isNotMobile = props.isNotMobile;

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
          width: isNotMobile ? "25%" : "90%",
          height: isNotMobile ? "15rem" : "12rem",
        }} /// these are optional style, it is not necessary
      >
        <FrontSide>
          <Typography
            variant={isNotMobile ? "h4" : "h5"}
            className="sectionText"
          >
            Section {section.sectionNum}
          </Typography>
        </FrontSide>
        <BackSide>
          <Typography
            variant={isNotMobile ? "h5" : "h6"}
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
      <Typography variant={isNotMobile ? "h3" : "h5"}>
        Chapter {chapter[0].chapterNum}: {chapter[0].chapterTitle}
      </Typography>
      <Container class="chapter__body">{sections}</Container>
    </Container>
  );
}

export default Chapter;
