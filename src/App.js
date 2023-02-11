import React from "react";
import { Box, Drawer, MenuList, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navigation from "./modules/Navigation/Navigation";
import Title from "./modules/Title/Title";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import Chapter from "./modules/Chapter/Chapter";
import Section from "./modules/Section/Section";

import {
  // Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import About from "./modules/About/About";
import MyErrorBoundary from "./modules/ErrorBoundary/ErrorBroundary";

function App() {
  const [showMenu, setShowMenu] = React.useState(false);

  const THEME = createTheme({
    typography: {
      fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  const onMenuSelect = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <MyErrorBoundary>
            <Container class="App__Header">
              <FiMenu
                size={30}
                style={{ margin: "2rem", cursor: "pointer" }}
                onClick={onMenuSelect}
              />
              <Typography
                variant="h2"
                component="h2"
                className="App__Header__Title"
              >
                Cue Cards
              </Typography>
              <Link to={"/CueCards/"}>
                <AiOutlineHome
                  size={30}
                  color="black"
                  style={{ margin: "1rem", cursor: "pointer" }}
                />
              </Link>
            </Container>
            <Drawer
              anchor={"left"}
              open={showMenu}
              onClose={() => setShowMenu(false)}
              className="App__Drawer"
            >
              <Box
                sx={{ width: "250px" }}
                role="presentation"
                //   onClick={toggleDrawer(anchor, false)}
                //   onKeyDown={toggleDrawer(anchor, false)}
              >
                <List sx={{ width: "250px" }}>
                  <Link
                    to={"/CueCards/"}
                    onClick={onMenuSelect}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link
                    to="https://drive.google.com/file/d/1cOsbatri2i5LvhZlmCbuEBXyeCJYkMyL/view?usp=share_link"
                    target="_blank"
                    download
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Download"} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link
                    to={"/CueCards/about"}
                    onClick={onMenuSelect}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary={"About"} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </List>
                <MenuList />
              </Box>
            </Drawer>
            <Box className="App__Body">
              <Box className="App__Body__Navigation">
                <Typography
                  variant="h4"
                  component="h4"
                  className="App__Header__Title"
                >
                  Contents
                </Typography>
                <Navigation />
              </Box>
              <Container class="App__Body__Main">
                <Routes>
                  <Route exact path="/CueCards/" element={<Title />} />
                  <Route exact path="/CueCards/chapter" element={<Chapter />} />
                  <Route exact path="/CueCards/section" element={<Section />} />
                  <Route exact path="/CueCards/about" element={<About />} />
                </Routes>
              </Container>
            </Box>
            <Container class="App__Footer">
              <Typography variant="caption">
                {" "}
                Designed and developed by Siddharth Karanchery, Feb 2023
              </Typography>
            </Container>
          </MyErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
