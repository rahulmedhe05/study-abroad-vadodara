"use client";

import Link from "next/link";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { studyAbroadKeywords } from "@/lib/keywords-config";
import { countries } from "@/lib/country-content";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronRight } from "lucide-react";

export function SEOFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-emerald-400">Study Abroad Consultants Vadodara</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Your trusted partner for international education in Vadodara. We provide expert guidance for studying abroad in USA, UK, Canada, Australia, Germany, and more. 5000+ successful placements with 98% visa success rate.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-emerald-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <p className="text-gray-300 font-medium">Call Us</p>
                  <a href="tel:+916353583148" className="text-gray-400 hover:text-white">+91 6353583148</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <p className="text-gray-300 font-medium">Email Us</p>
                  <a href="mailto:edu@studyabroadvadodara.in" className="text-gray-400 hover:text-white">edu@studyabroadvadodara.in</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <p className="text-gray-300 font-medium">Visit Us</p>
                  <p className="text-gray-400">201, Shree Complex, RC Dutt Road,<br />Alkapuri, Vadodara - 390007</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <p className="text-gray-300 font-medium">Working Hours</p>
                  <p className="text-gray-400">Mon - Sat: 9AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-emerald-400">Our Services</h3>
            <ul className="space-y-1 text-xs">
              <li><Link href="/student-visa-consultants-vadodara" className="text-gray-400 hover:text-white flex items-center gap-1"><ChevronRight className="w-3 h-3" />Student Visa Assistance</Link></li>
              <li><Link href="/ielts-coaching-vadodara" className="text-gray-400 hover:text-white flex items-center gap-1"><ChevronRight className="w-3 h-3" />IELTS Coaching</Link></li>
              <li><Link href="/gre-coaching-vadodara" className="text-gray-400 hover:text-white flex items-center gap-1"><ChevronRight className="w-3 h-3" />GRE Coaching</Link></li>
              <li><Link href="/gmat-coaching-vadodara" className="text-gray-400 hover:text-white flex items-center gap-1"><ChevronRight className="w-3 h-3" />GMAT Coaching</Link></li>
              <li><Link href="/scholarship-abroad-consultants-vadodara" className="text-gray-400 hover:text-white flex items-center gap-1"><ChevronRight className="w-3 h-3" />Scholarship Guidance</Link></li>
              <li><Link href="/sop-writing-for-study-visa-vadodara" className="text-gray-400 hover:text-white flex items-center gap-1"><ChevronRight className="w-3 h-3" />SOP Writing</Link></li>
              <li><Link href="/education-loan-study-abroad-vadodara" className="text-gray-400 hover:text-white flex items-center gap-1"><ChevronRight className="w-3 h-3" />Education Loan Help</Link></li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-emerald-400">Study Destinations</h3>
            <ul className="space-y-1 text-xs">
              {countries.slice(0, 10).map((country) => (
                <li key={country.slug}>
                  <Link href={`/${country.slug}`} className="text-gray-400 hover:text-white flex items-center gap-1">
                    <span className="text-sm">{country.flag}</span> Study in {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SEO Links Section - All Areas with Small Font */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h4 className="text-sm font-bold mb-3 text-emerald-400">Study Abroad Consultants - Service Areas in Vadodara</h4>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {vadodaraAreas.map((area, index) => (
              <span key={area} className="inline-flex items-center">
                <Link 
                  href={`/${area}`} 
                  className="text-[10px] text-gray-500 hover:text-emerald-400 transition-colors"
                  title={`Study Abroad Consultants in ${getAreaDisplayName(area)}, Vadodara`}
                >
                  Study Abroad in {getAreaDisplayName(area)}
                </Link>
                {index < vadodaraAreas.length - 1 && <span className="text-gray-700 mx-1 text-[10px]">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Links Section - All Keywords with Small Font */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h4 className="text-sm font-bold mb-3 text-emerald-400">Popular Services & Keywords</h4>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {studyAbroadKeywords.map((keyword, index) => (
              <span key={keyword.slug} className="inline-flex items-center">
                <Link 
                  href={`/${keyword.slug}`} 
                  className="text-[10px] text-gray-500 hover:text-emerald-400 transition-colors"
                  title={keyword.title}
                >
                  {keyword.title}
                </Link>
                {index < studyAbroadKeywords.length - 1 && <span className="text-gray-700 mx-1 text-[10px]">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Links Section - All Countries with Small Font */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h4 className="text-sm font-bold mb-3 text-emerald-400">Study Abroad Destinations</h4>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {countries.map((country, index) => (
              <span key={country.slug} className="inline-flex items-center">
                <Link 
                  href={`/${country.slug}`} 
                  className="text-[10px] text-gray-500 hover:text-emerald-400 transition-colors"
                  title={`Study in ${country.name} from Vadodara`}
                >
                  {country.flag} Study in {country.name} from Vadodara
                </Link>
                {index < countries.length - 1 && <span className="text-gray-700 mx-1 text-[10px]">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* LSI Keywords for SEO - Hidden but Crawlable */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-[9px] text-gray-600 leading-relaxed">
            Best Study Abroad Consultants in Vadodara | Overseas Education Consultants Vadodara | Canada Student Visa Vadodara | USA Student Visa Vadodara | UK Student Visa Vadodara | Australia Student Visa Vadodara | IELTS Coaching in Vadodara | GRE Coaching Vadodara | GMAT Coaching Vadodara | Study in Canada from Vadodara | Study in USA from Vadodara | Study in UK from Vadodara | Study in Australia from Vadodara | Study in Germany from Vadodara | Free Study Abroad Counseling Vadodara | Student Visa Consultants Near Me | Overseas Education Consultants Near Me | Study Abroad Agency in Alkapuri | Study Abroad Consultants Gotri | Study Abroad Consultants Manjalpur | Study Abroad Consultants Akota | Study Abroad Consultants Sayajigunj | MBA Abroad from Vadodara | MS in USA from Vadodara | MS in Canada from Vadodara | Engineering Study Abroad Vadodara | Medical Study Abroad Vadodara | Scholarship Guidance Vadodara | Education Loan for Study Abroad | SOP Writing Services Vadodara | LOR Writing Services | Visa Documentation Help Vadodara | Post Study Work Visa | PR Pathway After Studies | January Intake Abroad | September Intake Abroad | Fall 2026 Admissions | Spring 2026 Admissions
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-[10px] text-gray-500">
              © {new Date().getFullYear()} Study Abroad Consultants Vadodara. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="text-[10px] text-gray-500 hover:text-emerald-400">Home</Link>
              <Link href="/leads" className="text-[10px] text-gray-500 hover:text-emerald-400">Privacy Policy</Link>
              <Link href="/sitemap.xml" className="text-[10px] text-gray-500 hover:text-emerald-400">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
