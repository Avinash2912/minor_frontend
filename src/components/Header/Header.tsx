"use client";
import Link from "next/link";
import Image from "next/image";
import { connectWallet } from "../../api";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEthereum, FaBook, FaUsers, FaNetworkWired } from "react-icons/fa";

const navLinks = [
  {
    name: "Learn",
    href: "https://ethereum.org/en/learn/",
    icon: FaBook,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Community",
    href: "https://ethereum.org/en/community/",
    icon: FaUsers,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Network",
    href: "https://ethereum.org/en/",
    icon: FaNetworkWired,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Header(props: any): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    connectWallet();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/70 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-gradient"></div>
                <Image
                  src="/images/logo.png"
                  width={40}
                  height={40}
                  className="relative transform group-hover:scale-110 transition-all duration-300"
                  alt="LOGO"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                DisabilityVerification
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          {props.isMain && (
            <div className="hidden md:flex items-center gap-8">
              {/* Nav Links */}
              <ul className="flex items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredLink(link.name)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group relative px-3 py-2"
                    >
                      <div className="relative">
                        <AnimatePresence>
                          {hoveredLink === link.name && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className={`absolute -inset-3 bg-gradient-to-r ${link.color} rounded-lg blur-lg opacity-20`}
                            />
                          )}
                        </AnimatePresence>
                        <link.icon className={`w-4 h-4 relative transition-transform duration-300 group-hover:scale-110 ${
                          hoveredLink === link.name ? 'text-white' : 'text-gray-400'
                        }`} />
                      </div>
                      <span className="relative">
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${link.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Create Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/create-evidence">
                  <button className="relative px-6 py-2.5 group overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy" />
                    <div className="absolute inset-0.5 bg-gray-900/90 rounded-[6px] group-hover:bg-gray-800/90 transition-colors" />
                    <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 group-hover:-translate-x-full duration-1000 ease-in-out transition-transform" />
                    <div className="relative flex items-center gap-2 text-white font-semibold">
                      <FaEthereum className="w-4 h-4 animate-bounce" />
                      <span>CREATE</span>
                    </div>
                  </button>
                </Link>
              </motion.div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-white p-2 z-50"
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 transform ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {props.isMain && (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden backdrop-blur-lg rounded-2xl mt-4 border border-white/10"
              >
                <ul className="space-y-2 p-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 text-gray-300 hover:text-white px-4 py-3 rounded-xl hover:bg-gradient-to-r ${link.color} hover:bg-opacity-10 transition-all duration-300`}
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-2"
                  >
                    <Link href="/create-evidence" className="block px-4">
                      <button className="w-full px-6 py-3 relative overflow-hidden rounded-xl group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy opacity-80" />
                        <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                          <FaEthereum className="w-5 h-5" />
                          <span>CREATE</span>
                        </div>
                      </button>
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </nav>
    </motion.header>
  );
}





