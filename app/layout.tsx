import "./global.css";

import { LayoutComponent } from "./layout-component";

import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(
  props: Parameters<typeof RootLayout>[0]
) {
  return {
    title: `Fari Community - Free TTRPG Resources`,
    description: `Free and Open RPG Resources maintained by the Fari Community`,
    metadataBase: new URL("https://fari.community"),
    icons: {
      icon: [
        {
          url: "https://fari.community/images/favicon-light.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "https://fari.community/images/favicon-dark.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
    openGraph: {
      title: "Fari Community",
      description: `Free and Open RPG Resources maintained by the Fari Community`,
      url: "https://fari.community",
      siteName: "Fari Community",
      images: [
        {
          url: "https://fari.community/images/og.png",
          width: 800,
          height: 600,
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <LayoutComponent>{props.children}</LayoutComponent>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J6GE46YQYE"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'J6GE46YQYE', {
           page_path: window.location.pathname,
           });
           `}
        </Script>
      </body>
    </html>
  );
}
