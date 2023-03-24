"use client";

import React from "react";

export function useSettings() {
  return {
    state: {},
    actions: {},
  };
}
export const SettingsContext = React.createContext<
  ReturnType<typeof useSettings>
>(undefined as any);
