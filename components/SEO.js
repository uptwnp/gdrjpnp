import Head from 'next/head';

export default function SEO({ 
  title = 'Trident Realty - Premium Properties',
  description = 'Discover premium residential and commercial properties with Trident Realty. Get exclusive deals on luxury homes, apartments, and commercial spaces in prime locations.',
  keywords = 'real estate, premium properties, residential, commercial, luxury homes, apartments, property investment',
  image = '/images/og-image.jpg',
  url = 'https://tridentrealty.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Trident Realty'
}) {
  const fullTitle = title.includes('Trident Realty') ? title : `${title} | Trident Realty`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Trident Realty" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@tridentrealty" />
      <meta name="twitter:creator" content="@tridentrealty" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? 'Article' : 'WebPage',
            "headline": fullTitle,
            "description": description,
            "url": url,
            "image": image,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Trident Realty",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tridentrealty.com/logo.png"
              }
            },
            ...(publishedTime && { "datePublished": publishedTime }),
            ...(modifiedTime && { "dateModified": modifiedTime })
          })
        }}
      />
    </Head>
  );
}