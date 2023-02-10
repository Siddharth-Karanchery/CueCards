import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./ErrorBoundary.css";

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return (
        <Container class="errorBoundary">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/999/452/large_2x/sign-alarm-sign-error-message-danger-warning-icon-danger-warning-icon-risk-sign-information-sign-exclamation-icon-alert-free-vector.jpg"
            class="errorBoundary__image"
          />
          <Typography variant="h4">
            Something went wrong! Go back to{" "}
            <Link
              to={"/CueCards/"}
              onClick={() => {
                this.setState({ errorMessage: "" });
              }}
            >
              Home
            </Link>
          </Typography>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
