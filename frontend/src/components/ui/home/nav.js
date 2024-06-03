"use client";
import { useState } from "react";
import Link from "next/link";
import styles from '@/styles/home.module.css'

const Navbar = () => {
  const navbarItems = [
    { label: "Home", href: "/" },
    { label: "Lab", href: "/lab" },
    { label: "Research", href: "/research" },
    { label: "Teaching", href: "/teaching" },
    { label: "Members", href: "/members" },
    { label: "Oppurtunities", href: "/opportunities" },
    { label: "News", href: "/news" },
    { label: "Resources", href: "/resources" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="md:px-6 max-lg:px-2">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-4xl font-semibold py-2 md:ml-2">IITJ</h2>
          <ul className="flex flex-row justify-evenly gap-6 items-stretch">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                className="text-lg text-neutral hover:text-neutral-dark"
              >
                <Link href={item.href} className={`relative ${styles['nav-links-md']} after:bg-secondary`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
