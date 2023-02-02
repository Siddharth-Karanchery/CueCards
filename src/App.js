import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navigation from "./modules/Navigation/Navigation";
import Title from "./modules/Title/Title";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Chapter from "./modules/Chapter/Chapter";
import Section from "./modules/Section/Section";

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <Container className="App__Header">
            <Typography
              variant="h2"
              component="h2"
              className="App__Header__Title"
            >
              Cue Cards
              <Link to={"/CueCards/"}>
                <AiOutlineHome
                  size={30}
                  color="black"
                  style={{ marginLeft: "20px" }}
                />
              </Link>
            </Typography>
          </Container>

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
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
