"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  mobileOnly?: boolean;
}

const navLinks: NavLink[] = [
  { href: "/automotive", label: "Automotive" },
  { href: "/electric-mobility", label: "Electric Mobility" },
  { href: "/technology", label: "Technology" },
  { href: "/engineering-lab", label: "Lab" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", mobileOnly: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <Link className="brand" href="/">
        <b>N.</b> NEXORA <span>ENGINEERING</span>
      </Link>

      <nav className={open ? "show" : ""}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={[
              pathname.startsWith(link.href) && "active",
              link.mobileOnly && "mobile-only",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link className="navcta" href="/contact">
        Contact ↗
      </Link>

      <button
        className="menubtn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
