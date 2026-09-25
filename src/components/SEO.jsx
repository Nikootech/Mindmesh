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
  const finalDescription = description || "MindMesh WorkHub delivers bespoke software, cloud platforms, enterprise ERPs, and AI integrations for high-growth businesses and global enterprises.";
  const finalImage = image || "https://mindmesh.co.in/mindmesh-logo.png";
  
  // Dynamic canonical support: on localhost matches window.location; on root path strictly resolves to official domain root; on subpages resolves to specific canonical
  const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  const isRoot = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '');
  const finalUrl = isLocalhost
    ? `${window.location.protocol}//${window.location.host}${window.location.pathname}`
    : (isRoot ? "https://mindmesh.co.in/" : (url || "https://mindmesh.co.in/"));

  // Ensure strictly one canonical link tag in document.head
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const canonicals = document.querySelectorAll('link[rel="canonical"]');
      if (canonicals.length > 0) {
        canonicals[0].setAttribute('href', finalUrl);
        for (let i = 1; i < canonicals.length; i++) {
          canonicals[i].remove();
        }
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', finalUrl);
        document.head.appendChild(link);
      }
    }
  }, [finalUrl]);

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
