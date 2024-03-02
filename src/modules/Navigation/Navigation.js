import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { overview } from "../../data/mockApi";
import { Box, Container } from "@mui/system";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import "./Navigation.css";

import { useNavigate, createSearchParams } from "react-router-dom";

function Navigation() {
  const [showSectionNames, setShowSectionNames] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const navigate = useNavigate();

  const handleChange = (element) => (isExpanded) => {
    setExpanded(isExpanded ? element : false);
  };

  const navigationEle = overview.map((chapter, i) => {
    return (
      <Accordion
        key={i * 21}
        className="Navigation__Acc__Ele"
        expanded={expanded === chapter.chapterTitle}
        onClick={
          expanded === chapter.chapterTitle
            ? handleChange(false)
            : handleChange(chapter.chapterTitle)
        }
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "#f1f58f" }}
        >
          <Typography>Chapter No: {chapter.chapterNum}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#f1f58f" }}>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate({
                pathname: "/CueCards/chapter",
                search: `?${createSearchParams({
                  cno: chapter.chapterNum,
                })}`,
              });
            }}
          >
            Chapter Title: {chapter.chapterTitle}
          </Typography>
          <Container class="test">
            {chapter.sections.map((section) => {
              return (
                <Typography
                  variant="subtitle2"
                  sx={{ margin: "5px 0", cursor: "pointer" }}
                  onClick={() => {
                    navigate({
                      pathname: "/CueCards/section",
                      search: `?${createSearchParams({
                        sno: section.sectionNum,
                      })}`,
                    });
                  }}
                >
                  <b>Section {section.sectionNum}: </b>
                  {showSectionNames ? section.sectionTitle : null}
                </Typography>
              );
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
    );
  });
  return (
    <Box className="Navigation">
      <Typography variant="subtitle2" sx={{ margin: "5px 0" }}>
        Toggle Section Name Visibility
        {showSectionNames ? (
          <RxEyeOpen
            style={{ marginLeft: "1rem" }}
            onClick={() => setShowSectionNames(false)}
          />
        ) : (
          <RxEyeClosed
            style={{ marginLeft: "1rem" }}
            onClick={() => setShowSectionNames(true)}
          />
        )}
      </Typography>

      {navigationEle}
    </Box>
  );
}

export default Navigation;
