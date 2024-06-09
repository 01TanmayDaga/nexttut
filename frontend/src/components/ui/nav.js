"use client";
import { useState } from "react";
import Link from "next/link";
import styles from '@/styles/home.module.css'

const Navbar = () => {
  const navbarItems = [
    { label: "Home", href: "/" },
    { label: "Lab", href: "https://iitj.ac.in/department/index.php?dept=biology&cat=Laboratories&id=computational_biology_bioinformatics" },
    { label: "Publication", href: "/publications" },
    { label: "Teaching", href: "/teaching" },
    { label: "Members", href: "/members" },
    { label: "Oppurtunities", href: "/opportunities" },
    { label: "News", href: "/news" },
    { label: "Resources", href: "/resources" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contactUs" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="md:px-6 max-lg:px-2">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-4xl font-semibold py-2 md:ml-2">IITJ</h2>
          <ul className="flex flex-row justify-evenly gap-6 items-stretch">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                className="text-lg text-neutral hover:text-neutral-dark hover:scale-95 transition-all ease-in"
              >
                <Link href={item.href} className={`relative ${styles['nav-links-md']} after:bg-sky-500 transform-gpu scale-150`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
