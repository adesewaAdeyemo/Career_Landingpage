import React from 'react'

export default function about() {
  return (
    <div className="max-w-full mx-auto md:px-40 px-10 py-20">
      <div className="px-4 md:py-6 py-0 text-center">
        <h1 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          About Us
        </h1>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {" "}
        <div className="flex flex-col justify-center">
          <h2 className="md:text-4xl text-2xl font-extrabold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of dedicated professionals committed to providing the
            best services to our clients. At Path Finder, we empower individuals
            to unlock their potential by offering data-driven insights into
            their career trajectories.
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          {" "}
          <div className="p-6 bg-white rounded-lg shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To empower individuals by providing data-driven insights and
              guidance for their career paths.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the leader in our industry, setting standards for excellence
              and integrity.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Our Insight</h3>

            <img
              src="https://res.cloudinary.com/dorjfo4ca/image/upload/v1728475760/longgraph_zyxijw.png"
              alt=""
            />
          </div>
        </div>
      </main>
    </div>
  );
}
