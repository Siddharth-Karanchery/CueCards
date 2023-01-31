import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Navigation from "./modules/Navigation/Navigation";
import Title from "./modules/Title/Title";

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
        <Container className="App__Header">
          <Typography
            variant="h2"
            component="h2"
            className="App__Header__Title"
          >
            Cue Cards
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
            {/* <Typography
              variant="h4"
              component="h4"
              className="App__Header__Title"
            >
              Body
            </Typography> */}
            <Title />
          </Container>
          {/* <div class="App__Body__Main">
            <Title />
          </div> */}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
