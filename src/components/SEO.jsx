import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  schema,
  breadcrumbs,
  faq
}) => {
  const siteName = "MindMesh WorkHub";
  const defaultTitle = "MindMesh WorkHub | Strategic Technology Consulting & Digital Engineering";
  const finalTitle = title ? (title.includes('MindMesh') ? title : `${title} | ${siteName}`) : defaultTitle;
  const finalDescription = description || "MindMesh WorkHub delivers high-performance custom software, IoT solutions, web applications, and custom CRM/ERP platforms for Finance, HR, and Enterprise industries.";
  const finalImage = image || "https://mindmesh.co.in/mindmesh-logo.png";
  const finalUrl = url || "https://mindmesh.co.in/";

  // Build combined JSON-LD Schema Graph for AEO & SEO
  const schemaGraph = [];

  // Add custom or passed schema
  if (schema) {
    if (schema['@graph']) {
      schemaGraph.push(...schema['@graph']);
    } else {
      schemaGraph.push(schema);
    }
  }

  // Add BreadcrumbList schema if breadcrumbs are provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemaGraph.push({
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url.startsWith('http') ? crumb.url : `https://mindmesh.co.in${crumb.url}`
      }))
    });
  }

  // Add FAQPage schema if faqs are provided (Crucial for AEO!)
  if (faq && faq.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  const finalSchemaJson = schemaGraph.length > 0 ? {
    "@context": "https://schema.org",
    "@graph": schemaGraph
  } : null;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* Structured Data (JSON-LD) for Search & AI Answer Engines */}
      {finalSchemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchemaJson)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
