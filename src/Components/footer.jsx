import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-700 to-purple-500 text-white py-20">
      <div className="max-w-full mx-auto px-4 sm:px-10 lg:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Mission */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            Empowering individuals with data-driven insights and guidance for
            their career paths.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-gray-300 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="hover:text-gray-300 transition duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/blog"
                className="hover:text-gray-300 transition duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/faqs"
                className="hover:text-gray-300 transition duration-200"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/guides"
                className="hover:text-gray-300 transition duration-200"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:text-gray-300 transition duration-200"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Legals</h3>
          <ul className="space-y-2">
            <li>
              <a
                href=""
                className="hover:text-gray-300 transition duration-200"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-gray-300 transition duration-200"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-gray-300 transition duration-200"
              >
                Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-300">
          © 2024 Career Prediction. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
