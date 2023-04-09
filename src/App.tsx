import React from "react";
import "./App.css";
import LatestMessagesWidgetSmall from "./components/LatestMessagesWidgetSmall";
import { createTheme } from "@material-ui/core/styles";
import {
  ContextLatestMessagesStore,
  LatestMessagesStore,
} from "./mst/store/LatestMessagesStore";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { LatestMessagesWidget } from "./components/LatestMessagesWidget/LatestMessagesWidget";

export const App: React.FC = () => {
  const theme = createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
    },
    palette: {
      primary: {
        main: "#157A7A",
      },
      secondary: {
        main: "#000000",
      },
    },
  });

  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <ContextLatestMessagesStore.Provider value={LatestMessagesStore}>
        <CssBaseline />
        {isMobileScreen ? (
          <LatestMessagesWidgetSmall />
        ) : (
          <LatestMessagesWidget />
        )}
      </ContextLatestMessagesStore.Provider>
    </ThemeProvider>
  );
};
