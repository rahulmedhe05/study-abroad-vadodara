"use client";

import { useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
}

// SEO-optimized video content for study abroad
const videos: Video[] = [
  {
    id: "1",
    title: "How to Get Canada Student Visa in 2026 - Complete Guide",
    description: "Step-by-step guide to Canada student visa application process. Learn about SDS stream, required documents, GIC, and tips for approval from Vadodara's expert consultants.",
    thumbnailUrl: "/images/videos/canada-visa-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    duration: "12:45",
    category: "Visa Guide",
  },
  {
    id: "2",
    title: "IELTS Preparation Tips - Score Band 7+ in 30 Days",
    description: "Expert IELTS preparation strategies from Vadodara's best coaching center. Learn module-wise tips for Reading, Writing, Listening, and Speaking.",
    thumbnailUrl: "/images/videos/ielts-tips-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    duration: "15:20",
    category: "Exam Prep",
  },
  {
    id: "3",
    title: "Study Abroad Without IELTS - All Options Explained",
    description: "Discover how to study abroad without IELTS. Learn about MOI letter, Duolingo, PTE, and universities that don't require IELTS for Indian students.",
    thumbnailUrl: "/images/videos/without-ielts-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    duration: "10:30",
    category: "Study Guide",
  },
  {
    id: "4",
    title: "Top 5 Countries for Indian Students in 2026",
    description: "Comparison of top study abroad destinations for Indian students. Learn about costs, visa process, PR pathway, and job opportunities in Canada, UK, USA, Australia, and Germany.",
    thumbnailUrl: "/images/videos/top-countries-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    duration: "18:15",
    category: "Country Guide",
  },
  {
    id: "5",
    title: "How to Write a Winning SOP for Study Abroad",
    description: "Learn how to write a compelling Statement of Purpose (SOP) that gets you admitted to top universities. Real examples and expert tips from Vadodara consultants.",
    thumbnailUrl: "/images/videos/sop-writing-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    duration: "14:00",
    category: "Documents",
  },
  {
    id: "6",
    title: "Scholarships for Indian Students - Complete List 2026",
    description: "Complete guide to scholarships for Indian students studying abroad. Learn about Chevening, Commonwealth, DAAD, and university-specific scholarships.",
    thumbnailUrl: "/images/videos/scholarships-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    duration: "16:45",
    category: "Scholarships",
  },
];

// Generate VideoObject Schema for SEO
export function generateVideoSchema() {
  return videos.map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://studyabroadvadodara.in${video.thumbnailUrl}`,
    uploadDate: "2026-01-15",
    duration: `PT${video.duration.replace(":", "M")}S`,
    contentUrl: video.videoUrl,
    embedUrl: video.videoUrl,
    publisher: {
      "@type": "Organization",
      name: "Study Abroad Consultants Vadodara",
      logo: {
        "@type": "ImageObject",
        url: "https://studyabroadvadodara.in/logo.svg",
      },
    },
  }));
}

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Study Abroad Video Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our expert video guides to learn everything about studying abroad - from visa applications to IELTS preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <div
                  className="w-full h-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center"
                >
                  <div className="text-center text-white p-4">
                    <Play className="w-16 h-16 mx-auto mb-2 opacity-80" />
                    <span className="text-sm font-medium opacity-75">Click to Play</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-emerald-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-600">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Subscribe CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@studyabroadvadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to Our YouTube Channel
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
