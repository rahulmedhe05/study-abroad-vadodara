// SEO Schema generators for Study Abroad Consultants Vadodara
import { getAreaDisplayName } from "./business-config";
import { Testimonial } from "./testimonials";

const baseUrl = "https://studyabroadvadodara.in";

// Generate FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Review Schema from testimonials - Fixed to avoid multiple aggregate ratings
export function generateReviewSchema(testimonials: Testimonial[], area: string) {
  const areaName = getAreaDisplayName(area);
  
  // Calculate average rating from testimonials
  const avgRating = testimonials.length > 0 
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : "4.9";
  
  return {
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/${area}#localbusiness`,
    name: `Study Abroad Consultants ${areaName}`,
    image: `${baseUrl}/og-image.svg`,
    url: `${baseUrl}/${area}`,
    telephone: "+916353583148",
    email: "edu@studyabroadvadodara.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201, Shree Complex, RC Dutt Road, Alkapuri",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390007",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3072",
      longitude: "73.1812"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/studyabroadvadodara",
      "https://www.instagram.com/studyabroadvadodara",
      "https://www.linkedin.com/company/studyabroadvadodara"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", "name": "Vadodara" },
      { "@type": "State", "name": "Gujarat" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Study Abroad Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Canada Student Visa Assistance",
            description: "Complete guidance for Canada student visa including SDS stream"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "USA F1 Visa Assistance",
            description: "Expert guidance for USA F1 student visa applications"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UK Student Visa Guidance",
            description: "Professional support for UK Tier 4 student visa"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IELTS & PTE Coaching",
            description: "Expert coaching for IELTS and PTE Academic exams"
          }
        }
      ]
    },
    // Reviews WITHOUT individual ratings to avoid duplicate aggregateRating
    review: testimonials.slice(0, 5).map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.detailedReview,
      datePublished: `${t.year}-01-15`,
    })),
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(area: string) {
  const areaName = getAreaDisplayName(area);
  
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Study Abroad Consultants in ${areaName}`,
        item: `${baseUrl}/${area}`,
      },
    ],
  };
}

// Generate Service Schema
export function generateServiceSchema(area: string) {
  const areaName = getAreaDisplayName(area);
  
  return {
    "@type": "Service",
    "@id": `${baseUrl}/${area}#service`,
    name: `Study Abroad Consulting Services in ${areaName}`,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Place",
      name: `${areaName}, Vadodara`,
    },
    serviceType: "Educational Consulting",
    description: `Professional study abroad consulting services in ${areaName}, Vadodara. Expert guidance for Canada, USA, UK, Australia student visas, IELTS coaching, and university admissions.`,
    offers: [
      {
        "@type": "Offer",
        name: "Free Counseling Session",
        description: "Complimentary 30-minute counseling session for students",
        price: "0",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "Complete Visa Assistance",
        description: "End-to-end visa application support with document preparation",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          price: "Contact for pricing",
        },
      },
    ],
  };
}

// Generate Course Schema for SEO
export function generateCourseSchema() {
  return {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        "@id": `${baseUrl}/#course-ielts`,
        name: "IELTS Preparation Course",
        description: "Comprehensive IELTS coaching in Vadodara with expert trainers. Covers Reading, Writing, Listening, and Speaking modules with guaranteed band improvement.",
        provider: {
          "@type": "Organization",
          name: "Study Abroad Consultants Vadodara",
          sameAs: baseUrl,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          courseWorkload: "PT40H",
          instructor: {
            "@type": "Person",
            name: "IELTS Expert Team",
          },
        },
        offers: {
          "@type": "Offer",
          category: "IELTS Coaching",
          priceRange: "₹₹",
        },
      },
      {
        "@type": "Course",
        "@id": `${baseUrl}/#course-pte`,
        name: "PTE Academic Preparation",
        description: "Expert PTE coaching in Vadodara. Quick score improvement for study abroad requirements with computer-based practice tests.",
        provider: {
          "@type": "Organization",
          name: "Study Abroad Consultants Vadodara",
          sameAs: baseUrl,
        },
      },
      {
        "@type": "Course",
        "@id": `${baseUrl}/#course-gre`,
        name: "GRE Preparation Course",
        description: "Top GRE coaching in Vadodara for MS in USA. Score 320+ with expert faculty and comprehensive preparation.",
        provider: {
          "@type": "Organization",
          name: "Study Abroad Consultants Vadodara",
          sameAs: baseUrl,
        },
      },
    ],
  };
}

// Generate VideoObject Schema
export function generateVideoSchema() {
  return [
    {
      "@type": "VideoObject",
      name: "How to Get Canada Student Visa in 2026 - Complete Guide",
      description: "Step-by-step guide to Canada student visa application process from Vadodara's expert consultants.",
      thumbnailUrl: `${baseUrl}/images/videos/canada-visa-thumbnail.jpg`,
      uploadDate: "2026-01-15",
      duration: "PT12M45S",
      publisher: {
        "@type": "Organization",
        name: "Study Abroad Consultants Vadodara",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.svg`,
        },
      },
    },
    {
      "@type": "VideoObject",
      name: "IELTS Preparation Tips - Score Band 7+ in 30 Days",
      description: "Expert IELTS preparation strategies from Vadodara's best coaching center.",
      thumbnailUrl: `${baseUrl}/images/videos/ielts-tips-thumbnail.jpg`,
      uploadDate: "2026-01-10",
      duration: "PT15M20S",
      publisher: {
        "@type": "Organization",
        name: "Study Abroad Consultants Vadodara",
      },
    },
  ];
}

// Generate HowTo Schema for guides
export function generateHowToSchema(topic: string) {
  const howToGuides: Record<string, object> = {
    "canada-visa": {
      "@type": "HowTo",
      name: "How to Apply for Canada Student Visa from India",
      description: "Step-by-step guide to applying for Canada student visa (study permit) from India in 2026.",
      totalTime: "P60D",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: "150000",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Get Letter of Acceptance",
          text: "Apply to a Designated Learning Institution (DLI) in Canada and receive your Letter of Acceptance.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Pay First Year Tuition",
          text: "Pay your first year tuition fees to the university (required for SDS stream).",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Purchase GIC",
          text: "Purchase a Guaranteed Investment Certificate (GIC) of CAD 20,635 from an approved bank.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Complete Medical Examination",
          text: "Visit an approved panel physician and complete your medical examination.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Submit Online Application",
          text: "Create an account on IRCC portal and submit your study permit application with all documents.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Give Biometrics",
          text: "Schedule and complete biometrics at the nearest VAC (Visa Application Centre).",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Submit Passport",
          text: "After approval, submit your passport for visa stamping.",
        },
      ],
    },
    "ielts-prep": {
      "@type": "HowTo",
      name: "How to Prepare for IELTS and Score Band 7+",
      description: "Comprehensive guide to prepare for IELTS exam and achieve Band 7 or higher.",
      totalTime: "P60D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Understand the Test Format",
          text: "Familiarize yourself with all four modules: Listening, Reading, Writing, and Speaking.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Take a Diagnostic Test",
          text: "Take a full practice test to identify your current level and weak areas.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Build Vocabulary",
          text: "Learn 20 new words daily with their usage in sentences.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Practice Each Module",
          text: "Dedicate specific time for each module - Reading, Writing, Listening, and Speaking practice.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Take Mock Tests",
          text: "Complete full-length mock tests under exam conditions weekly.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Review and Improve",
          text: "Analyze your mistakes and focus on weak areas for improvement.",
        },
      ],
    },
  };

  return howToGuides[topic] || null;
}

// Generate Q&A Schema
export function generateQASchema(questions: { question: string; answer: string }[]) {
  return {
    "@type": "QAPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

// Generate Event Schema for webinars/seminars
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  isOnline: boolean;
}) {
  return {
    "@type": "EducationEvent",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: event.isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: event.isOnline
      ? {
          "@type": "VirtualLocation",
          url: `${baseUrl}/webinar`,
        }
      : {
          "@type": "Place",
          name: event.location,
          address: {
            "@type": "PostalAddress",
            streetAddress: "201, Shree Complex, RC Dutt Road, Alkapuri",
            addressLocality: "Vadodara",
            addressRegion: "Gujarat",
            postalCode: "390007",
            addressCountry: "IN",
          },
        },
    organizer: {
      "@type": "Organization",
      name: "Study Abroad Consultants Vadodara",
      url: baseUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: baseUrl,
    },
  };
}

// Generate complete page schema
export function generatePageSchema(
  area: string,
  faqs: { question: string; answer: string }[],
  testimonials: Testimonial[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema(area),
      generateFAQSchema(faqs),
      generateReviewSchema(testimonials, area),
      generateServiceSchema(area),
    ],
  };
}

// Generate Keyword page schema
export function generateKeywordPageSchema(
  keyword: { slug: string; title: string; h1: string; metaDescription: string },
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: keyword.title,
            item: `${baseUrl}/${keyword.slug}`,
          },
        ],
      },
      generateFAQSchema(faqs),
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/${keyword.slug}#webpage`,
        url: `${baseUrl}/${keyword.slug}`,
        name: keyword.title,
        description: keyword.metaDescription,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#organization`,
        },
        breadcrumb: {
          "@id": `${baseUrl}/${keyword.slug}#breadcrumb`,
        },
      },
    ],
  };
}
