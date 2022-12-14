"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import React, { useEffect, useState } from "react";

type IThemeMode = "dark" | "light" | undefined;

export function useSettings() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const systemMode = prefersDarkMode ? "dark" : "light";
  const [themeMode, setThemeMode] = useState<IThemeMode>();

  useEffect(() => {
    if (!themeMode) {
      localStorage.removeItem("themeMode");
    } else {
      localStorage.setItem("themeMode", themeMode);
    }
  }, [themeMode]);

  return {
    state: {
      themeMode: themeMode ?? systemMode,
    },
    actions: {
      setThemeMode,
    },
  };
}
export const SettingsContext = React.createContext<
  ReturnType<typeof useSettings>
>(undefined as any);

export function SettingsProvider(props: { children: React.ReactNode }) {
  const settings = useSettings();
  return (
    <SettingsContext.Provider value={settings}>
      {props.children}
    </SettingsContext.Provider>
  );
}
