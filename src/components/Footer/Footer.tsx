"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const footerLinks = [
    {
        title: "Product",
        titleColor: "from-purple-400 to-pink-400",
        links: [
            { name: "Features", href: "#" },
            { name: "Documentation", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "API", href: "#" },
        ],
    },
    {
        title: "Company",
        titleColor: "from-blue-400 to-cyan-400",
        links: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Press", href: "#" },
        ],
    },
    {
        title: "Legal",
        titleColor: "from-emerald-400 to-teal-400",
        links: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "Licensing", href: "#" },
        ],
    },
];

const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaDiscord, href: "#", label: "Discord" },
];

export default function Footer(): JSX.Element {
    return (
        <footer className="relative w-full bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            {/* Animated Background Effect */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-3xl" />
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-transparent rotate-12 transform-gpu" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center space-x-3"
                        >
                            <Image
                                src="/images/logo.png"
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                                alt="Logo"
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                BlockChain
                            </span>
                        </motion.div>
                        <p className="text-sm text-gray-400 max-w-sm">
                            Revolutionizing medical disability documentation through secure blockchain technology.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + sectionIndex * 0.1 }}
                            className="space-y-4"
                        >
                            <motion.h3 
                                className={`text-base font-bold uppercase tracking-wider bg-gradient-to-r ${section.titleColor} bg-clip-text text-transparent`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {section.title}
                            </motion.h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + linkIndex * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                                        >
                                            {link.name}
                                            <span className={`absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r ${section.titleColor} group-hover:w-full transition-all duration-300`} />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="py-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
                    >
                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()}{" "}
                            <Link href="/" className="hover:text-white transition-colors">
                                BlockChain for Medical Disability
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>Made with</span>
                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                                className="text-red-500"
                            >
                                ❤️
                            </motion.span>
                            <span>by Team Blockchain</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}

