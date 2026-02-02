import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: object;
}

const BASE_URL = "https://baselynesystems.com";

export function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = `${BASE_URL}/og-image.jpg`,
  ogType = "website",
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes("Baselyne")
    ? title
    : `${title} | Baselyne Systems`;
  const canonicalUrl = canonical || BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Baselyne Systems" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Organization schema - use on all pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Baselyne Systems",
  url: "https://baselynesystems.com",
  logo: "https://baselynesystems.com/logo.png",
  description:
    "AI infrastructure and MLOps consulting firm helping data and ML teams move AI from experimentation into production.",
  sameAs: ["https://www.linkedin.com/in/achyuthsamudrala/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://baselynesystems.com/contact",
  },
};

// Professional Service schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Baselyne Systems",
  url: "https://baselynesystems.com",
  description:
    "Expert AI infrastructure, MLOps, and data infrastructure consulting services for enterprise teams.",
  priceRange: "$$$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Infrastructure Consulting",
          description:
            "Scalable compute orchestration, cost attribution, and security for GPU-intensive AI workloads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MLOps Consulting",
          description:
            "Model versioning, deployment infrastructure, and production monitoring for ML systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Infrastructure Consulting",
          description:
            "Lakehouse architecture, pipeline orchestration, and data governance at scale.",
        },
      },
    ],
  },
};

// Service-specific schemas
export const aiInfraServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Infrastructure Consulting",
  provider: {
    "@type": "Organization",
    name: "Baselyne Systems",
    url: "https://baselynesystems.com",
  },
  description:
    "Expert consulting for building scalable AI infrastructure including GPU orchestration, cost optimization, and security compliance for enterprise AI workloads.",
  serviceType: "Consulting",
  areaServed: "United States",
  url: "https://baselynesystems.com/services/ai-infrastructure-consulting",
};

export const mlopsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MLOps Consulting",
  provider: {
    "@type": "Organization",
    name: "Baselyne Systems",
    url: "https://baselynesystems.com",
  },
  description:
    "Expert MLOps consulting to get models from notebooks to production with proper versioning, deployment infrastructure, and monitoring.",
  serviceType: "Consulting",
  areaServed: "United States",
  url: "https://baselynesystems.com/services/mlops-consulting",
};

export const dataInfraServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Infrastructure Consulting",
  provider: {
    "@type": "Organization",
    name: "Baselyne Systems",
    url: "https://baselynesystems.com",
  },
  description:
    "Expert data infrastructure consulting for building reliable, scalable data platforms including lakehouse architecture, pipeline orchestration, and governance.",
  serviceType: "Consulting",
  areaServed: "United States",
  url: "https://baselynesystems.com/services/data-infrastructure-consulting",
};
