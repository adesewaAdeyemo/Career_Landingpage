// import { Button } from "@headlessui/react";

import React from "react";
import Button from "../Components/button";


export default function Insight() {
  return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="mt-40 text-6xl text-base font-semibold text-purple-700">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 mb-40 flex items-center justify-center gap-x-6">
            <Button href="/" variant="notFound" content="Go back home" className="text-blue-700 hover:text-blue-700"></Button>
            <a href="/contact" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
  ); 
}
