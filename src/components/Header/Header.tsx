"use client";
import Link from "next/link";
import Image from "next/image";
import { connectWallet } from "../../api";

export default function Header(props: any): JSX.Element {
    const clickAnimation: string =
        "relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-teal-500 to-teal-700 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300";

    return (
        <header className="bg-gradient-to-r from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] backdrop-blur-md shadow-lg rounded-lg px-8 py-4">
            <nav className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        width={35}
                        height={40}
                        className="mr-2"
                        alt="LOGO"
                    />
                    <span className="text-gray-800 text-2xl font-bold tracking-wide">
                        DisabilityVerification
                    </span>
                </Link>
                {props.isMain && (
                    <div className="flex items-center gap-6">
                        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
                            <li className={clickAnimation}>
                                <Link href="https://ethereum.org/en/learn/">Learn</Link>
                            </li>
                            <li className={clickAnimation}>
                                <Link href="https://ethereum.org/en/community/">Community</Link>
                            </li>
                            <li className={clickAnimation}>
                                <Link href="https://ethereum.org/en/">Network</Link>
                            </li>
                        </ul>
                        <Link href="/create-evidence">
                            <button className="px-5 py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold shadow-md transition-transform duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500">
                                CREATE
                            </button>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}


