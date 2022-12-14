import { Navbar } from "app/(components)/Navbar/Navbar";
import { SettingsProvider } from "./(domains)/contexts/SettingsContext";
import { SiteThemeProvider } from "./(domains)/contexts/SiteThemeProvider";
import EmotionRootStyleRegistry from "./(mui)/EmotionRootStyleRegistry";
import "./global.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body>
        <EmotionRootStyleRegistry>
          <SettingsProvider>
            <SiteThemeProvider>
              <Navbar />
              {props.children}
            </SiteThemeProvider>
          </SettingsProvider>
        </EmotionRootStyleRegistry>
      </body>
    </html>
  );
}
