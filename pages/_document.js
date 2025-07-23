import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="description" content="Discover premium residential and commercial properties with Trident Realty. Get exclusive deals on luxury homes, apartments, and commercial spaces in prime locations." />
        <meta name="keywords" content="real estate, premium properties, residential, commercial, luxury homes, apartments, property investment, Mumbai, Delhi, Bangalore" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Trident Realty - Premium Properties" />
        <meta property="og:description" content="Your trusted partner for premium residential and commercial real estate properties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tridentrealty.com" />
        <meta property="og:site_name" content="Trident Realty" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tridentrealty" />
        <meta name="twitter:creator" content="@tridentrealty" />
        
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
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://www.m3mindiaproperty.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://www.m3mindiaproperty.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}