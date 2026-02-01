import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogArticles, blogCategories, getRecentArticles } from "@/lib/blog-config";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const baseUrl = "https://studyabroadvadodara.in";

export const metadata: Metadata = {
  title: "Study Abroad Blog | Expert Guides, Tips & Resources | Vadodara",
  description: "Expert study abroad guides, visa tips, scholarship information, IELTS preparation strategies, and country guides. Stay updated with the latest in international education from Vadodara's best consultants.",
  keywords: [
    "study abroad blog",
    "international education tips",
    "visa guides",
    "IELTS preparation",
    "scholarship guides",
    "study in Canada guide",
    "study in UK guide",
    "study abroad from Vadodara",
  ],
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "Study Abroad Blog | Expert Guides & Resources",
    description: "Expert study abroad guides, visa tips, scholarship information, and country guides from Vadodara's trusted consultants.",
    url: `${baseUrl}/blog`,
    type: "website",
    locale: "en_IN",
    siteName: "Study Abroad Consultants Vadodara",
    images: [
      {
        url: `${baseUrl}/images/blog/og-blog.jpg`,
        width: 1200,
        height: 630,
        alt: "Study Abroad Blog - Expert Guides and Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Blog | Expert Guides & Resources",
    description: "Expert study abroad guides and tips from Vadodara's trusted consultants.",
    images: [`${baseUrl}/images/blog/og-blog.jpg`],
  },
};

export default function BlogPage() {
  const articles = getAllBlogArticles();
  const recentArticles = getRecentArticles(3);

  // JSON-LD for Blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${baseUrl}/blog`,
    name: "Study Abroad Blog - Expert Guides & Resources",
    description: "Expert study abroad guides, visa tips, and scholarship information from Vadodara's trusted consultants.",
    url: `${baseUrl}/blog`,
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Study Abroad Consultants Vadodara",
    },
    blogPost: articles.slice(0, 10).map(article => ({
      "@type": "BlogPosting",
      "@id": `${baseUrl}/blog/${article.slug}`,
      headline: article.title,
      description: article.excerpt,
      datePublished: article.publishDate,
      dateModified: article.modifiedDate,
      author: {
        "@type": "Organization",
        name: article.author,
      },
      image: `${baseUrl}${article.featuredImage}`,
      url: `${baseUrl}/blog/${article.slug}`,
    })),
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Study Abroad Blog
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Expert guides, tips, and resources to help you achieve your international education dreams
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-emerald-100 hover:text-emerald-700 text-gray-700 text-sm font-medium transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Featured Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full">
                          {blogCategories.find(c => c.slug === article.category)?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.publishDate).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min read
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              All Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <Link href={`/blog/${article.slug}`} className="flex gap-4 w-full">
                    <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-emerald-600">
                          {blogCategories.find(c => c.slug === article.category)?.name}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs text-gray-500">
                          {article.readTime} min read
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-1">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our expert counselors are ready to help you choose the right country, university, and course for your international education journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+916353583148"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Call Now: +91 6353583148
              </Link>
              <Link
                href="https://wa.me/916353583148"
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
