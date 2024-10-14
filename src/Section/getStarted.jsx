import React from 'react'
import Button from '../Components/button';

export default function getStarted() {
  return (
    <section className="py-16 bg-purple-700 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg mb-6">
          Join us today and unlock your true potential!
        </p>
        <Button content="Get Started" variant="filled"></Button>
      </div>
    </section>
  );
}
