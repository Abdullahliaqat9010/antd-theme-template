import React from "react";
import Router from "router";
import { theme } from "@constants";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
