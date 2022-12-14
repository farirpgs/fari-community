"use client";

import { ThemeProvider } from "@mui/material";
import { SettingsContext } from "app/(domains)/contexts/SettingsContext";
import { darkTheme, lightTheme } from "app/(mui)/themes";
import { useContext } from "react";

export function SiteThemeProvider(props: { children: React.ReactNode }) {
  const settingsManager = useContext(SettingsContext);
  return (
    <ThemeProvider
      theme={
        settingsManager.state.themeMode === "dark" ? darkTheme : lightTheme
      }
    >
      {props.children}
    </ThemeProvider>
  );
}
