import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Discover premium residential and commercial properties with Godrej Properties. Get exclusive deals on luxury homes, apartments, and commercial spaces in prime locations."
        />
        <meta
          name="keywords"
          content="real estate, premium properties, residential, commercial, luxury homes, apartments, property investment, Mumbai, Delhi, Bangalore"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Godrej Properties - Premium Properties"
        />
        <meta
          property="og:description"
          content="Your trusted partner for premium residential and commercial real estate properties."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Godrejrealty.com" />
        <meta property="og:site_name" content="Godrej Properties" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Godrejrealty" />
        <meta name="twitter:creator" content="@Godrejrealty" />

        {/* Schema.org markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Godrej Properties",
              description:
                "Premium residential and commercial real estate properties",
              url: "https://Godrejrealty.com",
              telephone: "+91-98765-43210",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Maharashtra",
                addressLocality: "Mumbai",
              },
              areaServed: ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"],
              serviceType: [
                "Real Estate Sales",
                "Property Investment",
                "Real Estate Consultation",
              ],
            }),
          }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://www.m3mindiaproperty.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://www.m3mindiaproperty.com" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6ZMBHNC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
