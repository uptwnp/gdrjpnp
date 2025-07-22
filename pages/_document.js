import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="description" content="Discover premium residential and commercial properties with Trident Realty. Get exclusive deals on luxury homes, apartments, and commercial spaces in prime locations." />
        <meta name="keywords" content="real estate, premium properties, residential, commercial, luxury homes, apartments, property investment, Mumbai, Delhi, Bangalore" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Trident Realty - Premium Properties" />
        <meta property="og:description" content="Your trusted partner for premium residential and commercial real estate properties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tridentrealty.com" />
        
        {/* Schema.org markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Trident Realty",
              "description": "Premium residential and commercial real estate properties",
              "url": "https://tridentrealty.com",
              "telephone": "+91-98765-43210",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Maharashtra",
                "addressLocality": "Mumbai"
              },
              "areaServed": ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"],
              "serviceType": ["Real Estate Sales", "Property Investment", "Real Estate Consultation"]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}