"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // active section
  const [navbarStyle, setNavbarStyle] = useState("default");

  // detect scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navigationLinks = [
    { name: "Hire with Liftoff", link: "/for-companies" },
    { name: "About us", link: "/about" },
  ];

  // CLOSE MENU ON ROUTE CHANGE
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // PREVENT BODY SCROLL
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // navbar bg after scroll
      setHasScrolled(scrollPosition > 40);

      // detect active sections
      const sections = document.querySelectorAll("[data-navbar]");

      let currentSection = "default";

      sections.forEach((section) => {
        const el = section as HTMLElement;

        const top = el.offsetTop - 150;

        if (scrollPosition >= top) {
          currentSection = el.dataset.navbar || "default";
        }
      });

      setNavbarStyle(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // NAVBAR BACKGROUND STATES
  const navbarClasses = (() => {
    // TOP OF PAGE
    if (!hasScrolled) {
      return "bg-transparent";
    }

    switch (navbarStyle) {
      case "hero":
        return "bg-[#181229]";

      case "footer":
        return "bg-[#181229]";

      default:
        return "bg-white text-black";
    }
  })();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${navbarClasses}`}
    >
      <div className="container-width flex items-center justify-between py-4">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="text-2xl font-bold tracking-tighter "
        >
          LIFTOFF
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map(({ name, link }) => {
            const isActive = pathname.startsWith(link);

            return (
              <Link
                key={link}
                href={link}
                className={`relative text-[16px] transition-all duration-300 ${
                  isActive
                    ? "text-[#181229] font-medium"
                    : "text-[#181229] hover:text-[#181229]"
                }`}
              >
                {name}

              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => router.push("/login")}
            className="text-[16px] text-[#181229] transition "
          >
            Log in
          </button>

          <button
            onClick={() => router.push("/connector-waitlist")}
            className="primary-button text-[16px]"
          >
            Request access 
          </button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:hidden">
        <Button
            onClick={() => router.push("/for-companies")}
            className="rounded-[10px] p-4.5 bg-transparent border border-neutral-400/30  hover:bg-white/5 text-[#181229] hover:text-[#181229]"
          >
Hire with Liftoff
          </Button>
          {/* LOGIN */}
          <Button
            onClick={() => router.push("/login")}
            size="icon"
            variant="outline"
            className="rounded-[10px] p-4.5 bg-transparent border border-neutral-400/30  hover:bg-white/5 hover:text-[#181229]"
          >
            <User className="h-4 w-4" />
          </Button>

          {/* MENU BUTTON */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center rounded-[10px] p-1.5 bg-transparent border border-neutral-400/30 transition"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 right-0 bottom-0 top-[0px]  z-40 bg-[#fffbf4] transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-3"
        }`}
        onClick={toggleMenu}
      >
        <div
          className=" mt-0 flex h-full flex-col  pb-30"
          onClick={(e) => e.stopPropagation()}
        >
                <div className="container-width flex items-center justify-between py-4">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="text-2xl font-bold tracking-tight "
        >
          LIFTOFF
        </Link>


        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => router.push("/login")}
            className="text-[16px] text-[#181229] transition hover:text-white"
          >
            Log in
          </button>

          <button
            onClick={() => router.push("/connector-waitlist")}
            className="primary-button text-[16px]"
          >
            Request access to hire
          </button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:hidden">
          {/* LOGIN */}
          <Button
            onClick={() => router.push("/login")}
            size="icon"
            variant="outline"
            className="rounded-[10px] p-4.5 bg-transparent border   hover:bg-white/5 hover:text-[#181229]"
          >
            <User className="h-4 w-4" />
          </Button>

          {/* MENU BUTTON */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center rounded-[10px] p-1.5 bg-transparent border transition"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

<div className="space-y-24">
          {/* LINKS */}
          <nav className="flex flex-col">
            {navigationLinks.map(({ name, link }) => {
              const isActive = pathname.startsWith(link);

              return (
                <Link
                  key={link}
                  href={link}
                  className={`border-b  px-4 py-6 text-[17px] transition-all duration-300 ${
                    isActive
                      ? "font-semibold text-[#181229]"
                      : "text-[#181229] hover:text-[#181229]"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="space-y-3 px-4">
            <button
              onClick={() => router.push("/login")}
              className="w-full rounded-md border border-[#181229] py-3 text-sm text-[#181229] transition hover:bg-white/5"
            >
              Log in
            </button>

            <button
              onClick={() => router.push("/connector-waitlist")}
              className="primary-button w-full rounded-xl text-sm"
            >
              Request access
            </button>
          </div>

          </div>
        </div>
      </div>
    </header>
  );
}