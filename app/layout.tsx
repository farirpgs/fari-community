import "./global.css";

import { LayoutComponent } from "./layout-component";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(
  props: Parameters<typeof RootLayout>[0]
) {
  return {
    title: `Fari Community - Free TTRPG Resources`,
    icons: {
      icon: [
        {
          url: "/images/favicon-light.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/images/favicon-dark.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
  };
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <LayoutComponent>{props.children}</LayoutComponent>
      </body>
    </html>
  );
}
