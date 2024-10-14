"use client";

// import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import Logo from "./Logo";

const navigation = [
  //   { name: "Product", href: "#" },
  //   { name: "Features", href: "#" },
  //   { name: "Marketplace", href: "#" },
  { name: "About", href: "/about" },
  { name: "Insight", href: "/insight" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-40 bg-gradient-to-r to-blue-500 from-purple-600"
        >
          {/* logo */}
          <Logo className="-m-1.5 p-1.5" textColor="text-white"/>

          {/* hamburger menu */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* navigation links for lg*/}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <div className="hidden lg:flex lg:gap-x-12 text-white text-semibold mx-10">
              {navigation.map((item) => (
                <Button
                  content={item.name}
                  variant="outline"
                  key={item.name}
                  href={item.href}
                  className="leading-6"
                ></Button>
              ))}
            </div>

            <Button
              content="Sign In"
              variant="filled"
              href="/auth"
            ></Button>
          </div>
        </nav>

        {/* mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="sr-only">The Creatives</span>
                <img
                  alt=""
                  src="https://res.cloudinary.com/dorjfo4ca/image/upload/v1728427290/pathLogo.png"
                  className="h-8 w-auto"
                />
                <h1 className="text-xl font-bold text-white">Path Finder</h1>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-white">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 -mx-5">
                  <Button content="Sign in" variant="outline"></Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
