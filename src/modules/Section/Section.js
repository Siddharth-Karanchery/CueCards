import React from "react";
import { Typography, Container, Paper, Box } from "@mui/material";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Section.css";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";
import { sectionData } from "../../data/mockApi";

function Section(props) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sectionNum = searchParams.get("sno");

  const isNotMobile = props.isNotMobile;

  const section = sectionData.filter(
    (section) => section.sectionNum == searchParams.get("sno")
  );

  const position = sectionData
    .map((section) => section.sectionNum)
    .indexOf(searchParams.get("sno"));

  return (
    <Container class="chapter">
      <Typography variant={isNotMobile ? "h3" : "h5"}>
        Chapter {section[0].chapterNum}: {section[0].chapterTitle}
      </Typography>
      <Container class="section__nav">
        {section[0].sectionNum !== "1" ? (
          <Box
            className="section__nav__ele"
            onClick={() => {
              navigate({
                pathname: "/CueCards/section",
                search: `?${createSearchParams({
                  sno: sectionData[position - 1].sectionNum,
                })}`,
              });
            }}
          >
            <GrPrevious />
            <Typography variant="caption">
              Section {sectionData[position - 1].sectionNum}
            </Typography>
          </Box>
        ) : (
          <Box className="section__nav__ele"></Box>
        )}
        {section[0].sectionNum !== "159" ? (
          <Box
            sx={{ justifySelf: "end" }}
            className="section__nav__ele"
            onClick={() => {
              navigate({
                pathname: "/CueCards/section",
                search: `?${createSearchParams({
                  sno: sectionData[position + 1].sectionNum,
                })}`,
              });
            }}
          >
            <Typography variant="caption">
              Section {sectionData[position + 1].sectionNum}
            </Typography>
            <GrNext />
          </Box>
        ) : null}
      </Container>
      <Typography
        variant={isNotMobile ? "h4" : "h6"}
        sx={{ margin: "0.5rem 0 1.5rem 0" }}
      >
        Section {section[0].sectionNum}: {section[0].sectionTitle}
      </Typography>
      <Typography
        variant={isNotMobile ? "h5" : "subtitle1"}
        style={{
          whiteSpace: "pre-line",
          textAlign: "justify",
          textDecoration: "",
          width: isNotMobile ? null : "95%",
        }}
      >
        {section[0].points}
      </Typography>
    </Container>
  );
}

export default Section;
