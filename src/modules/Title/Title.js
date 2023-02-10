import React from "react";
import { Typography, Container } from "@mui/material";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Title.css";

import { overview } from "../../data/mockApi";

import { useNavigate, createSearchParams } from "react-router-dom";

function Title() {
  const navigate = useNavigate();

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
        <FrontSide
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                <Typography
                  variant="Subtitle2"
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
