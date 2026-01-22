import { businesses, getBusinessBySlug, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { businessKeywords, getKeywordBySlug, studyAbroadKeywords } from "@/lib/keywords-config";
import { getBusinessContent, getStudyAbroadContent } from "@/lib/content-generator";
import { generatePageSchema, generateKeywordPageSchema } from "@/lib/seo-schema";
import { getTestimonialsByArea, getRandomTestimonials } from "@/lib/testimonials";
import { getAreaUniqueContent } from "@/lib/area-content";
import { getCountryBySlug, getCountrySlugs } from "@/lib/country-content";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { CountryPageTemplate } from "@/components/country-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Script from "next/script";

const business = businesses[0]; // Study Abroad Consultants
const baseUrl = "https://studyabroadvadodara.in";

// Generate static params for all area + keyword + country combinations
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Add area pages
  business.areas.forEach((area) => {
    params.push({ slug: area });
  });
  
  // Add keyword pages
  studyAbroadKeywords.forEach((keyword) => {
    params.push({ slug: keyword.slug });
  });
  
  // Add country pages
  const countrySlugs = getCountrySlugs();
  countrySlugs.forEach((slug) => {
    params.push({ slug });
  });
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if slug is an area, a keyword, or a country
  const isArea = vadodaraAreas.includes(slug);
  const countryContent = getCountryBySlug(slug);
  const keywordConfig = !isArea && !countryContent ? getKeywordBySlug(business.slug, slug) : null;
  
  if (isArea) {
    // Area page metadata - Enhanced with keyword strategy
    const areaName = getAreaDisplayName(slug);
    const uniqueContent = getAreaUniqueContent(slug);
    const enhancedTitle = `Study Abroad Consultants in ${areaName}, Vadodara | #1 Overseas Education`;
    const enhancedDescription = `Best study abroad consultants in ${areaName}, Vadodara. ${uniqueContent.metaDescription} Free counseling for Canada, USA, UK, Australia student visas. Call +91 6353583148`;
    
    return {
      title: enhancedTitle,
      description: enhancedDescription.slice(0, 160),
      keywords: [
        `Study Abroad Consultants in ${areaName}`,
        `Study Abroad Consultants ${areaName} Vadodara`,
        `Overseas Education Consultants ${areaName}`,
        `Best Study Abroad Consultants ${areaName}`,
        `Canada Student Visa ${areaName}`,
        `USA Student Visa ${areaName}`,
        `UK Student Visa ${areaName}`,
        `Australia Student Visa ${areaName}`,
        `IELTS Coaching ${areaName}`,
        `Education Consultancy ${areaName}`,
        `Study in Canada from ${areaName}`,
        `Study in USA from ${areaName}`,
        `Visa Consultants ${areaName} Vadodara`,
        `Student Visa Consultants ${areaName}`,
        `Scholarship Guidance ${areaName}`,
      ],
      alternates: {
        canonical: `${baseUrl}/${slug}`,
      },
      openGraph: {
        title: enhancedTitle,
        description: enhancedDescription.slice(0, 160),
        url: `${baseUrl}/${slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Study Abroad Consultants Vadodara",
        images: [
          {
            url: `${baseUrl}/og-image.svg`,
            width: 1200,
            height: 630,
            alt: `Study Abroad Consultants in ${areaName}, Vadodara`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: enhancedTitle,
        description: enhancedDescription.slice(0, 160),
        images: [`${baseUrl}/og-image.svg`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } else if (countryContent) {
    // Country page metadata - Enhanced with city strategy
    const enhancedTitle = `Study in ${countryContent.name} from Vadodara | ${countryContent.name} Student Visa Consultants`;
    const enhancedDescription = `${countryContent.metaDescription} Best ${countryContent.name} education consultants in Vadodara, Gujarat. 98% visa success rate. Free counseling!`;
    
    return {
      title: enhancedTitle,
      description: enhancedDescription.slice(0, 160),
      keywords: [
        `Study in ${countryContent.name} from Vadodara`,
        `${countryContent.name} Student Visa Vadodara`,
        `${countryContent.name} Education Consultants Vadodara`,
        `Best ${countryContent.name} Study Consultants Vadodara`,
        `${countryContent.name} Universities Admission Vadodara`,
        `${countryContent.name} Study Abroad from Vadodara`,
        `${countryContent.name} Student Visa Consultants Gujarat`,
        "Study Abroad Consultants Vadodara",
        "Overseas Education Vadodara",
        "IELTS Coaching Vadodara",
        "Scholarship Guidance Vadodara",
      ],
      alternates: {
        canonical: `${baseUrl}/${slug}`,
      },
      openGraph: {
        title: enhancedTitle,
        description: enhancedDescription.slice(0, 160),
        url: `${baseUrl}/${slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Study Abroad Consultants Vadodara",
        images: [
          {
            url: `${baseUrl}/og-image.svg`,
            width: 1200,
            height: 630,
            alt: `Study in ${countryContent.name} from Vadodara - Study Abroad Consultants`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: enhancedTitle,
        description: enhancedDescription.slice(0, 160),
        images: [`${baseUrl}/og-image.svg`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } else if (keywordConfig) {
    // Keyword page metadata - Enhanced with city/area strategy
    const keywordTitle = keywordConfig.title.includes('Vadodara') 
      ? keywordConfig.title 
      : `${keywordConfig.title} in Vadodara`;
    const metaTitle = `${keywordTitle} | #1 Study Abroad Consultants Gujarat`;
    const enhancedDescription = `${keywordConfig.metaDescription} Best ${keywordConfig.title.toLowerCase()} services in Vadodara, Gujarat. 5000+ students placed. 98% visa success rate. Free counseling!`;
    
    return {
      title: metaTitle,
      description: enhancedDescription.slice(0, 160),
      keywords: [
        keywordConfig.title,
        `${keywordConfig.title} Vadodara`,
        `${keywordConfig.title} Gujarat`,
        `Best ${keywordConfig.title}`,
        `${keywordConfig.title} near me`,
        "Study Abroad Consultants Vadodara",
        "Overseas Education Consultants Vadodara",
        "Study Abroad Vadodara",
        "Canada Student Visa Vadodara",
        "USA Student Visa Vadodara",
        "UK Student Visa Vadodara",
        "Australia Student Visa Vadodara",
        "IELTS Coaching Vadodara",
        "GRE Coaching Vadodara",
        "Scholarship Guidance Vadodara",
      ],
      alternates: {
        canonical: `${baseUrl}/${keywordConfig.slug}`,
      },
      openGraph: {
        title: metaTitle,
        description: enhancedDescription.slice(0, 160),
        url: `${baseUrl}/${keywordConfig.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Study Abroad Consultants Vadodara",
        images: [
          {
            url: `${baseUrl}/og-image.svg`,
            width: 1200,
            height: 630,
            alt: `${keywordTitle} - Study Abroad Consultants Vadodara`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: enhancedDescription.slice(0, 160),
        images: [`${baseUrl}/og-image.svg`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  }
  
  return { title: "Page Not Found" };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if slug is an area, a keyword, or a country
  const isArea = vadodaraAreas.includes(slug);
  const countryContent = getCountryBySlug(slug);
  const keywordConfig = !isArea && !countryContent ? getKeywordBySlug(business.slug, slug) : null;
  
  if (isArea) {
    // Render area page with schema
    const content = getBusinessContent(business.slug, slug);
    const areaName = getAreaDisplayName(slug);
    const areaTestimonials = getTestimonialsByArea(areaName);
    const testimonials = areaTestimonials.length >= 5 
      ? areaTestimonials 
      : [...areaTestimonials, ...getRandomTestimonials(5 - areaTestimonials.length)];
    const schema = generatePageSchema(slug, content.faqItems, testimonials);
    
    return (
      <>
        <Script
          id={`schema-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <BusinessPageTemplate business={business} area={slug} content={content} />
      </>
    );
  } else if (countryContent) {
    // Render country page with schema
    const countrySchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `https://studyabroadvadodara.in/${slug}`,
          "url": `https://studyabroadvadodara.in/${slug}`,
          "name": countryContent.metaTitle,
          "description": countryContent.metaDescription,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Study Abroad Consultants Vadodara",
            "url": "https://studyabroadvadodara.in"
          }
        },
        {
          "@type": "EducationalOrganization",
          "name": "Study Abroad Consultants Vadodara",
          "description": `Expert guidance for studying in ${countryContent.name} from Vadodara`,
          "url": "https://studyabroadvadodara.in",
          "telephone": "+916353583148",
          "email": "edu@studyabroadvadodara.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "201 Shree Complex, RC Dutt Road",
            "addressLocality": "Alkapuri, Vadodara",
            "addressRegion": "Gujarat",
            "postalCode": "390007",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": countryContent.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };
    
    return (
      <>
        <Script
          id={`schema-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(countrySchema) }}
        />
        <CountryPageTemplate country={countryContent} />
      </>
    );
  } else if (keywordConfig) {
    // Render keyword page with schema
    const content = getBusinessContent(business.slug, "vadodara");
    const schema = generateKeywordPageSchema(keywordConfig, content.faqItems);
    
    return (
      <>
        <Script
          id={`schema-${keywordConfig.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />
      </>
    );
  }
  
  notFound();
}
