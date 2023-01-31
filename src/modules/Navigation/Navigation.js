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

function Navigation() {
  const [showSectionNames, setShowSectionNames] = React.useState(false);
  const navigationEle = overview.map((chapter) => {
    return (
      <Accordion className="Navigation__Acc__Ele">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Chapter No: {chapter.chapterNum}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Chapter Title: {chapter.chapterTitle}
          </Typography>
          <Container class="test">
            {chapter.sections.map((section) => {
              return (
                <Typography variant="subtitle2" sx={{ margin: "5px 0" }}>
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
