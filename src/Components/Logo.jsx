import React from 'react'

export default function Logo(props) {
  return (
    <div className="flex lg:flex-1">
      <a href="/" className={`flex items-center ${props.className}`}>
        {" "}
        <span className="sr-only">The Creatives</span>
        <img
          src="https://res.cloudinary.com/dorjfo4ca/image/upload/v1728427290/pathLogo.png"
          alt="Logo"
          className="w-auto"
          style={{ height: "80px" }}
        />
        <h1 className={`text-2xl font-bold  ${props.textColor}`}>
          Path Finder
        </h1>
      </a>
    </div>
  );
}
