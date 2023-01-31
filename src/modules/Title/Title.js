import React from "react";
import { Paper, Typography, Container } from "@mui/material";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Title.css";

import { overview } from "../../data/mockApi";

function Title() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const clickHandler = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{
          width: "70%",
          height: "60%",
        }} /// these are optional style, it is not necessary
      >
        <FrontSide>
          <Typography variant="h2">THE TRADE MARKS ACT, 1999</Typography>
        </FrontSide>
        <BackSide>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {overview.map((chapter) => {
              return (
                <Typography variant="Subtitle2">
                  Chapter {chapter.chapterNum}: {chapter.chapterTitle}
                </Typography>
              );
            })}
          </Container>
        </BackSide>
      </Flippy>
    </>
  );
}

export default Title;
