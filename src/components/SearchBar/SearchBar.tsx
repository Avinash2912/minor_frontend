"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { getHealthRecord } from "../../api";
import SearchResult from "../SearchResult";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("../../components/ui/globe").then((mod) => mod.World),
  { ssr: false, loading: () => <GlobeLoader /> }
);

function GlobeLoader() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-slate-900/50 rounded-2xl backdrop-blur-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white/70">Loading Globe...</p>
      </div>
    </div>
  );
}

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [evidenceId, setEvidenceId] = useState("");
  const [result, setResult] = useState<SearchResultItem[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  useEffect(() => {
    setEvidenceId(localStorage.getItem("lastRecordId") ?? "");
  }, []);

  async function onSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!evidenceId.trim()) return;

    try {
      setIsLoading(true);
      const evidenceResult = await getHealthRecord(evidenceId);
      setResult(evidenceResult);
      setHasSearched(true);
    } catch (error) {
      console.error("Error fetching evidence:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
        >
          Health Record Search
        </motion.h1>

        <motion.form 
          onSubmit={onSubmitHandler}
          className="relative w-full max-w-3xl mx-auto mb-12"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className={`relative rounded-2xl transition-all duration-300 ${
              isFocused ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20' : ''
            }`}
          >
            <input
              type="text"
              placeholder="Enter Evidence ID..."
              className="w-full h-16 bg-white/10 backdrop-blur-xl text-white placeholder-gray-400 rounded-2xl pl-6 pr-14 text-lg border-none outline-none transition-all"
              value={evidenceId}
              onChange={(e) => setEvidenceId(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <motion.button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div 
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        {!hasSearched ? (
          <div className="relative w-full h-[600px] max-w-5xl mx-auto">
            <Suspense fallback={<GlobeLoader />}>
              <World data={sampleArcs} globeConfig={globeConfig} />
            </Suspense>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <SearchResult
              result={result}
              hasSearched={hasSearched}
              isLoading={isLoading}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SearchBar;
