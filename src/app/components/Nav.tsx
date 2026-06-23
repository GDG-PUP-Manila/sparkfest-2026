"use client";

import { useState } from "react";
import { NAV_LINKS, REGISTER_URL } from "./content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-grid-cyan/20 bg-navy-900/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:h-[72px] md:px-8 desktop:max-w-[1600px]"
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/assets/nav/sparkfest-mascot.png"
            alt="SparkFest mascot"
            width={48}
            height={48}
            className="h-9 w-auto md:h-11"
          />
          <span className="leading-none">
            <span className="block text-base font-bold tracking-tight text-white md:text-xl">
              SparkFest
            </span>
            <span className="block text-center text-sm font-bold leading-none tracking-tight md:text-lg">
              <span className="text-logo-2">2</span>
              <span className="text-logo-0">0</span>
              <span className="text-logo-2b">2</span>
              <span className="text-logo-6">6</span>
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-pixel text-[10px] tracking-wide text-white/80 transition-colors hover:text-grid-cyan xl:text-[11px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-2 border-grid-cyan/50 text-grid-cyan md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg leading-none">{open ? "✕" : "≡"}</span>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-grid-cyan/20 bg-navy-800 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border border-transparent px-3 py-3 font-pixel text-[11px] text-white/85 hover:border-grid-cyan/40 hover:text-grid-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block bg-google-blue-500 px-3 py-3 text-center font-pixel text-[11px] text-white"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
