'use client';

import React, { useState } from "react";
import Image from "next/image";
// import { getEvidence } from "../../api";
import SearchResult from "../SearchResult";

interface SearchBarProps {
}

const SearchBar: React.FC<SearchBarProps> = () => {
    const [evidenceId, setEvidenceId] = useState("");
    const [result, setResult] = useState<SearchResultItem[] | null>(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmitHandler(event: React.FormEvent) {
        event.preventDefault();

        try {
            setIsLoading(true);
            // const evidenceResult = await getEvidence(evidenceId);

            const stringifiedJson = await localStorage.getItem(evidenceId);
            let evidenceResult = stringifiedJson ? JSON.parse(stringifiedJson) : null;

            setResult(evidenceResult);
            setHasSearched(true);

            console.log("Evidence result:", evidenceResult);
        } catch (error) {
            console.error("Error fetching evidence:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full max-w-5xl mx-auto py-10">
            <form onSubmit={onSubmitHandler} className="flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-14 bg-gray-200 outline-none border-none rounded-full pl-6 pr-14 text-base text-gray-900"
                    value={evidenceId}
                    onChange={(e) => setEvidenceId(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-11 h-11 ml-[-3.5rem] bg-transparent border-none outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-black"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </form>

            <SearchResult
                result={result}
                hasSearched={hasSearched}
                isLoading={isLoading}
            />

            {!hasSearched && (
                <Image
                    src="/images/searchbar.png"
                    alt="gavel"
                    width={1000}
                    height={500}
                    className="mx-auto mt-6"
                />
            )}
        </div>
    );
};

export default SearchBar;
