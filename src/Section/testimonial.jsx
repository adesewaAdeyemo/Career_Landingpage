import React from "react";

// Sample testimonials array
const testimonials = [
  { message: "This platform transformed my career path!", author: "Jane Doe" },
  {
    message: "Amazing insights and resources. Highly recommend!",
    author: "John Smith",
  },
  { message: "A game-changer for my career decisions!", author: "Emily Davis" },
  { message: "Incredible support and guidance!", author: "Michael Brown" },
];

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="cw-full text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-scroll">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="inline-block w-full sm:w-1/2 md:w-1/3 p-4"
              >
                <blockquote className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.message}&quot;
                  </p>
                  <footer className="text-gray-900 font-bold">
                    - {testimonial.author}
                  </footer>
                </blockquote>
              </div>
            ))}
            {/* Repeat testimonials for continuous effect */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index + testimonials.length}
                className="inline-block w-full sm:w-1/2 md:w-1/3 p-4"
              >
                <blockquote className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 italic mb-4">
                    &quot;{testimonial.message}&quot;
                  </p>
                  <footer className="text-gray-900 font-bold">
                    - {testimonial.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
