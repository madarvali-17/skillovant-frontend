"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dcecf1] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3"
        >
          {/* Temporary logo container */}
          <div className="relative h-15 w-13 shrink-0">
          <Image
          src="/skillovate-logo.jpeg"
          alt="Skillovant"
          fill
          className="object-contain"
          sizes="44px"
          />
          </div>
          <span className="text-[25px] font-bold tracking-tight text-[#053f5c]">
            Skillovant
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-[#053f5c]"
                    : "text-[#173042] hover:text-[#429ebd]"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#429ebd]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/get-started"
          className="hidden items-center gap-2 rounded-xl bg-[#053f5c] px-6 py-3.5 text-sm font-bold !text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#429ebd] lg:inline-flex"
        >
          Get Started
          <ArrowRight size={17} />
        </Link>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-xl border border-[#dcecf1] p-2.5 text-[#053f5c] lg:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#dcecf1] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-[#9fe7f5]/30 text-[#053f5c]"
                      : "text-[#647b88] hover:bg-[#9fe7f5]/20"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#053f5c] px-5 py-3.5 text-sm font-bold !text-white"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}