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

  const navigationLink = [
    { name: "Hire with Liftoff", link: "/for-companies" },
    { name: "About us", link: "/about" },
  ];

  // SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // transparent when top
      setHasScrolled(scrollPosition > 40);

      // detect sections manually
      const sections = document.querySelectorAll("[data-navbar]");
      let currentSection = "default";

      sections.forEach((section) => {
        const el = section as HTMLElement;
      
        const top = el.offsetTop - 150;
      
        // use viewport instead of exact bottom
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

  // NAVBAR BACKGROUNDS
  const navbarClasses = (() => {
    // INITIAL STATE
    if (!hasScrolled) {
      return "bg-transparent";
    }

    switch (navbarStyle) {
      case "hero":
        return "bg-[#181229]";

      case "footer":
        return "bg-[#181229] ";

      default:
        return "bg-[#181229]/50 backdrop-blur-md";
    }
  })();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-500 ease-out ${navbarClasses}`}
    >
      <div className="container-width flex items-center justify-between py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          LIFTOFF
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLink.map(({ name, link }, index) => {
            const isActive = pathname === link;

            return (
              <Link
                key={index}
                href={link}
                className={`text-[16px] transition-colors duration-200 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-white/90 hover:text-white"
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
            className="text-[16px] text-white transition"
          >
            Log in
          </button>

          <button
            onClick={() => router.push("/connector-waitlist")}
            className="secondary-button text-[14px]"
          >
            Request access to hire
          </button>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            onClick={() => router.push("/login")}
            size="icon"
            variant="outline"
            className="rounded-[8px] p-4.5 bg-transparent border border-slate-600/30 text-white hover:bg-transparent hover:text-white"
          >
            <User className="h-4 w-4" />
          </Button>

          <button
            onClick={toggleMenu}
            className="flex items-center justify-center rounded-[8px] p-1.5 bg-transparent border border-slate-600/30 text-white"
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
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-[0px] z-40 bg-[#181229] md:hidden"
          onClick={toggleMenu}
        >
          <div
            className=" mt-4 space-y-15 "
            onClick={(e) => e.stopPropagation()}
          >
                  <div className="container-width flex items-center justify-between ">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white"
        >
          LIFTOFF
        </Link>



        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => router.push("/login")}
            className="text-[16px] text-white transition"
          >
            Log in
          </button>

          <button
            onClick={() => router.push("/connector-waitlist")}
            className="secondary-button text-[16px]"
          >
            Request access to hire
          </button>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            onClick={() => router.push("/login")}
            size="icon"
            variant="outline"
            className="rounded-[8px] p-4.5 bg-transparent border border-slate-600/30 text-white hover:bg-transparent hover:text-white"
          >
            <User className="h-4 w-4" />
          </Button>

          <button
            onClick={toggleMenu}
            className="flex items-center justify-center rounded-[8px] p-1.5 bg-transparent border border-slate-600/30 text-white"
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
            {/* LINKS */}
            <nav className="flex flex-col space-y-5">
              {navigationLink.map(({ name, link }, index) => {
                const isActive = pathname === link;

                return (
                  <Link
                    key={index}
                    href={link}
                    onClick={toggleMenu}
                    className={`border-b border-white/10 px-4 pb-6 text-[16px] transition ${
                      isActive
                        ? "font-semibold text-white"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>

            {/* ACTIONS */}
            <div className="space-y-3 pt-40 px-2">
              <button
                onClick={() => {
                  toggleMenu();
                  router.push("/login");
                }}
                className="w-full rounded-md border border-white/20 py-3 text-sm text-white"
              >
                Log in
              </button>

              <button
                onClick={() => {
                  toggleMenu();
                  router.push("/connector-waitlist");
                }}
                className="secondary-button w-full rounded-md text-sm"
              >
                Request access
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}