import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import "./App.css";
import Menu from "./components/Menu";
import PanelContainer from "./components/PanelContainer";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <Menu />
        </header>
        <PanelContainer />
      </ThemeProvider>
    </div>
  );
};

export default App;
