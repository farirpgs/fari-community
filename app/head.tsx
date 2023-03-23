import Script from "next/script";

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Fari Community</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* favicon */}
      <link rel="icon" href="/images/favicon.png" />
      <link
        {...{ precedence: "default" }}
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3TXQXZ8F59"
      />
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-3TXQXZ8F59");`}
      </Script>
      <meta
        name="google-site-verification"
        content="PP_j34CLIML0MgVMgYRr79xZBuia5NJ30Vlyips821k"
      />
    </>
  );
}
