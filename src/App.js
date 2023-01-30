import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import Navigation from "./modules/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Container className="App__Header">
        <Typography variant="h2" component="h2" className="App__Header__Title">
          Cue Cards
        </Typography>
      </Container>
      <Box className="App__Body">
        <Container className="App__Body__Navigation">
          <Typography
            variant="h4"
            component="h4"
            className="App__Header__Title"
          >
            Navigation
          </Typography>
          <Navigation />
        </Container>
        <Container className="App__Body__Main">
          <Typography
            variant="h4"
            component="h4"
            className="App__Header__Title"
          >
            Body
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            className="App__Header__Title"
          >
            Test
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default App;
