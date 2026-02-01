import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  getAllBlogArticles, 
  getBlogArticleBySlug, 
  getRelatedArticles,
  blogCategories 
} from "@/lib/blog-config";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, ChevronRight } from "lucide-react";

const baseUrl = "https://studyabroadvadodara.in";

// Generate static params for all blog articles
export async function generateStaticParams() {
  const articles = getAllBlogArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${baseUrl}/blog/${slug}`,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.modifiedDate,
      authors: [article.author],
      tags: article.tags,
      locale: "en_IN",
      siteName: "Study Abroad Consultants Vadodara",
      images: [
        {
          url: `${baseUrl}${article.featuredImage}`,
          width: 1200,
          height: 630,
          alt: article.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${baseUrl}${article.featuredImage}`],
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

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);
  const category = blogCategories.find(c => c.slug === article.category);

  // JSON-LD for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${baseUrl}/blog/${slug}`,
    headline: article.title,
    description: article.metaDescription,
    image: `${baseUrl}${article.featuredImage}`,
    datePublished: article.publishDate,
    dateModified: article.modifiedDate,
    author: {
      "@type": "Organization",
      name: article.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Study Abroad Consultants Vadodara",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
    keywords: article.tags.join(", "),
    articleSection: category?.name,
    wordCount: article.content.split(/\s+/).length,
    timeRequired: `PT${article.readTime}M`,
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${baseUrl}/blog/${slug}`,
      },
    ],
  };

  // Simple markdown-like content renderer
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-lg font-bold text-gray-800 mt-4 mb-2">{line.replace('#### ', '')}</h4>;
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 text-gray-700">{line.replace('- ', '')}</li>;
        }
        if (line.match(/^\d+\. /)) {
          return <li key={index} className="ml-4 text-gray-700 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
        }
        
        // Tables (simplified)
        if (line.startsWith('|')) {
          return null; // Skip table rendering for simplicity
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{line}</p>;
      });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <BusinessNav />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b pt-20">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-emerald-600">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-400 truncate max-w-[200px]">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Link 
                  href={`/blog/category/${article.category}`}
                  className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full hover:bg-emerald-200 transition-colors"
                >
                  {category?.name}
                </Link>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min read
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-t border-b py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Published: {new Date(article.publishDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Updated: {new Date(article.modifiedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={article.featuredImage}
                alt={article.featuredImageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
                <div className="prose prose-lg max-w-none">
                  {renderContent(article.content)}
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-500" />
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <article key={related.slug} className="group">
                      <Link href={`/blog/${related.slug}`}>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                          <Image
                            src={related.featuredImage}
                            alt={related.featuredImageAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <h3 className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from Vadodara's most trusted study abroad consultants. Free counseling available!
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
