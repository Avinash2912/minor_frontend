"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CardSpotlightDemo() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-black">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,4,10,1),rgba(0,0,0,1))]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.03),rgba(139,92,246,0.03),rgba(236,72,153,0.03),rgba(59,130,246,0.03))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent mb-8">
            Blockchain Data Management
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
            Secure, efficient, and transparent data handling solutions powered by next-generation blockchain technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle Glow Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.08),transparent_50%)]" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <CardSpotlight className="h-full backdrop-blur-3xl hover:scale-[1.02] transition-all duration-500 bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_0_40px_rgba(59,130,246,0.08)] rounded-3xl" color="rgba(59, 130, 246, 0.12)">
              <div className="relative z-20 p-6 flex flex-col items-center text-center">
                <div className="relative w-full h-64 mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-black to-slate-900 group ring-1 ring-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/get-data.svg"
                    alt="Get Data"
                    fill
                    className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mb-4">Get Data</h3>
                <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                  Unlock Data Fast! Securely access authenticated data stored on the blockchain.
                  Swift, secure, and tamper-proof verification system.
                </p>
                <Link href="/get-data" className="block w-full">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative group overflow-hidden rounded-xl bg-black/40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-600/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] group-hover:translate-x-full duration-1000 transform -skew-x-12" />
                    <div className="relative px-6 py-3.5 flex items-center justify-center gap-2">
                      <span className="text-white/90 font-medium text-lg">Explore</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/90 text-xl"
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.button>
                </Link>
              </div>
            </CardSpotlight>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10"
          >
            <CardSpotlight className="h-full backdrop-blur-3xl hover:scale-[1.02] transition-all duration-500 bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_0_40px_rgba(139,92,246,0.08)] rounded-3xl" color="rgba(139, 92, 246, 0.12)">
              <div className="relative z-20 p-6 flex flex-col items-center text-center">
                <div className="relative w-full h-64 mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-black to-slate-900 group ring-1 ring-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/create-data.svg"
                    alt="Create Data"
                    fill
                    className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent mb-4">Create Data</h3>
                <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                  Upload yourself! Upload and safeguard data with blockchain technology.
                  Streamlined, secure, and transparent submission process.
                </p>
                <Link href="/create-data" className="block w-full">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative group overflow-hidden rounded-xl bg-black/40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-purple-600/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] group-hover:translate-x-full duration-1000 transform -skew-x-12" />
                    <div className="relative px-6 py-3.5 flex items-center justify-center gap-2">
                      <span className="text-white/90 font-medium text-lg">Get Started</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/90 text-xl"
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.button>
                </Link>
              </div>
            </CardSpotlight>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-10"
          >
            <CardSpotlight className="h-full backdrop-blur-3xl hover:scale-[1.02] transition-all duration-500 bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_0_40px_rgba(34,211,238,0.08)] rounded-3xl" color="rgba(34, 211, 238, 0.12)">
              <div className="relative z-20 p-6 flex flex-col items-center text-center">
                <div className="relative w-full h-64 mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-black to-slate-900 group ring-1 ring-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/transfer-data.svg"
                    alt="Transfer Data"
                    fill
                    className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent mb-4">Transfer Data</h3>
                <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                  Pass the Baton! Effortlessly transfer disability data with smart contracts.
                  Transparent, traceable, and secure chain of custody.
                </p>
                <Link href="/transfer-data" className="block w-full">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative group overflow-hidden rounded-xl bg-black/40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-cyan-600/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] group-hover:translate-x-full duration-1000 transform -skew-x-12" />
                    <div className="relative px-6 py-3.5 flex items-center justify-center gap-2">
                      <span className="text-white/90 font-medium text-lg">Transfer Now</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/90 text-xl"
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.button>
                </Link>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
}; 