import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { Star, MapPin, GraduationCap, Calendar, Quote, ChevronRight, CheckCircle2 } from "lucide-react";

const baseUrl = "https://studyabroadvadodara.in";

export const metadata: Metadata = {
  title: "Success Stories | 5000+ Students Placed Abroad | Study Abroad Vadodara",
  description: "Read real success stories of students who achieved their study abroad dreams with Study Abroad Consultants Vadodara. 5000+ successful placements in Canada, USA, UK, Australia & more.",
  keywords: [
    "study abroad success stories",
    "student testimonials Vadodara",
    "Canada visa success stories",
    "USA admission success",
    "study abroad reviews",
    "overseas education testimonials",
  ],
  alternates: {
    canonical: `${baseUrl}/success-stories`,
  },
  openGraph: {
    title: "Success Stories | 5000+ Students Placed Abroad",
    description: "Read real success stories of students who achieved their study abroad dreams with Study Abroad Consultants Vadodara.",
    url: `${baseUrl}/success-stories`,
    type: "website",
    locale: "en_IN",
    siteName: "Study Abroad Consultants Vadodara",
    images: [
      {
        url: `${baseUrl}/images/success-stories-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Study Abroad Success Stories - 5000+ Students Placed",
      },
    ],
  },
};

// Success stories data
const successStories = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "/images/testimonials/student1.jpg",
    country: "Canada",
    university: "University of Toronto",
    course: "Master's in Data Science",
    year: "2025",
    hometown: "Vadodara",
    ieltsScore: "7.5",
    story: "Coming from a middle-class family in Vadodara, studying at University of Toronto seemed like a distant dream. Study Abroad Vadodara made it possible with their expert guidance. From IELTS preparation to SDS visa filing, they handled everything professionally. I received my visa in just 20 days!",
    achievement: "Got 50% scholarship worth CAD 15,000",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Patel",
    image: "/images/testimonials/student2.jpg",
    country: "USA",
    university: "Arizona State University",
    course: "MS in Computer Science",
    year: "2025",
    hometown: "Anand",
    ieltsScore: "7.0",
    story: "After multiple visa rejections with other consultants, I almost gave up on my USA dream. Study Abroad Vadodara's team analyzed my case, strengthened my profile, and prepared me thoroughly for the F1 visa interview. I got approved on my first attempt with them!",
    achievement: "Secured graduate assistantship worth $20,000",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Mehta",
    image: "/images/testimonials/student3.jpg",
    country: "UK",
    university: "University of Manchester",
    course: "MSc Marketing",
    year: "2025",
    hometown: "Vadodara",
    ieltsScore: "7.0",
    story: "The team at Study Abroad Vadodara helped me choose the perfect course that aligned with my career goals. Their SOP guidance was exceptional - my application stood out among thousands. I got admits from 4 UK universities and chose Manchester for its industry connections.",
    achievement: "Completed 1-year Master's with distinction",
    rating: 5,
  },
  {
    id: 4,
    name: "Karan Singh",
    image: "/images/testimonials/student4.jpg",
    country: "Australia",
    university: "University of Melbourne",
    course: "Master of Engineering",
    year: "2024",
    hometown: "Bharuch",
    ieltsScore: "6.5",
    story: "With a 2-year gap after engineering, I thought studying abroad was impossible. The counselors at Study Abroad Vadodara created a strong gap justification and recommended the right universities. Now I'm at one of Australia's top universities with a pathway to PR!",
    achievement: "On track for Permanent Residency",
    rating: 5,
  },
  {
    id: 5,
    name: "Sneha Desai",
    image: "/images/testimonials/student5.jpg",
    country: "Germany",
    university: "TU Munich",
    course: "MS in Mechanical Engineering",
    year: "2025",
    hometown: "Vadodara",
    ieltsScore: "6.5",
    story: "Germany was my dream because of free education. Study Abroad Vadodara guided me through the complex German university application process, helped with blocked account opening, and prepared me for the visa interview. I'm now studying at Germany's best technical university for almost free!",
    achievement: "Zero tuition fees - saving ₹30+ lakhs",
    rating: 5,
  },
  {
    id: 6,
    name: "Amit Joshi",
    image: "/images/testimonials/student6.jpg",
    country: "Canada",
    university: "Conestoga College",
    course: "PG Diploma in Project Management",
    year: "2024",
    hometown: "Vadodara",
    ieltsScore: "6.0",
    story: "I wanted a practical program that would help me get a job quickly in Canada. The team recommended Conestoga's co-op program which was perfect. I got my PGWP immediately after graduation and landed a job within 2 months. Now applying for PR through Express Entry!",
    achievement: "Working in Canada, PR application submitted",
    rating: 5,
  },
];

// Statistics
const stats = [
  { number: "5000+", label: "Students Placed" },
  { number: "98%", label: "Visa Success Rate" },
  { number: "50+", label: "Countries" },
  { number: "500+", label: "Partner Universities" },
];

// Country-wise placements
const countryPlacements = [
  { country: "Canada", flag: "🇨🇦", students: 2500 },
  { country: "USA", flag: "🇺🇸", students: 800 },
  { country: "UK", flag: "🇬🇧", students: 600 },
  { country: "Australia", flag: "🇦🇺", students: 500 },
  { country: "Germany", flag: "🇩🇪", students: 300 },
  { country: "Others", flag: "🌍", students: 300 },
];

export default function SuccessStoriesPage() {
  // JSON-LD for testimonials
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/success-stories`,
        name: "Success Stories - Study Abroad Consultants Vadodara",
        description: "Read real success stories of students who achieved their study abroad dreams with Study Abroad Consultants Vadodara.",
        url: `${baseUrl}/success-stories`,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#organization`,
        name: "Study Abroad Consultants Vadodara",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500",
          bestRating: "5",
          worstRating: "1",
        },
        review: successStories.map((story) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: story.name,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: story.rating,
            bestRating: "5",
          },
          reviewBody: story.story,
          datePublished: `${story.year}-06-15`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BusinessNav />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-20 pt-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Success Stories
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                5000+ students from Vadodara and Gujarat have achieved their study abroad dreams with us
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                    <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Country-wise Placements */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-8">
              Students Placed by Country
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {countryPlacements.map((item) => (
                <div key={item.country} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
                  <span className="text-2xl">{item.flag}</span>
                  <span className="font-medium text-gray-800">{item.country}</span>
                  <span className="text-sm text-emerald-600 font-bold">{item.students}+</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Real Stories, Real Success
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read how our students transformed their lives through international education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <article
                  key={story.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Header with country flag */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">
                          {story.country === "Canada" && "🇨🇦"}
                          {story.country === "USA" && "🇺🇸"}
                          {story.country === "UK" && "🇬🇧"}
                          {story.country === "Australia" && "🇦🇺"}
                          {story.country === "Germany" && "🇩🇪"}
                        </span>
                        <span className="font-medium">{story.country}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Student Info */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl flex-shrink-0">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{story.name}</h3>
                        <p className="text-sm text-gray-600">{story.university}</p>
                        <p className="text-xs text-emerald-600 font-medium">{story.course}</p>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-100" />
                      <p className="text-gray-600 text-sm leading-relaxed pl-4">
                        {story.story}
                      </p>
                    </div>

                    {/* Achievement Badge */}
                    <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-emerald-700">
                          {story.achievement}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.hometown}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Intake {story.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        IELTS {story.ieltsScore}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Video Testimonials
              </h2>
              <p className="text-lg text-gray-600">
                Watch our students share their study abroad journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-teal-700/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Watch Testimonial</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com/@studyabroadvadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Watch more testimonials on YouTube
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Be Our Next Success Story
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join 5000+ students who transformed their careers through international education. Get free counseling from Vadodara's most trusted consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+916353583148"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Call Now: +91 6353583148
              </Link>
              <Link
                href="https://wa.me/916353583148?text=Hi%2C%20I%20saw%20your%20success%20stories%20and%20want%20to%20know%20more%20about%20studying%20abroad."
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MegaFooter />
    </>
  );
}
