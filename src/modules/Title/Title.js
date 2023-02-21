import React from "react";
import { Typography, Container, Tooltip } from "@mui/material";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Title.css";

import { overview } from "../../data/mockApi";

import { useNavigate, createSearchParams } from "react-router-dom";
import { RxEyeOpen } from "react-icons/rx";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";

function Title(props) {
  const [flip, setFlip] = React.useState(false);
  const navigate = useNavigate();

  const chapterRefs = React.useRef([null]);

  const isNotMobile = props.isNotMobile;

  chapterRefs.current = overview.map(
    (chapter, i) => chapterRefs.current[i] ?? React.createRef()
  );

  const clickHandler = (e, element) => {
    e.preventDefault();

    element.current.hidden = !element.current.hidden;
  };

  React.useEffect(() => {
    chapterRefs.current = overview.map(
      (chapter, i) => chapterRefs.current[i] ?? React.createRef()
    );

    chapterRefs.current.forEach((ele) => (ele.current.hidden = true));
  });

  return (
    <>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        isFlipped={flip}
        style={{
          width: isNotMobile ? "60%" : "90%",
          height: isNotMobile ? "70%" : "100%",
        }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2">THE TRADE MARKS ACT, 1999</Typography>

          <MdOutlineFlipCameraAndroid
            onClick={() => setFlip((prev) => !flip)}
          />
        </FrontSide>
        <BackSide>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              height: isNotMobile ? "95%" : "100%",
              width: isNotMobile ? null : "105%",
              margin: isNotMobile ? null : "0 0 0 -2rem",
              textAlign: "left",
            }}
          >
            {overview.map((chapter, i) => {
              return (
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  key={i}
                >
                  <RxEyeOpen
                    onClick={(e) => clickHandler(e, chapterRefs.current[i])}
                  />
                  <Typography
                    variant={isNotMobile ? "Subtitle2" : "caption"}
                    sx={{
                      cursor: "pointer",
                      marginLeft: "1rem",
                      minWidth: isNotMobile ? null : "6rem",
                    }}
                    onClick={() => {
                      navigate({
                        pathname: "/CueCards/chapter",
                        search: `?${createSearchParams({
                          cno: chapter.chapterNum,
                        })}`,
                      });
                    }}
                  >
                    Chapter {chapter.chapterNum}:{" "}
                  </Typography>

                  <Typography
                    variant={isNotMobile ? "Subtitle2" : "caption"}
                    sx={{
                      cursor: "pointer",
                      marginLeft: "0.5rem",

                      maxWidth: isNotMobile ? null : "12rem",
                    }}
                    ref={chapterRefs.current[i]}
                    onClick={() => {
                      navigate({
                        pathname: "/CueCards/chapter",
                        search: `?${createSearchParams({
                          cno: chapter.chapterNum,
                        })}`,
                      });
                    }}
                  >
                    {chapter.chapterTitle}
                  </Typography>
                </Container>
              );
            })}
          </Container>

          <MdOutlineFlipCameraAndroid
            onClick={() => setFlip((prev) => !flip)}
          />
        </BackSide>
      </Flippy>
    </>
  );
}

export default Title;
