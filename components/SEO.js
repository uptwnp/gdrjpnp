import Head from 'next/head';

export default function SEO({ 
  title = 'Trident Realty - Premium Properties',
  description = 'Discover premium residential and commercial properties with Trident Realty. Get exclusive deals on luxury homes, apartments, and commercial spaces in prime locations.',
  keywords = 'real estate, premium properties, residential, commercial, luxury homes, apartments, property investment',
  image = '/images/og-image.jpg',
  url = 'https://tridentrealty.com'
}) {
  const fullTitle = title.includes('Trident Realty') ? title : `${title} | Trident Realty`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Head>
  );
}