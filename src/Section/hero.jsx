import React from 'react'
import Button from '../Components/button'
export default function hero() {
  return (
    <div className="h-screen">
      <section className="flex items-center justify-center h-screen bg-gradient-to-r to-blue-500 from-purple-600 text-white">
        {" "}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Your Career Journey
          </h1>
          <p className="text-lg mb-8">
            Discover your potential and explore endless opportunities.
          </p>
          <Button content="Get Started" variant="filled"></Button>
        </div>
      </section>{" "}
    </div>
  );
}
